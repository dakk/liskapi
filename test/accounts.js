var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var Mnemonic = require('bitcore-mnemonic');
var lisk = require ('../index')(require ('./params'));

var code = new Mnemonic(Mnemonic.Words.ENGLISH);

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
