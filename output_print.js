const fs = require("fs");

// print method for init method.
exports.print_init = function(asyncId, type, triggerAsyncId, resource) {
    fs.writeSync(1, `init : ${type} (${asyncId}):` + ` trigger:      ${triggerAsyncId} \n`);
};

// print for after, before and destroy methods.
exports.print = function(asyncId, type) {
    fs.writeSync(1, `${type} : (${asyncId}) \n`);
};

exports.print_json = function(data) {
    fs.writeSync(1, `async_hooks: ${JSON.stringify(data)} \n`);
};
