/*
const assert = require ('assert');
const should = require('chai').should ();
const expect = require('chai').expect;

var params = {
	host: '194.116.72.33',
	port: 7000,
	ssl: false
};

var lisk = require ('../index')(params);


/!**
 * Multisignature
 *!/
let multisigTx = '';

const destination = '';

const multisigAccount = {
	secret: '',
	pubKey: '',
};

const signers = {
	pubKeys: ["", ""],
	pubKeysMulti: ["+", "+"],
	secrets: ["", ""]
};

let height = null;


let waitNextBlock = function (done) {
	lisk.getSyncStatus ().call ()
	.then (function(res) {
		if (height == null) {
			height = res['height'];
			setTimeout (function () { waitNextBlock (done); }, 5000);
		} else {
			if (height < res['height']) {
				height = null;
				done ();
			} else {
				setTimeout (function () { waitNextBlock (done); }, 5000);
			}
		}
	})
	.catch (function(err) { });
};


/!* Create the accout *!/
describe('.createMultiSignatureAccount', function() {
	this.timeout (60000);
	
	it('using valid params should be ok', function (done) {
		lisk.createMultiSignatureAccount ()
		.data ({ 
			secret: multisigAccount.secret,
		    lifetime: 1,
		    min: 2,
		    keysgroup: signers.pubKeysMulti
		})
		.call ()
		.then ((res) => {
			expect (res).should.be.an ('object');
			expect (res['success']).to.be.ok;
			expect (res['transactionId']).that.is.not.empty;
			console.log (res);
			multisigTx = res['transactionId'];

			waitNextBlock (done);
		})
		.catch ((err) => {
			console.log (err);
			assert.ok (false);
			done ();		
		});
	});
});

describe('.getPendingMultiSignatureTransactions', function() {
	it('using valid params should be return the previously created tx', function (done) {
		lisk.getPendingMultiSignatureTransactions ({publicKey: multisigAccount.pubKey})
		.call ()
		.then ((res) => {
			console.log (res);
			expect (res).should.be.an ('object');
			expect (res['success']).to.be.ok;
			expect (res['transactions']).to.be.instanceof (Array);
			
			done ();
		})
		.catch ((err) => {
			console.log (err);
			assert.ok (false);
			done ();
		});
	});
});

/!* Create a tx *!/
describe('.sendTransaction .signTransaction', function() {
	this.timeout (60000);
	
	before(function (done) {
		lisk.sendTransaction ()
		.data ({
			secret: multisigAccount.secret,
			amount: 100000000,
			recipientId: destination
		})
		.call ()
		.then ((res) => {
			multisigTx = res.transactionId;
			done ();
		});
	});
	
	
	/!* Sign the tx with 2 signers accounts *!/
	let promises = [];
	
	for (let i = 0; i < signers.secrets.length; i++) {
		promises.push (new Promise ((resolve, reject) => {
			lisk.signTransaction ()
			.data ({
				secret: signers.secrets[i],
				transactionId: multisigTx
			})
			.call ().then ((res) => {
				expect (res['success']).to.be.ok;
				expect (res['transactionId']).to.equal(multisigTx);
				
				resolve (res);
			}).catch (reject);
		}));
	}
	
	
	it('should be signed correctly by two signers', function (done) {
		Promise.all (promises)
		.then ((ress) => {
			waitNextBlock (done);
		})
		.catch ((err) => {
			console.log (err);
			assert.ok (false);
			done ();	
		});
	});	
	
	
	it('should be confirmed', function (done) {
		lisk.getTransaction ({ id: multisigTx }).call ()
		.then ((res) => {
			expect (res['success']).to.be.ok;
			expect (res.transaction['id']).to.equal(multisigTx);
			
			done ();		
		})
		.catch ((err) => {
			assert.ok (false);
			done ();				
		});
	});
});


*/
