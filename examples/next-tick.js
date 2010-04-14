var sys = require('sys');

sys.debug("> 1 <");

process.nextTick(function () {
    sys.debug("> 2 <");
});

sys.debug("> 3 <");

