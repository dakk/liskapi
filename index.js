const request 	= require ('request');
const api 		= require ('./api');

let params = {
	ssl: false,
	host: 'localhost',
	port: 8000
};

let liskCallFactory = function (calld) {
	const mreq = request.get ? calld.method == 'GET' : request.post;
	
	return (callparams) => {
		/* Type checker for callparams */
		let calldata = [];
		for (var p in callparams) {
			assert (p in calld.params, `Parameter ${p} not allowed`);
			assert (typeof (callparams[p]) == calld.params[p].type, `Parameter ${p} must be a ${calld.params[p].type} (got ${typeof (callparams[p])} instead)`);
			calldata.push (`${p}=${callparams[p]}`);			
		}
		
		/* Request */
		mreq (`${'https' ? params.secure : 'http'}://${params.host}:${params.port}${calld.path}${calldata.length ? '?' + calldata.join ('&') : ''}`, function (error, response, body) {
			return new Promise ((resolve, reject) => {
				if (!error && response.statusCode == 200) {
					var data = JSON.parse (body);
					return resolve (data);
				} else {
					return reject (error);
				}
			});
		});
	};
};


module.exports = (params) => {
	if (params !== undefined)
		params = params;
	
	let callList = {};
	
	for (var x in api)
		callList [x] = liskCallFactory (api [x]);
	
	return callList;
};
