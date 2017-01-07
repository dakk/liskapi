const params = {
    host: '194.116.72.33',
    port: 7000,
    ssl: false
};

const lisk = require ('liskapi')(params);
const Mnemonic = require('bitcore-mnemonic');
const delegates = ["+473c354cdf627b82e9113e02a337486dd3afc5615eb71ffd311c5a0beda37b8c", "+eaa049295d96618c51eb30deffe7fc2cc8bfc13190cb97f3b513dd060b000a46", "+848b16a387bc6e20fea768d3c3c0cda643f4b113a6d2bf70a53e19120c93fa64"];

/*
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
 */

let code = new Mnemonic(Mnemonic.Words.ENGLISH);
console.log('Secret random generated: ' + code.toString() +'\n');

/*lisk.openAccount ()
    .data ({ secret: code.toString()})
    .call ()
    .then ((res) => {
        console.log (`Post for opening an account\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error opening an account\n', err);
    });

lisk.generatePublicKey ()
    .data ({ secret: code.toString()})
    .call ()
    .then ((res) => {
        console.log (`Post for generating a publicKey\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error generating a publicKey\n', err);
    });

lisk.voteDelegates ()
    .data ({ secret: 'quit copper tomato shoe another cheese one viable copper boy tree penalty', publicKey: '532b150e1994c4486b664092769bda0ee2129fa9ad0fe94e59d06cab92f36c09', delegates: delegates })
    .call ()
    .then ((res) => {
        console.log (`Put for voting delegates\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error voting delegates\n', err);
    });

lisk.sendTransaction ()
    .data ({ secret: 'quit copper tomato shoe another cheese one viable copper boy tree penalty',
        amount: 1,
        recipientId: '14621643025887137539L',
        publicKey: '532b150e1994c4486b664092769bda0ee2129fa9ad0fe94e59d06cab92f36c09',
    })
    .call ()
    .then ((res) => {
        console.log (`Put for sending LSK\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error sending LSK\n', err);
    });*/

lisk.addSecondSignature ()
    .data ({ secret: 'quit copper tomato shoe another cheese one viable copper boy tree penalty' })
    .call ()
    .then ((res) => {
        console.log (`Put for adding second signature\n ${JSON.stringify (res)}`);
    })
    .catch ((err) => {
        console.log ('Got an error adding second signature\n', err);
    });






