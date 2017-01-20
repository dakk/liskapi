var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));


describe('.getTransactions', function() {
	it('should return valid values', function(done) {
		lisk.getTransactions ({ blockId: '10259851430111190459' }).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['transactions']).to.be.instanceof(Array);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getTransaction', function() {
	it('should return valid values', function(done) {
		lisk.getTransaction ({ id: '7939763078333239343' }).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['transaction']).to.be.an ('object');
				expect (res['transaction']['id']).to.be.a ('string').to.equal ('7939763078333239343');
				expect (res['transaction']['height']).to.be.a ('number');
				expect (res['transaction']['blockId']).to.be.a ('string');
				expect (res['transaction']['type']).to.be.a ('number');
				expect (res['transaction']['timestamp']).to.be.a ('number');
				expect (res['transaction']['senderPublicKey']).to.be.a ('string');
				expect (res['transaction']['senderId']).to.be.a ('string');
				expect (res['transaction']['recipientId']).to.be.a ('string');
				expect (res['transaction']['amount']).to.be.a ('number');
				expect (res['transaction']['fee']).to.be.a ('number');
				expect (res['transaction']['signature']).to.be.a ('string');
				expect (res['transaction']['signatures']).to.be.instanceof(Array);
				expect (res['transaction']['confirmations']).to.be.a ('number');
				expect (res['transaction']['asset']).to.be.a ('object');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getUnconfirmedTransactions', function() {
	it('should return valid values', function(done) {
		lisk.getUnconfirmedTransactions ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['transactions']).to.be.instanceof(Array);
				// if unconfirmedTransactions exists test getUnconfirmedTransaction
				if(res.transactions.length) {
					var unConfirmedTx = res.transactions[0].id;
					describe('getUnconfirmedTransaction', function() {
						it('should return valid values', function(done) {
							lisk.getUnconfirmedTransaction ({ id: unConfirmedTx }).call ()
								.then (function(res) {
									//console.log('The unconfirmed tx' + res);
									res.should.be.an ('object');
									expect (res['success']).to.be.a ('boolean').to.equal (true);
									expect (res['transaction']).to.be.an ('object');
									expect (res['transaction']['type']).to.be.a ('number');
									expect (res['transaction']['amount']).to.be.a ('number');
									expect (res['transaction']['senderPublicKey']).to.be.a ('string');
									expect (res['transaction']['timestamp']).to.be.a ('number');
									expect (res['transaction']['asset']).to.be.an ('object');
									expect (res['transaction']['recipientId']).to.be.a ('string');
									expect (res['transaction']['signature']).to.be.a ('string');
									expect (res['transaction']['id']).to.be.a ('string').to.equal (unConfirmedTx);
									expect (res['transaction']['fee']).to.be.a ('number');
									expect (res['transaction']['senderId']).to.be.a ('string');
									expect (res['transaction']['relays']).to.be.a ('number');
									expect (res['transaction']['receivedAt']).to.be.a ('string');
									done ();
								})
								.catch (function(err) {
									assert.ok (false);
									done ();
								});
						});
					});
					done();
				} else {
					done ();
				}
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getQueuedTransactions', function() {
	it('should return valid values', function(done) {
		lisk.getQueuedTransactions ().call ()
			.then (function(res) {
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['transactions']).to.be.instanceof(Array);
				expect (res['count']).to.be.a ('number');
				// if queued tx exists get the first one and test getQueuedTransaction
				if(res.transactions.length) {
					var unConfirmedQueuedTx = res.transactions[0].id;
					describe('getQueuedTransaction', function() {
						it('should return valid values', function(done) {
							lisk.getQueuedTransaction ({ id: unConfirmedQueuedTx }).call ()
								.then (function(res) {
									res.should.be.an ('object');
									expect (res['success']).to.be.a ('boolean').to.equal (true);
									expect (res['transaction']).to.be.an ('object');
									done ();
								})
								.catch (function(err) {
									assert.ok (false);
									done ();
								});
						});
					});
					done ();
				} else {
					done ();
				}
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});
