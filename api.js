module.exports = {
	getBalance: {
		method: 'GET',
		path: '/api/accounts/getBalance',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getPublicKey: {
		method: 'GET',
		path: '/api/accounts/getPublicKey',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getLoadingStatus: {
		method: 'GET',
		path: '/api/loader/status',
		params: {},
		paginated: false
	},
	getSyncStatus: {
		method: 'GET',
		path: '/api/loader/status/sync',
		params: {},
		paginated: false
	},
	getBlockReceiptStatus: {
		method: 'GET',
		path: '/api/loader/status/ping',
		params: {},
		paginated: false
	},
	
	getTransactions: {
		method: 'GET',
		path: '/api/transactions',
		params: {
			blockId: { type: 'string' },
			senderId: { type: 'string' },
			recipientId: { type: 'string' }
		},
		paginated: true,
        paginatedResult: 'transactions'
	},
	getTransaction: {
		method: 'GET',
		path: '/api/transactions/get',
		params: {
            id: { type: 'String' }
        },
		paginated: false
	}		
};