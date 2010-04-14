
var http = require('http'),
    sys = require('sys');

var concurrent = [];

http.createServer(function (request, response) {
    concurrent.push('*');

    sys.puts("---> " + status());

    dbQuery(function (result) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(result);

        sys.puts("<--- " + status());

        concurrent.pop();
    });
}).listen(8080);


// Simulate a slow DB query
function dbQuery(callback) {
    setTimeout(function () {
        callback("hello world\n"); 
    }, 1000);
}

function status() {
    return (new Date).toLocaleTimeString() + ' ' + concurrent.join('');
}
