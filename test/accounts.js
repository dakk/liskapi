var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var Mnemonic = require('bitcore-mnemonic');
// var forger = require('./testnet.json');
var lisk = require ('../index')(require ('./params'));

var code = new Mnemonic(Mnemonic.Words.ENGLISH);
const delegates = ["+473c354cdf627b82e9113e02a337486dd3afc5615eb71ffd311c5a0beda37b8c", "+eaa049295d96618c51eb30deffe7fc2cc8bfc13190cb97f3b513dd060b000a46", "+848b16a387bc6e20fea768d3c3c0cda643f4b113a6d2bf70a53e19120c93fa64"];

describe('.openAccount', function() {
	it('should return valid values', (done) => {
		lisk.openAccount ()
			.data ( { secret: code.toString() } )
			.call ()
			.then ((res) => {
				res.should.be.an ( 'object' );
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['account']).to.be.a ('object');
				expect (res['account']['address']).to.be.a ('string');
				expect (res['account']['unconfirmedBalance']).to.be.a ('string');
				expect (res['account']['balance']).to.be.a ('string');
				expect (res['account']['publicKey']).to.be.a ('string');
				expect (res['account']['unconfirmedSignature']).to.be.a ('number');
				expect (res['account']['secondSignature']).to.be.a ('number');
				// expect (res['account']['secondPublicKey']).to.be.a ('string');
				// expect (res['account']['multisignatures']).to.be.a ('array');
				// expect (res['account']['u_multisignatures']).to.be.a ('array');

				describe('.generatePublicKey', function() {
					it('should return valid values', (done) => {
						lisk.generatePublicKey ()
							.data ( { secret: code.toString() } )
							.call ()
							.then ((res) => {
								res.should.be.an ( 'object' );
								expect (res['success']).to.be.a ('boolean').to.equal (true);
								expect (res['publicKey']).to.be.a ('string');
								done ();
							})
							.catch ( function(err) {
								assert.ok (false);
								done ();
							});
					});
				});

				done ();
			})
			.catch ( function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getBalance', function() {
	it('should return valid values', (done) => {
		lisk.getBalance ({address: '13968139166426148658L'}).call ()
		.then ((res) => {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['balance']).to.be.a ('string');
			expect (res['unconfirmedBalance']).to.be.a ('string');
			done ();
		})
		.catch ( function(err) {
			assert.ok (false);
			done ();
		});
	});
});

describe('.getPublicKey', function() {
	it('should return valid values', function(done) {
		lisk.getPublicKey ({address: '14621643025887137539L'}).call ()
		.then ((res) => {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['publicKey']).to.be.a ('string');
			done ();
		})
		.catch (function(err) {
			assert.ok (false);
			done ();
		});
	});
});

describe('.getAccount', function() {
	it('should return valid values', function(done) {
		lisk.getAccount ({address: '305922413481072012L'}).call ()
		.then (function(res) {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['account']).to.be.a ('object');
			expect (res['account']['address']).to.be.a ('string').to.equal ('305922413481072012L');
			expect (res['account']['unconfirmedBalance']).to.be.a ('string');
			expect (res['account']['balance']).to.be.a ('string');
			expect (res['account']['publicKey']).to.be.a ('string');
			expect (res['account']['unconfirmedSignature']).to.be.a ('number');
			expect (res['account']['secondSignature']).to.be.a ('number');
			expect (res['account']['multisignatures']).to.be.a ('array');
			expect (res['account']['u_multisignatures']).to.be.a ('array');
			done ();
		})
		.catch (function(err) {
			assert.ok (false);
			done ();
		});
	});
});

describe('.getDelegatesByAddress', function() {
	it('should return valid values', function(done) {
		lisk.getDelegatesByAddress ({address: '14621643025887137539L'}).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['delegates']).to.be.instanceof(Array);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	})
});

/*
describe('.voteDelegates', function() {
	it('should return valid values', function(done) {
		this.timeout (60000);
		// create a new account
		lisk.openAccount()
			.data({secret: code.toString()})
			.call()
			.then((res) => {
				// sending 20LSK to the created account
				var senderPublicKey = res.account.publicKey;
				var account = res.account.address;
				lisk.sendTransaction()
					.data({
						secret: forger.secret,
						amount: 5000000000,
						recipientId: account,
						publicKey: forger.publicKey
					})
					.call()
					.then((res) => {
						// waiting for confirmation tx and voting delegates
						setTimeout(function () {
							lisk.voteDelegates()
								.data({
									secret: code.toString(),
									publicKey: senderPublicKey,
									delegates: delegates
								})
								.call()
								.then((res) => {
									expect(res['success']).to.be.a('boolean').to.equal(true);
									expect (res['transaction']).to.be.a ('object');
									done();
								})
								.catch(function (err) {
									assert.ok(false);
									done();
								});
						}, 20000);
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
