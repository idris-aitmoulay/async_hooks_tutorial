var express = require('express');
var httpContext = require('express-cls-hooked');
const {createTodoItem} = require('./todo.controller.js');
const {getUser} = require('./user_service.js');
var app = express();
app.use(httpContext.middleware);



app.use((req, res, next) => {
    getUser(req.headers['authorization'], function(data) {
        httpContext.set('user', data);
        next();
    })
});

app.get('/user/:id', createTodoItem);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});