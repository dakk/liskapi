const request = require ('request');
const api = require ('./api');
const assert = require ('assert');

let params = {
	ssl: false,
	host: 'localhost',
	port: 8000
};

class APIRequest {
	constructor (callDesc, callParams) {
		this.params = params;
		this.callParams = callParams || {};
		this.callDesc = callDesc;
		this.sortParams = null;
		this.postData = null;
		this.pageParams = null;
	}

	host (hostParams) {
		this.params = hostParams;
		return this;
	}

	data (postData) {
		this.postData = postData;
		return this;
	}

	paginate (pageParams) {
		if (!this.callDesc.paginated)
			assert (false, 'Pagination not available for this call');

		this.pageParams = pageParams;
		return this;
	}

	sort (sortParams) {
		if (!this.callDesc.paginated)
			assert (false, 'Sorting not available for this call');

		if (Object.keys (sortParams).length != 1)
			assert (false, 'Calls can be sorted only by one field');

		this.sortParams = sortParams;
		return this;
	}

	_call (callParamsRaw) {
		return new Promise ((resolve, reject) => {
			let protocol = null;

			if (this.params.ssl)
				protocol = 'https';
			else
				protocol = 'http';

			let uri = `${protocol}://${this.params.host}:${this.params.port}${this.callDesc.path}`;

			if(callParamsRaw.length)
				uri += '?' + callParamsRaw.join ('&');

			let requestOption
			if(this.postData)
				requestOption = {
					method: this.callDesc.method,
					body: this.postData,
					uri: uri,
					json: true
				}
			else
				requestOption = {
					method: this.callDesc.method,
					uri: uri,
					json: true
				}


			request (requestOption, (error, response, data) => {
				if (!error && response.statusCode == 200) {
					if (data.success)
						return resolve (data);
					else
						return reject (data.error);
				} else {
					return reject (error);
				}
			});
		});
	}

	call () {
		let callParamsRaw = [];

		/* Call parameters check */
		for (let p in this.callParams) {
			assert (p in this.callDesc.params, `Parameter ${p} not allowed`);
			assert (typeof (this.callParams[p]) == this.callDesc.params[p].type, `Parameter ${p} must be a ${this.callDesc.params[p].type} (got ${typeof (this.callParams[p])} instead)`);
			callParamsRaw.push (`${p}=${this.callParams[p]}`);
		}
		for (let p in this.callDesc.params) {
			if ('required' in this.callDesc.params[p] && this.callDesc.params[p]) 
				assert (p in this.callParams, `Parameter ${p} is required`);
		}

		/* Post parameters check */
		for (let p in this.postData) {
			assert (p in this.callDesc.postParams, `Post parameter ${p} not allowed`);
			assert (typeof (this.postData[p]) == this.callDesc.postParams[p].type, `Post parameter ${p} must be a ${this.callDesc.postParams[p].type} (got ${typeof (this.postData[p])} instead)`);
		}
		for (let p in this.callDesc.postParams) {
			if ('required' in this.callDesc.postParams[p] && this.callDesc.postParams[p]) 
				assert (p in this.postData, `Post parameter ${p} is required`);
		}

		/* Sorting parameters */
		if (this.sortParams) {
			callParamsRaw.push (`orderBy=${Object.keys (this.sortParams)[0]}:${this.sortParams [Object.keys (this.sortParams)[0]]}`);
		}

		/* Pagination parameters */
		if (this.pageParams) {
			if (this.pageParams.limit > 101) {
				let promiseList = [];

				for (let i = this.pageParams.offset || 0; i < this.pageParams.limit; i += 101) {
					let callParamsRaw2 = callParamsRaw;
					callParamsRaw2.push (`offset=${i}`);
					callParamsRaw2.push (`limit=${i + 101 ? (i+101) < this.pageParams.limit : this.pageParams.limit - i}`);
					promiseList.push (this._call (callParamsRaw2));
				}

				return new Promise ((resolve, reject) => {
					Promise.all (promiseList)
						.then (ress => {
							let res = { success: true };
							res[this.callDesc.paginatedResult] = [];
							for (let row in ress) {
								res[this.callDesc.paginatedResult] = res[this.callDesc.paginatedResult].concat (row[this.callDesc.paginatedResult]);
							}
							return resolve (res);
						})
						.catch (errs => {
							return reject (errs);
						});
				});
			} else {
				if (this.pageParams.offset)
					callParamsRaw.push (`offset=${this.pageParams.offset}`);
				if (this.pageParams.limit)
					callParamsRaw.push (`limit=${this.pageParams.limit}`);
			}
		}

		/* Make the request */
		return this._call (callParamsRaw);
	}
}

module.exports = (p) => {
	if (p !== undefined)
		params = p;

	let callList = {};

	Object.keys(api).forEach((x) => {
		callList [x] = (callParams) => { return (new APIRequest (api [x], callParams)); };
	});

	return callList;
};
