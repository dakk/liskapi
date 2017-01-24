var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));
var forger = require('./testnet');
var Mnemonic = require('bitcore-mnemonic');

var code = new Mnemonic(Mnemonic.Words.ENGLISH);

/*describe('.createDelegate', function() {
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
						amount: 5000000000,
						recipientId: account,
						publicKey: forger.publicKey
					})
					.call()
					.then((res) => {
						// waiting for confirmation
						setTimeout(function () {
							lisk.createDelegate()
								.data({
									secret: code.toString(),
									username: Math.random().toString(36).substring(7)
								})
								.call()
								.then((res) => {
									res.should.be.an('object');
									expect(res['success']).to.be.a('boolean').to.equal(true);
									expect (res['transaction']).to.be.a ('object');
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

describe('.getDelegatesList', function() {
	it('should return valid values', function(done) {
		lisk.getDelegatesList ().call ()
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
	});
});


describe('.getDelegateByPublicKey', function() {
	it('should return valid values', function(done) {
		lisk.getDelegateByPublicKey ({ publicKey: 'e08baa4ae3c70a652903ae879606247d2ed0163cd9c16c95b537df3f7556c132' }).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['delegate']).to.be.a ('object');
				expect (res['delegate']['username']).to.be.a ('string');
				expect (res['delegate']['address']).to.be.a ('string');
				expect (res['delegate']['publicKey']).to.be.a ('string');
				expect (res['delegate']['vote']).to.be.a ('string');
				expect (res['delegate']['producedblocks']).to.be.a ('number');
				expect (res['delegate']['missedblocks']).to.be.a ('number');
				expect (res['delegate']['rate']).to.be.a ('number');
				expect (res['delegate']['approval']).to.be.a ('number');
				expect (res['delegate']['productivity']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getDelegateByUsername', function() {
	it('should return valid values', function(done) {
		lisk.getDelegateByUsername ({ username: 'liskit' }).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['delegate']).to.be.a ('object');
				expect (res['delegate']['username']).to.be.a ('string');
				expect (res['delegate']['address']).to.be.a ('string');
				expect (res['delegate']['publicKey']).to.be.a ('string');
				expect (res['delegate']['vote']).to.be.a ('string');
				expect (res['delegate']['producedblocks']).to.be.a ('number');
				expect (res['delegate']['missedblocks']).to.be.a ('number');
				expect (res['delegate']['rate']).to.be.a ('number');
				expect (res['delegate']['approval']).to.be.a ('number');
				expect (res['delegate']['productivity']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.searchForDelegates', function() {
	it('should return valid values', function(done) {
		lisk.searchForDelegates ({ q: 'liskit' }).call ()
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
	});
});

describe('.getDelegatesCount', function() {
	it('should return valid values', function(done) {
		lisk.getDelegatesCount ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['count']).to.be.a('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getVotesOfAccount', function() {
	it('should return valid values', function(done) {
		lisk.getVotesOfAccount ( {address:'14621643025887137539L'} ).call ()
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
	});
});

describe('.getVoters', function() {
	it('should return valid values', function(done) {
		lisk.getVoters ( {publicKey:'e08baa4ae3c70a652903ae879606247d2ed0163cd9c16c95b537df3f7556c132'} ).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['accounts']).to.be.instanceof(Array);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

/*describe('.enableForging and disableForging', function() {
	it('should return valid values', function(done) {
		this.timeout (120000);
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
						amount: 5000000000,
						recipientId: account,
						publicKey: forger.publicKey
					})
					.call()
					.then((res) => {
						// waiting for confirmation
						setTimeout(function () {
							lisk.createDelegate()
								.data({
									secret: code.toString(),
									username: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
								})
								.call()
								.then((res) => {
									setTimeout(function () {
										lisk.enableForging()
											.data({
												secret: code.toString(),
											})
											.call()
											.then((res) => {
												res.should.be.an('object');
												expect(res['success']).to.be.a('boolean').to.equal(true);
												expect (res['address']).to.be.a('string');
												setTimeout(function () {
													lisk.disableForging()
														.data({
															secret: code.toString(),
														})
														.call()
														.then((res) => {
															res.should.be.an('object');
															expect(res['success']).to.be.a('boolean').to.equal(true);
															expect (res['address']).to.be.a('string');
															done();
														})
														.catch(function (err) {
															assert.ok(false);
															done();
														});
												}, 10000);
											})
											.catch(function (err) {
												assert.ok(false);
												done();
											});
									}, 30000);
								})
								.catch(function (err) {
									console.log('Got an error creating delegate\n', err);
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

describe('.getForgedByAccount', function() {
	it('should return valid values', function(done) {
		lisk.getForgedByAccount ( {generatorPublicKey:'e08baa4ae3c70a652903ae879606247d2ed0163cd9c16c95b537df3f7556c132'} ).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['fees']).to.be.a('string');
				expect (res['rewards']).to.be.a('string');
				expect (res['forged']).to.be.a('string');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getNextForger', function() {
	it('should return valid values', function(done) {
		lisk.getNextForger ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['currentBlock']).to.be.a('number');
				expect (res['currentSlot']).to.be.a('number');
				expect (res['delegates']).to.be.instanceof(Array);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});
