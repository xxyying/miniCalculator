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
		//ajax();
	} else if (req.method == 'POST') {
		console.log("post");
		displayResult(req, res);
	} else {
		res.writeHead(200);
    	res.end();
	};

}).listen(3000);

function ajax() {

}


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
      formdata = formdata.split("&");
      console.log(formdata);

      //grab A and B values
      var a = eval(formdata[0]);
      //console.log("value of a is:" + a);
      var op = formdata[1].split("=")[1];
      console.log("value of op is:" + op);
      var b = eval(formdata[2]);
      //console.log("value of b is:" + b);

      var result = 0;
      if (op == "%2B") {
      	result = sum(a, b);
      } else if (op == '-') {
      	result = sub(a, b);
      } else if (op == '*') {
      	result = mul(a, b);
      } else if (op == "%2F") {
      	result = div(a, b);
      } else {
      	result = "NA";
      }

      //fill in the result and form values
      form = result.toString();
      console.log("Result is: " + form);

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

function sub(a, b) {
	return Number(a) - Number(b);
}

function mul(a, b) {
	return Number(a) * Number(b);
}

function div(a, b) {
	return Number(a) / Number(b);
}


