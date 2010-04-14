!SLIDE

# node.js
> evented I/O for V8 JavaScript

!SLIDE bullets incremental transition=scrollHorz

# what is node?

* Server-side JavaScript done right.
* Runs on V8
* An environment for developing high-performance web services
* Evented TCP stack
* Not a framework

!SLIDE bullets left transition=scrollHorz

# why node?

* Web applications spend most of their time doing I/O
* JavaScript is the language of the web

!SLIDE transition=scrollHorz

# V8 #

!SLIDE bullets incremental transition=scrollHorz

# V8

* Google's open source JavaScript engine.
* Developed by Lars Bak.
* Fast: compiles JavaScript to machine code.
* Implements most of ECMAScript 5.

!SLIDE center transition=scrollHorz

## Lars Bak

![Lars Bak](lars-bak.jpeg)

!SLIDE transition=scrollHorz

# ECMAScript 5

!SLIDE transition=scrollHorz

### ECMAScript 5

## Safe prototype extension

    @@@ javascript
    Object.defineProperty(Object.prototype, "forEach", {
        value: function (callback) {
            var keys = Object.keys(this);

            for (var i = 0, key; i < keys.length; i++) {
                key = keys[i]; 
                callback.call(this, key, this[key]);
            }
        }
    });

!SLIDE transition=scrollHorz

### ECMAScript 5

## Access to the hidden prototypes

    @@@ javascript
    Object.getPrototypeOf([]) // Array
    [].__proto__              // Array 
    [].__proto__.__proto__    // Object

!SLIDE transition=scrollHorz

### ECMAScript 5

## Basic prototypal inheritance

    @@@ javascript
    var o = Object.create({ foo: 42 });
    
    o.bar = "bah";

    Object.keys(o)    // ["bar"]

    o.foo             // 42
    o.__proto__       // { foo: 42 }

!SLIDE bullets transition=scrollHorz

# node.js #

!SLIDE bullets transition=scrollHorz

### node.js

## Event-driven programming

* Asynchronous I/O
* Callbacks

!SLIDE transition=scrollHorz

### node.js

## Common.js module system

    @@@ javascript
    var sys = require("sys");

    sys.puts("hello world");

!SLIDE transition=scrollHorz

### node.js

## Common.js module system

    @@@ javascript
    require.paths    // ["./lib", ...]
    __dirname        // this dirname
    __filename       // this filename

!SLIDE transition=scrollHorz

### node.js

## Simple HTTP server

    @@@ javascript
    var http = require('http');

    http.createServer(function (request, response) {
        response.writeHead(200, {
            'Content-Type':'text/plain'
        });
        response.end('Hello World\n');
    }).listen(8000);

!SLIDE transition=scrollHorz

# Event-driven programming

!SLIDE transition=scrollHorz

    @@@ javascript
    setTimeout(function () {
        // Do something after 1 second
    }, 1000);

!SLIDE transition=scrollHorz

    @@@ javascript
    process.nextTick(function () {
        // Do something asynchronously
    });

!SLIDE transition=scrollHorz

## Async error handling

    @@@ javascript
    process.addListener('uncaughtException', 
                        function (err) {
       // Handle exception 
    });

!SLIDE transition=scrollHorz

## Async signal handling

    @@@ javascript
    process.addListener('SIGINT', function (err) {
       // Handle Ctrl-C 
    });

!SLIDE transition=scrollHorz

# modules #

!SLIDE transition=scrollHorz

# file-system module #

    @@@ javascript
    require('fs');

!SLIDE bullets transition=scrollHorz

## modules

# fs

* one-to-one mapping with unix commands
* most functions have a synchronous version

!SLIDE transition=scrollHorz

## Asynchronous file stat

    @@@ javascript
    fs.stat("path/to/file", function (err, res) {
        if (res) {
            // Handle success
        } else {
            // Handle error
        }
    });

!SLIDE transition=scrollHorz

## Synchronous file stat

    @@@ javascript
    var res = fs.statSync("path/to/file");

    if (res) {
        // Handle success  
    } else {
        // Handle error  
    }

!SLIDE transition=scrollHorz

# Example
## `cat`

!SLIDE transition=scrollHorz

# Example
## Sync vs Async

!SLIDE transition=scrollHorz

# Thanks

!SLIDE transition=scrollHorz

# `http://nodejs.org`

!SLIDE transition=scrollHorz

# @cloudhead
## Alexis Sellier
## http://github.com/cloudhead/node-intro

!SLIDE transition=scrollHorz

# Questions?











