
var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});

app.get('/departments', function (req, res) {
  res.sendFile(path.join(___dirname + '/departments.html'));
});
 
app.get('/aboutus', function (req, res) {
  res.sendFile(path.join(___dirname + '/aboutus.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(___dirname + '/contact.html'));
});

app.get('/hello', function (req, res) {
  console.log("CAlling rest api");
  var person={firstName:'Ravi',lastName:'Tambade',age:47};
  res.send(person);
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at 8081");
})