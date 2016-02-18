#!/usr/bin/env node

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(request, response){
	request.URL = url.parse(request.url, true);
	response.writeHead(200, {
		'content-type': 'text/plain'
	});
	response.write('iasa');
	response.end('.');
}).listen(3001);