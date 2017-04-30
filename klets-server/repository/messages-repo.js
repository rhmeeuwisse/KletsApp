
module.exports.__set = __set;
module.exports.__get = __get;
module.exports.save = save;
module.exports.getById = getById;
module.exports.findByRoomName = findByRoomName;

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
    var results = items.filter(function (item) {
        return (item._id === messageId);
    });
    return results.length === 1 ? results[0] : null;
}

function findByRoomName(roomName) {
    return items.filter(function (item) {
        return (item.roomName === roomName);
    });
}
