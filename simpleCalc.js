// Load the http module to create an http server.
var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
// var querystring = require('querystring');


var server = http.createServer(function(req, res) {
	if (req.method == 'GET') {
		console.log("get");
		displayForm(res);
	} else if (req.method == 'POST') {
		console.log("post");
		displayResult(req, res);
	} else {
		res.writeHead(200);
    	res.end();
	};

}).listen(3000);


function displayForm(res) {
	fs.readFile('index.html', function(err, data){
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Content-Length': data.length
		});
		res.write(data);
		res.end();
	});
}

function displayResult(req, res) {
req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();

      //grab A and B values
      var a = eval(formdata.split("&")[0]);
      var b = eval(formdata.split("&")[1])

      var result = sum(a,b);

      //fill in the result and form values
      form = result.toString();
      console.log(form);

      //respond
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(form);

    });
}


console.log("Server running at http://localhost:3000/")


function sum(a, b) {
	return Number(a) + Number(b);
}