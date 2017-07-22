#!/usr/bin/env node

var finalhandler = require('finalhandler'),
  hbs = require('tonic-hbs'),
  http = require('http'),
  ss = require('serve-static'),
  tonic = require('tonic');

var app = tonic({
  config: process.env.CONFIG_PATH || 'config.json'
});

app.use(hbs);
app.jobs('jobs');
app.start();

var root = ss('public');

var server = http.createServer(function(req, res) {
	if (req.url === '/something-new') {
		res.writeHead(301,
			{ Location: 'http://eepurl.com/cWZwXj' });
		res.end();
	} else if (req.url === '/dark') {
		res.writeHead(301,
			{ Location: 'https://docs.google.com/document/d/1LAZlIURFMqOrCPZDT2UCEFOzXETFQ-r6d80tVCDiddQ/' });
		res.end();
	} else { 
		root(req, res, finalhandler(req, res));
	}
  
});

server.listen(8080);
console.log('Ready.');