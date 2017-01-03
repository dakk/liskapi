const assert = require ('assert');
const should = require('chai').should ()
const expect = require('chai').expect

const params = {
	host: 'liskworld.info',
	port: 8000,
	ssl: false
};
const lisk = require ('../index')(params);


/* Account */
describe('getBalance', () => {
	it('should return valid values', (done) => {
		lisk.getBalance ({address: '13968139166426148658L'}).call ()
		.then ((res) => {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['balance']).to.be.a ('string');
			expect (res['unconfirmedBalance']).to.be.a ('string');
			done ();
		})
		.catch ((err) => {
			assert.ok (false);
			done ();
		});
	});
});


/* Loader */
describe('getSyncStatus', () => {
	it('should return valid values', (done) => {
		lisk.getSyncStatus ().call ()
		.then ((res) => {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['syncing']).to.be.a ('boolean');
			expect (res['blocks']).to.be.a ('number');
			expect (res['height']).to.be.a ('number');
			expect (res['broadhash']).to.be.a ('string');
			expect (res['consensus']).to.be.a ('number');
			done ();
		})
		.catch ((err) => {
			assert.ok (false);
			done ();
		});
	});
});

describe('getLoadingStatus', () => {
	it('should return valid values', (done) => {
		lisk.getLoadingStatus ().call ()
		.then ((res) => {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			expect (res['loaded']).to.be.a ('boolean');
			expect (res['now']).to.be.a ('number');
			expect (res['blocksCount']).to.be.a ('number');
			done ();
		})
		.catch ((err) => {
			assert.ok (false);
			done ();
		});
	});
});

describe('getBlockReceiptStatus', () => {
	it('should return valid values', (done) => {
		lisk.getBlockReceiptStatus ().call ()
		.then ((res) => {
			res.should.be.an ('object');
			expect (res['success']).to.be.a ('boolean').to.equal (true);
			done ();
		})
		.catch ((err) => {
			assert.ok (false);
			done ();
		});
	});
});

