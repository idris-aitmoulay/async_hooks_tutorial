users = [
    {id: 1, name: "alen"},
    {id: 2, name: "nane"},
    {id: 3, name: "Nan"},
    {id: 4, name: "mom"},
];

exports.getUser = function (idInit, callback) {
    var id = idInit % 4;
    callback(users[id]);
}