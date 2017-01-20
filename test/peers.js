var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));


describe('.getPeersList', function() {
	it('should return valid values', function(done) {
		lisk.getPeersList ()
			.paginate ({ limit: 3 })
			.call ()
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
		lisk.getPeer ({ip: '108.61.199.243', port: 7000}).call ()
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
