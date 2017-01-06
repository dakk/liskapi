module.exports = {
	/**
	 * Accounts
	 */
	openAccount: {
		method: 'POST',
		path: '/api/accounts/open',
		postParams: {
			secret: { type: 'string' , required: true }
		}
	},
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
	generatePublicKey: {
		method: 'POST',
		path: '/api/accounts/generatePublicKey',
		postParams: {
			secret: { type: 'string' , required: true }
		}
	},
	getAccount: {
		method: 'GET',
		path: '/api/accounts',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getDelegatesByAddress: {
		method: 'GET',
		path: '/api/accounts/delegates',
		params: {
			address: { type: 'string' }
		},
		paginated: true
	},
	voteDelegates: {
		method: 'PUT',
		path: '/api/accounts/delegates',
		postParams: {
			secret: { type: 'string' , required: true },
			publicKey: { type: 'string' , required: true },
			secondSecret: { type: 'string' },
			delegates: { type: 'object' , required: true }
		}
	},
	/**
	 * Loader
	 */
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
	/**
	 * Transactions
	 */
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
			id: { type: 'string' }
		},
		paginated: false
	},
	getUnconfirmedTransaction: {
		method: 'GET',
		path: '/api/transactions/unconfirmed/get',
		params: {
			id: { type: 'string' }
		},
		paginated: false
	},
	getUnconfirmedTransactions: {
		method: 'GET',
		path: '/api/transactions/unconfirmed',
		params: {},
		paginated: false
	},
	getQueuedTransactions: {
		method: 'GET',
		path: '/api/transactions/queued',
		params: {},
		paginated: false
	},
	getQueuedTransaction: {
		method: 'GET',
		path: '/api/transactions/queued/get',
		params: {
			id: { type: 'string' }
		},
		paginated: false
	},
	/**
	 * Peers
	 */
	getPeersList: {
		method: 'GET',
		path: '/api/peers',
		params: {},
		paginated: true
	},
	getPeer: {
		method: 'GET',
		path: '/api/peers/get',
		params: {
			ip: { type: 'string' },
			port: { type: 'number' }
		},
		paginated: false
	},
	getPeerVersion: {
		method: 'GET',
		path: '/api/peers/version',
		params: {},
		paginated: false
	},
	/**
	 * Blocks
	 */
	getBlock: {
		method: 'GET',
		path: '/api/blocks/get',
		params: {
			id: { type: 'string' }
		},
		paginated: false
	},
	getBlocks: {
		method: 'GET',
		path: '/api/blocks',
		params: {
			generatorPublicKey: { type: 'string' },
			height: { type: 'number' },
			previousBlock: { type: 'string' },
			totalAmount: { type: 'number' },
			totalFee: { type: 'number'}
		},
		paginated: true
	},
	getFee: {
		method: 'GET',
		path: '/api/blocks/getFee',
		params: {},
		paginated: false
	},
	getFees: {
		method: 'GET',
		path: '/api/blocks/getFees',
		params: {},
		paginated: false
	},
	getReward: {
		method: 'GET',
		path: '/api/blocks/getReward',
		params: {},
		paginated: false
	},
	getSupply: {
		method: 'GET',
		path: '/api/blocks/getSupply',
		params: {},
		paginated: false
	},
	getHeight: {
		method: 'GET',
		path: '/api/blocks/getHeight',
		params: {},
		paginated: false
	},
	getStatus: {
		method: 'GET',
		path: '/api/blocks/getStatus',
		params: {},
		paginated: false
	},
	getNethash: {
		method: 'GET',
		path: '/api/blocks/getNethash',
		params: {},
		paginated: false
	},
	getMilestone: {
		method: 'GET',
		path: '/api/blocks/getMilestone',
		params: {},
		paginated: false
	},
	/**
	 * Signatures
	 */
	getSignature: {
		method: 'GET',
		path: '/api/signatures/get',
		params: {
			id: { type: 'string' }
		},
		paginated: false
	},
	/**
	 * Delegates
	 */
	getDelegatesList: {
		method: 'GET',
		path: '/api/delegates',
		params: {},
		paginated: true
	},
	getDelegateByPublicKey: {
		method: 'GET',
		path: '/api/delegates/get',
		params: {
			publicKey: { type: 'string' }
		},
		paginated: false
	},
	getDelegateByUsername: {
		method: 'GET',
		path: '/api/delegates/get',
		params: {
			username: { type: 'string' }
		},
		paginated: false
	},
	searchForDelegates: {
		method: 'GET',
		path: '/api/delegates/search',
		params: {
			q: { type: 'string' }
		},
		paginated: true
	},
	getDelegatesCount: {
		method: 'GET',
		path: '/api/delegates/count',
		params: {},
		paginated: false
	},
	getVotesOfAccount: {
		method: 'GET',
		path: '/api/accounts/delegates',
		params: {
			address: { type: 'string' }
		},
		paginated: false
	},
	getVoters: {
		method: 'GET',
		path: '/api/delegates/voters',
		params: {
			publicKey: { type: 'string' }
		},
		paginated: false
	},
	getForgedByAccount: {
		method: 'GET',
		path: '/api/delegates/forging/getForgedByAccount',
		params: {
			generatorPublicKey: { type: 'string' }
		},
		paginated: false
	},
	getNextForger: {
		method: 'GET',
		path: '/api/delegates/getNextForgers',
		params: {},
		paginated: true
	},
	/**
	 * Multi-Signature
	 */
	getMultiSignatureAccounts: {
		method: 'GET',
		path: '/api/multisignatures/accounts',
		params: {
			publicKey: { type: 'string' }
		},
		paginated: false
	},
	getPendingMultiSignatureTransactions: {
		method: 'GET',
		path: '/api/multisignatures/pending',
		params: {
			publicKey: { type: 'string' }
		},
		paginated: false
	}
};