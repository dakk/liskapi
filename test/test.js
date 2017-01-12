var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect

var params = {
	host: 'liskworld.info',
	port: 8000,
	ssl: false
};
var lisk = require ('../index')(params);
var tx_counter = 1;


/**
 * Accounts
 */

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
		lisk.getPublicKey ({address: '13968139166426148658L'}).call ()
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
		lisk.getAccount ({address: '13968139166426148658L'}).call ()
		.then (function(res) {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['account']).to.be.a ('object');
			expect (res['account']['address']).to.be.a ('string').to.equal ('13968139166426148658L');
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
		lisk.getDelegatesByAddress ({address: '13968139166426148658L'}).call ()
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


/**
 * Loader
 */

describe('.getSyncStatus', function() {
	it('should return valid values', function(done) {
		lisk.getSyncStatus ().call ()
		.then (function(res) {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['syncing']).to.be.a ('boolean');
			expect (res['blocks']).to.be.a ('number');
			expect (res['height']).to.be.a ('number');
			expect (res['broadhash']).to.be.a ('string');
			expect (res['consensus']).to.be.a ('number');
			done ();
		})
		.catch (function(err) {
			assert.ok (false);
			done ();
		});
	});
});

describe('.getLoadingStatus', function() {
	it('should return valid values', function(done) {
		lisk.getLoadingStatus ().call ()
		.then (function(res) {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['loaded']).to.be.a ('boolean');
			expect (res['now']).to.be.a ('number');
			expect (res['blocksCount']).to.be.a ('number');
			done ();
		})
		.catch (function(err) {
			assert.ok (false);
			done ();
		});
	});
});

describe('.getBlockReceiptStatus', function() {
	it('should return valid values', function(done) {
		lisk.getBlockReceiptStatus ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});



/**
 * Transactions
 */

describe('.getTransactions', function() {
	it('should return valid values', function(done) {
		lisk.getTransactions ({ blockId: '15562644891650689463' }).call ()
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
		lisk.getTransaction ({ id: '2432251829872771078' }).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['transaction']).to.be.an ('object');
				expect (res['transaction']['id']).to.be.a ('string').to.equal ('2432251829872771078');
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

/**
 * Peers
 */

describe('.getPeersList', function() {
	it('should return valid values', function(done) {
		lisk.getPeersList ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['peers']).to.be.instanceof(Array);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getPeer', function() {
	it('should return valid values', function(done) {
		lisk.getPeer ({ip: '163.172.154.211', port: 8000}).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['peer']).to.be.an ('object');
				expect (res['peer']['ip']).to.be.a ('string');
				expect (res['peer']['port']).to.be.a ('number');
				expect (res['peer']['state']).to.be.a ('number');
				expect (res['peer']['os']).to.be.a ('string');
				expect (res['peer']['version']).to.be.a ('string');
				expect (res['peer']['broadhash']).to.be.a ('string');
				expect (res['peer']['height']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getPeerVersion', function() {
	it('should return valid values', function(done) {
		lisk.getPeerVersion ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['version']).to.be.a ('string');
				expect (res['build']).to.be.a ('string');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

/**
 * Blocks
 */

describe('.getBlock', function() {
	it('should return valid values', function(done) {
		lisk.getBlock ({id:'10278032324520856952'}).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['block']).to.be.an ('object');
				expect (res['block']['id']).to.be.a ('string').to.be.equal ('10278032324520856952');
				expect (res['block']['version']).to.be.a ('number');
				expect (res['block']['timestamp']).to.be.a ('number');
				expect (res['block']['height']).to.be.a ('number');
				expect (res['block']['previousBlock']).to.be.a ('string');
				expect (res['block']['numberOfTransactions']).to.be.a ('number');
				expect (res['block']['totalAmount']).to.be.a ('number');
				expect (res['block']['totalFee']).to.be.a ('number');
				expect (res['block']['reward']).to.be.a ('number');
				expect (res['block']['payloadLength']).to.be.a ('number');
				expect (res['block']['payloadHash']).to.be.a ('string');
				expect (res['block']['generatorPublicKey']).to.be.a ('string');
				expect (res['block']['generatorId']).to.be.a ('string');
				expect (res['block']['blockSignature']).to.be.a ('string');
				expect (res['block']['confirmations']).to.be.a ('number');
				expect (res['block']['totalForged']).to.be.a ('string');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getBlocks', function() {
	it('should return valid values', function(done) {
		lisk.getBlocks ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['blocks']).to.be.instanceof(Array);
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getFee', function() {
	it('should return valid values', function(done) {
		lisk.getFee ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['fee']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getFees', function() {
	it('should return valid values', function(done) {
		lisk.getFees ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['fees']).to.be.an ('object');
				expect (res['fees']['send']).to.be.a ('number');
				expect (res['fees']['vote']).to.be.a ('number');
				expect (res['fees']['secondsignature']).to.be.a ('number');
				expect (res['fees']['delegate']).to.be.a ('number');
				expect (res['fees']['multisignature']).to.be.a ('number');
				expect (res['fees']['dapp']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});