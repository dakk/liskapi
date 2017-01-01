const params = {
    host: 'liskworld.info',
    port: 8000,
    ssl: false
};

const lisk = require ('liskapi')(params);

lisk.getSyncStatus ().call ()
    .then ((res) => {
        console.log (`Get sync status data\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error', err);
    });

lisk.getBalance ({address: '13968139166426148658L'})
    .call ()
    .then ((res) => {
        console.log (`Get balance of Max delegate\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting balance\n', err);
    });

lisk.getDelegatesByAddress ({address: '13968139166426148658L'})
    .call ()
    .then ((res) => {
        console.log (`Get delegates of Max delegate\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting delegates\n', err);
    });

lisk.getPeersList ()
    .paginate ({ limit: 10, offset: 5 })
    .call ()
    .then ((res) => {
        console.log (`Get peers of Liskword\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting peers\n', err);
    });

lisk.getPeer ({ip: '163.172.154.211', port: 8000})
    .call ()
    .then ((res) => {
        console.log (`Get peer by Liskword IP\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting peer\n', err);
    });

lisk.getPeerVersion ()
    .call ()
    .then ((res) => {
        console.log (`Get peer version\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting peer version\n', err);
    });

lisk.getBlock ({id:'13658550407518916215'})
    .call ()
    .then ((res) => {
        console.log (`Get block by id\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting block by id\n', err);
    });

lisk.getBlocks ()
    .paginate ({ limit: 2, offset: 0 })
    .sort ({ height: 'asc' })
    .call ()
    .then ((res) => {
        console.log (`Get blocks sorted and paginated\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting blocks sorted and paginated\n', err);
    });

lisk.getFee ()
    .call ()
    .then ((res) => {
        console.log (`Get blockchain fee\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting blockchain fee\n', err);
    });

lisk.getFees ()
    .call ()
    .then ((res) => {
        console.log (`Get blockchain fees schedule\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting blockchain fees schedule\n', err);
    });

lisk.getReward ()
    .call ()
    .then ((res) => {
        console.log (`Get blockchain reward schedule\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting blockchain reward schedule\n', err);
    });

lisk.getSupply ()
    .call ()
    .then ((res) => {
        console.log (`Get supply\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting supply\n', err);
    });

lisk.getHeight ()
    .call ()
    .then ((res) => {
        console.log (`Get height\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting height\n', err);
    });

lisk.getHeight ()
    .call ()
    .then ((res) => {
        console.log (`Get status\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting status\n', err);
    });

lisk.getNethash ()
    .call ()
    .then ((res) => {
        console.log (`Get nethash\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting nethash\n', err);
    });

lisk.getMilestone ()
    .call ()
    .then ((res) => {
        console.log (`Get milestone\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting milestone\n', err);
    });

lisk.getDelegatesList ()
    .paginate ({ limit: 2, offset: 0 })
    .sort ({ rate: 'desc' })
    .call ()
    .then ((res) => {
        console.log (`Get delegate list sorted and paginated\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting delegate list sorted and paginated\n', err);
    });

lisk.getDelegateByPublicKey ({ publicKey: 'e0f1c6cca365cd61bbb01cfb454828a698fa4b7170e85a597dde510567f9dda5' })
    .call ()
    .then ((res) => {
        console.log (`Get delegate by publickey\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting delegate by publickey\n', err);
    });

lisk.getDelegateByUsername ({ username: 'liskit' })
    .call ()
    .then ((res) => {
        console.log (`Get delegate by username\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting delegate by username\n', err);
    });

lisk.searchForDelegates ({ q: 'lisk' })
    .sort({ producedblocks: 'desc' })
    .call ()
    .then ((res) => {
        console.log (`Get search delegate by q\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting search delegate by q\n', err);
    });

lisk.getDelegatesCount ()
    .call ()
    .then ((res) => {
        console.log (`Get delegates count\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting delegates count\n', err);
    });

lisk.getVotesOfAccount ({ address: '10310263204519541551L' })
    .call ()
    .then ((res) => {
        console.log (`Get votes of account\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting votes of account\n', err);
    });

lisk.getVoters ({ publicKey: '2d59fbcce531fb9661cdfa8371c49b6898ce0895fe71da88ffec851c7ed60782' })
    .call ()
    .then ((res) => {
        console.log (`Get voters of account\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting voters of account\n', err);
    });


lisk.getForgedByAccount ({ generatorPublicKey: '2d59fbcce531fb9661cdfa8371c49b6898ce0895fe71da88ffec851c7ed60782' })
    .call ()
    .then ((res) => {
        console.log (`Get forged by account\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting forged by account\n', err);
    });

lisk.getNextForger ()
    .paginate ({ limit: 2})
    .call ()
    .then ((res) => {
        console.log (`Get next forger\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting next\n', err);
    });