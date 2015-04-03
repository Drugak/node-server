/**
 * Created by vitaliydrugak on 01.04.15.
 */

"use strict"

var http =require('http'),
	fs = require('fs');

http.createServer(function(req, res) {
	var info;

	if (req.url == '/test') {
		fs.readFile('index.html', function(err, info){
			if (err) {
				console.log(err);
				res.statusCode = 500;
				res.end("На сервере произошла ошибка");
				return;
			}

			res.end(info);
		})
	} else {
		res.end('404');
	}
}).listen(1337, '127.0.0.1');
