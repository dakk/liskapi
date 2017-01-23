# Lisk API Wrapper
####With love by dakk (2324852447570841050L) and liskit (10310263204519541551L) delegates. 
A smart wrapper for Lisk node APIs.

## Docs
You can find a fully documentation [HERE](https://andreafspeziale.github.io/liskapi/).

Source

    - /docs

## Installation

```bash
npm install liskapi
```

## Examples
A lot of basic examples can be found in the example.js file.

### Basic usage

```javascript
    const lisk = require ('liskapi')();

    lisk.getSyncStatus ().call ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error');
    });
```

### Get with params

```javascript
    lisk.getBalance ({address: 'address'})
        .call ()
        .then ((res) => {
            console.log (`Get balance of delegate\n ${JSON.stringify (res)}`);
        })
        .catch ((err) => {
            console.log ('Got an error in getting balance\n', err);
        });
```

### Post usage

```javascript
    const lisk = require ('liskapi')();

    lisk.enableForging ()
    .data ({secret: '...'})
    .call ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error');
    });
```


### Connect to a node different from local

```javascript
    const params = {
        host: 'othernode.com',
        port: 8000,
        ssl: true
    };

    const lisk = require ('liskapi')(params);
```


### Pagination semplification

Call an endpoint with pagination; if `limit` is great than 101, the endpoint will
be called many time as required.

```javascript
    const lisk = require ('liskapi')();

    lisk.getTransactions ()
    .paginate ({ limit: 100, offset: 0 })
    .call ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error');
    });
```



### Sorting

```javascript
    const lisk = require ('liskapi')();

    lisk.getTransactions ()
    .sort ({ time: 'asc' })
    .call ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error');
    });
```



### Change host for a given call

```javascript
    const lisk = require ('liskapi')();

    lisk.getTransactions ()
    .host ({ host: 'othernode2.com', port: 8000, ssl: true })
    .call ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error');
    });
```

