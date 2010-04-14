
var fs = require('fs'),
    sys = require('sys');

var file = process.ARGV[2];

fs.stat(file, function (e, stat) {
    if (e) throw e;

    fs.open(file, "r", stat.mode, function (e, fd) {
        if (e) throw e;

        fs.read(fd, stat.size, 0, "utf8", function (e, data) {
            if (e) throw e;

            sys.puts(data);
        });
    });
});
