/**
 * Created by vitaliydrugak on 01.04.15.
 */

"use strict"

var http =require('http');

var server = new http.Server();

server.listen(1337, '127.0.0.1');

var counter = 0;

var emit = server.emit;
server.emit = function(event) {
	console.log(event);
	emit.apply(server, arguments);
}

server.on('request', function(req, res) {
	res.end('Привет мир'+ ++counter);
});