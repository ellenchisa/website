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
  root(req, res, finalhandler(req, res));
});

server.listen(8080);
console.log('Ready.');