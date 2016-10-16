var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {

       res.render('index');

});

app.get('/abc', function (req, res) {

       console.log("input: ", req.query.first_input, req.query.operator,req.query.second_input); 
       var operator =  req.query.operator;
       var result;
       var inputOne = parseFloat(req.query.first_input);
       var inputTwo = parseFloat(req.query.second_input); 
       if (operator == "+"){
                  result = inputOne + inputTwo;
       }
       if (operator == "-"){
                  result = inputOne - inputTwo;
       }
       if (operator == "*"){
                  result = inputOne * inputTwo;
       }
       if (operator == "/"){
                  result = inputOne / inputTwo;
       }
       //var sum = parseFloat(req.query.first_input) + parseFloat(req.query.second_input);  
       console.log('result= ',result); 

       res.send("result is " + result); 

});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})