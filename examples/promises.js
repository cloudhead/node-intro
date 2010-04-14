var events = require('events'),
    sys = require('sys');

function doSomethingAsynchronously() {
    var promise = new events.EventEmitter;

    process.nextTick(function () { 
        promise.emit("success", "Good night.");
    });

    return promise;
}

var promise = doSomethingAsynchronously();

promise.addListener("success", function (msg) {
    sys.puts(msg);
});

promise.addListener("error", function (msg) {
    sys.log("error: " + msg);
});
