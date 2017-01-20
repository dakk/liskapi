var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));


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

