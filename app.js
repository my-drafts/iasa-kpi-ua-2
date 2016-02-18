#!/usr/bin/env node

var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(request, response){
	request.URL = url.parse(request.url, true);
	response.writeHead(200, {
		'content-type': 'text/plain'
	});
	response.write('Hello world!');
	response.write('\n\n');
	response.write(util.format('request headers: %s', JSON.stringify(request.headers)));
	response.write('\n\n');
	response.write(util.format('request url: %s', JSON.stringify(request.URL)));
	response.write('\n\n');
	response.end('.');
}).listen(3000);