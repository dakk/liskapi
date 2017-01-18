const assert = require ('assert');
const should = require('chai').should ();
const expect = require('chai').expect;

var params = {
	host: '194.116.72.33',
	port: 7000,
	ssl: false
};

var lisk = require ('../index')(params);


/**
 * Multisignature
 */
const pubKeys = ["dc63877fbdfb538ff1d0ddecb979887f826998ab6907dca0a91e05c98d1602cd", 					"532b150e1994c4486b664092769bda0ee2129fa9ad0fe94e59d06cab92f36c09"];
const pubKeysMulti = ['+' + pubKeys[0], '+' + pubKeys[1]];
let multisigTx = '4250724131101914241';
const multisigAccount = {
	secret: '', 
	//'lesson shadow divorce vanish purpose burger visa leave usage weasel wrong hollow',
	pubKey: 'e08baa4ae3c70a652903ae879606247d2ed0163cd9c16c95b537df3f7556c132',
	address: ''
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


/* Create the accout */
describe('.createMultiSignatureAccount', function() {
	this.timeout (60000);
	
	it('using valid params should be ok', function (done) {
		lisk.createMultiSignatureAccount ()
		.data ({ 
			secret: multisigAccount.secret,
		    lifetime: 1,
		    min: 2,
		    keysgroup: pubKeysMulti
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

/* Create a tx */
describe('.sendTransaction .signTransaction', function() {
	before(function (done) {
		lisk.sendTransaction ()
		.data ({
			secret: multisigAccount.secret,
			amount: 100000000,
			recipientId: 'destination'
		})
		.call ()
		.then ((res) => {
			multisigTx = res.transactionId;
			done ();
		});
	});
	

	// Call /api/multisignatures/sign with every account (except the ms owner)

	// Get multisigTx, should be ok
});


