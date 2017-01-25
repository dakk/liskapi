var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));
// var forger = require('./testnet');
var Mnemonic = require('bitcore-mnemonic');

var code = new Mnemonic(Mnemonic.Words.ENGLISH);

describe('.getSignatureFee', function() {
	it('should return valid values', function(done) {
		lisk.getSignatureFee ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['fee']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				console.log(err);
				assert.ok (false);
				done ();
			});
	});
});

/*
describe('.addSecondSignature', function() {
	it('should return valid values', function(done) {
		this.timeout (60000);
		// create account
		lisk.openAccount()
			.data({secret: code.toString()})
			.call()
			.then((res) => {
				// sending 20LSK to the created account
				var account = res.account.address;
				lisk.sendTransaction()
					.data({
						secret: forger.secret,
						amount: 2000000000,
						recipientId: account,
						publicKey: forger.publicKey
					})
					.call()
					.then((res) => {
						var code2 = new Mnemonic(Mnemonic.Words.ENGLISH);
						// waiting for confirmation
						setTimeout(function () {
							lisk.addSecondSignature()
								.data({
									secret: code.toString(),
									secondSecret: code2.toString()
								})
								.call()
								.then((res) => {
									res.should.be.an('object');
									expect(res['success']).to.be.a('boolean').to.equal(true);
									expect(res['transaction']).to.be.an('object');
									expect (res['transaction']['type']).to.be.a ('number');
									expect (res['transaction']['amount']).to.be.a ('number');
									expect (res['transaction']['senderPublicKey']).to.be.a ('string');
									// expect (res['transaction']['requesterPublicKey']).to.be.a ('string');
									expect (res['transaction']['timestamp']).to.be.a ('number');
									expect (res['transaction']['asset']).to.be.an('object');
									expect (res['transaction']['asset']['signature']).to.be.an('object');
									// expect (res['transaction']['recipientId']).to.be.a ('string');
									expect (res['transaction']['signature']).to.be.a ('string');
									expect (res['transaction']['id']).to.be.a ('string');
									expect (res['transaction']['fee']).to.be.a ('number');
									expect (res['transaction']['senderId']).to.be.a ('string');
									expect (res['transaction']['relays']).to.be.a ('number');
									expect (res['transaction']['receivedAt']).to.be.a ('string');
									done();
								})
								.catch(function (err) {
									assert.ok(false);
									done();
								});
						}, 30000);
					})
					.catch((err) => {
						console.log('Got an error sending LSK\n', err);
					});
			})
			.catch((err) => {
				console.log('Got an error opening an account\n', err);
			});
	});
});*/
