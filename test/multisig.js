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
const pubKeys = ["+dc63877fbdfb538ff1d0ddecb979887f826998ab6907dca0a91e05c98d1602cd", 					"+532b150e1994c4486b664092769bda0ee2129fa9ad0fe94e59d06cab92f36c09"];

describe('.createMultiSignatureAccount', function() {
	it('using valid params should be ok', function (done) {
		liskapi.createMultiSignatureAccount ()
		.data ({ 
			secret: 'lesson shadow divorce vanish purpose burger visa leave usage weasel wrong hollow',
		    lifetime: 24,
		    min: 2,
		    keysgroup: pubKeys
		})
		.call ()
		.then ((res) => {
			res.to.have.property('success').to.be.ok;
			res.to.have.property('transactionId').that.is.not.empty;

			/*multiSigTx.txId = res.transactionId;
			multiSigTx.lifetime = validParams.lifetime;
			multiSigTx.members = Keys;
			multiSigTx.min = requiredSignatures;*/
			done();
		})
		.catch ((err) => {
			assert.ok (false);
			done ();		
		});
	});
});
