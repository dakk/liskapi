# Lisk API

A smart wrapper for Lisk node APIs.



## Examples

### Basic usage

```javascript
    const lisk = require ('lisk-api')();

    lisk.getSyncStatus ().call ()
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

    const lisk = require ('lisk-api')(params);
```


### Pagination semplification

Call an endpoint with pagination; if `limit` is great than 101, the endpoint will
be called many time as required.

```javascript
    const lisk = require ('lisk-api')();

    lisk.getTransactions ()
    .pagination ({ limit: 100, offset: 0 })
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
    const lisk = require ('lisk-api')();

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
    const lisk = require ('lisk-api')();

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

