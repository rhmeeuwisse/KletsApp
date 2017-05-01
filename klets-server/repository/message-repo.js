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
    items = R.append(message, items);
}

function update(message) {
    var updater = function (item) {
        if (R.equals(item._id, message._id))
            return message;
        else
            return item;
    };
    items = R.map(updater, items);
}

function getById(messageId) {
    var filterById = R.filter(R.where({_id: R.equals(messageId)}));
    return R.head(filterById(items));
}

function findByRoomName(roomName) {
    var filterByRoom = R.filter(R.where({roomName: R.equals(roomName)}));
    return filterByRoom(items);
}

function getRoomNames() {
    return R.sort(R.gt, R.uniq(R.pluck('roomName', items)));
}
