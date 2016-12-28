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

lisk.getPeer ({ip: '163.172.154.211', port:'8000'})
    .call ()
    .then ((res) => {
        console.log (`Get peer by Liskword IP\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error in getting peer\n', err);
    });