var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));


describe('.getBlock', function() {
	it('should return valid values', function(done) {
		lisk.getBlock ({id:'10697554281480269595'}).call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['block']).to.be.an ('object');
				expect (res['block']['id']).to.be.a ('string').to.be.equal ('10697554281480269595');
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

describe('.getReward', function() {
	it('should return valid values', function(done) {
		lisk.getReward ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['reward']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getSupply', function() {
	it('should return valid values', function(done) {
		lisk.getSupply ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['supply']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getHeight', function() {
	it('should return valid values', function(done) {
		lisk.getHeight ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['height']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getStatus', function() {
	it('should return valid values', function(done) {
		lisk.getStatus ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['height']).to.be.a ('number');
				expect (res['fee']).to.be.a ('number');
				expect (res['milestone']).to.be.a ('number');
				expect (res['reward']).to.be.a ('number');
				expect (res['supply']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getNethash', function() {
	it('should return valid values', function(done) {
		lisk.getNethash ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['nethash']).to.be.a ('string');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});

describe('.getMilestone', function() {
	it('should return valid values', function(done) {
		lisk.getMilestone ().call ()
			.then (function(res) {
				res.should.be.an ('object');
				expect (res['success']).to.be.a ('boolean').to.equal (true);
				expect (res['milestone']).to.be.a ('number');
				done ();
			})
			.catch (function(err) {
				assert.ok (false);
				done ();
			});
	});
});
