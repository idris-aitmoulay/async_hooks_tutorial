var httpContext = require('express-cls-hooked');

exports.createTodoItem = function(req, res) {
    var user = httpContext.get('user');
    res.send(user);
}