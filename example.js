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
