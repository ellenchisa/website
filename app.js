#!/usr/bin/env node

var finalhandler = require('finalhandler'),
  http = require('http'),
  ss = require('serve-static');

var root = ss('public');

var server = http.createServer(function(req, res) {
		root(req, res, finalhandler(req, res));
	}
  
);

server.listen(8080);
console.log('Ready.');