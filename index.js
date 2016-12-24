const request 	= require ('request');
const api 		= require ('./api');

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
		this.pageParams = null;
	}

	host (hostParams) {
		this.params = hostParams;
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

	call () {
		const mreq = request.get ? this.callDesc.method == 'GET' : request.post;

		callParamsRaw = [];

		/* Call parameters */
		for (var p in this.callParams) {
			assert (p in this.callDesc.params, `Parameter ${p} not allowed`);
			assert (typeof (callparams[p]) == calld.params[p].type, `Parameter ${p} must be a ${calld.params[p].type} (got ${typeof (callparams[p])} instead)`);
			callParamsRaw.push (`${p}=${callparams[p]}`);			
		}

		/* Pagination parameters */

		/* Sorting parameters */
		if (this.sortParams) {
			callParamsRaw.push (`orderBy=${Object.keys (sortParams)[0]}:${this.sortParams [Object.keys (sortParams)[0]]}`);
		}

		/* Make the request */
		return new Promise ((resolve, reject) => {
			let uri = `${'https' ? this.params.secure : 'http'}://${this.params.host}:${this.params.port}${this.callDesc.path}`;
			uri += `${callParamsRaw.length ? '?' + callParamsRaw.join ('&') : ''}`;
						
			mreq (uri, function (error, response, body) {		
				if (!error && response.statusCode == 200) {
					var data = JSON.parse (body);

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
}

module.exports = (params) => {
	if (params !== undefined)
		params = params;
	
	let callList = {};
	
	for (var x in api)
		callList [x] = (callParams) => { new APIRequest (api [x], callParams); };
	
	return callList;
};
