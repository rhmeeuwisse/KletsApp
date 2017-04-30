
module.exports.__set = __set;
module.exports.__get = __get;
module.exports.save = save;
module.exports.findById = findById;
module.exports.findByUserName = findByUserName;

var items = [];

function __set(value) {
    items = value || [];
}

function __get() {
    return items;
}

function save(account) {
    if (!account._id)
        throw new Error('Missing account _id');

    var item = findById(account._id);
    if (!item)
        insert(account);
    else
        update(account);
}

function insert(account) {
    items.push(account);
}

function update(account) {
    items = items.map(function (item) {
        if (item._id === account._id)
            return account;
        else
            return item;
    });
}

function findById(accountId) {
    var results = items.filter(function (item) {
        return (item._id === accountId);
    });
    return results.length === 1 ? results[0] : null;
}

function findByUserName(userName) {
    var results = items.filter(function (item) {
        return (item.userName === userName);
    });
    return results.length === 1 ? results[0] : null;
}
