const params = {
    host: 'liskworld.info',
    port: 8000,
    ssl: false
};

const lisk = require ('liskapi')(params);

lisk.getSyncStatus ().call ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error', err);
    });