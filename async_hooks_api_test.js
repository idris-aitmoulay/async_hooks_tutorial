const async_hooks = require('async_hooks');

const {print, print_init} = require('./output_print')

const asyncHook = async_hooks.createHook({
    // called during object construction
    init: function (asyncId, type, triggerAsyncId, resource) {
        print_init(asyncId, type, triggerAsyncId, resource)
    },

    // called just before the resource's callback is called
    before: function (asyncId) {
        print(asyncId, 'before');
    },

    // called just after the resource's callback has finished
    after: function (asyncId) {
        print(asyncId, 'after');
    },

    // called when an AsyncWrap instance is destroyed
    destroy: function (asyncId) {
        print(asyncId, 'destroy');
    },

    // called only for promise resources, when the `resolve`
    // function passed to the `Promise` constructor is invoked
    promiseResolve: function (asyncId) {
        print(asyncId, 'promiseResolve');
    }
})

// starts listening for async events
asyncHook.enable()

// stops listening for new async events
// asyncHook.disable()

setTimeout(function(){
    console.log("Hello");
    }, 2000);