const express = require('express');
const asyncHooks = require('async-hooks-logger');
const app = express();
const {print_json} = require('./output_print.js');

asyncHooks.create(data => {
    print_json(data);
});


app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
