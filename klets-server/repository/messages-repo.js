var R = require('ramda');

module.exports.__set = __set;
module.exports.__get = __get;
module.exports.save = save;
module.exports.getById = getById;
module.exports.findByRoomName = findByRoomName;
module.exports.getRoomNames = getRoomNames;

var items = [];

function __set(value) {
    items = value || [];
}

function __get() {
    return items;
}

function save(message) {
    if (!message._id)
        throw new Error('Missing message._id');
    if (!message.roomName)
        throw new Error('Missing message.roomName');
    if (!message.userName)
        throw new Error('Missing message.userName');
    if (!message.text)
        throw new Error('Missing message.text');

    var item = getById(message._id);
    if (!item)
        insert(message);
    else
        update(message);
}

function insert(message) {
    items.push(message);
}

function update(message) {
    items = items.map(function (item) {
        if (item._id === message._id)
            return message;
        else
            return item;
    });
}

function getById(messageId) {
    var filterById = R.filter(R.where({_id: R.equals(messageId)}));
    return R.head(filterById(items));
}

function findByRoomName(roomName) {
    var filterByRoomName = R.filter(R.where({roomName: R.equals(roomName)}));
    return filterByRoomName(items);
}

function getRoomNames() {
    return R.uniq(R.pluck('roomName', items));
}
