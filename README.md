# Lisk API

A smart wrapper for Lisk node APIs.



## Examples

### Basic usage

```
    const lisk = require ('lisk-api')();

    list.getSyncStatus ()
    .then ((res) => {
        console.log (`Got data ${res}`);
    })
    .catch ((err) => {
        console.log ('Got an error');
    });
```


### Connect to a node different from local

```
    const params = {
        host: 'othernode.com',
        port: 8000,
        ssl: true
    };

    const lisk = require ('lisk-api')(params);
```


### Pagination semplification



### Sorting

