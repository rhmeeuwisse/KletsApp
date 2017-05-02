var R = require('ramda');
var assert = require('chai').assert;
var message = require('./message');

module.exports.__set = __set;
module.exports.__get = __get;
module.exports.save = save;
module.exports.getById = getById;
module.exports.getMessagesByRoom = getMessagesByRoom;
module.exports.getRoomNames = getRoomNames;

var items = [
    message(1, 'The Soapbox', 'Klets', 'Anything goes on the Soapbox...'),
    message(2, 'The Soapbox', 'Klets', 'Let\'s know your heart-felt opinions.'),
    message(3, 'The Soapbox', 'Klets', 'Keep it civil and nice. Keep it interesting and passionate.'),
    message(4, 'Questions & Answers', 'Klets', 'Everything that you have always wanted to know: ask it here!'),
    message(5, 'Breaking news', 'Klets', 'Got something new? Let us know!')
];

function __set(value) {
    items = value || [];
}

function __get() {
    return items;
}

function save(message) {
    assert.isDefined(message._id);
    assert.isDefined(message.roomName);
    assert.isDefined(message.userName);
    assert.isDefined(message.text);

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

function getMessagesByRoom(roomName) {
    var filterByRoom = R.filter(R.where({roomName: R.equals(roomName)}));
    return filterByRoom(items);
}

function getRoomNames() {
    return R.sort(R.gt, R.uniq(R.pluck('roomName', items)));
}
