var assert = require ('assert');
var should = require('chai').should ()
var expect = require('chai').expect
var lisk = require ('../index')(require ('./params'));


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
