var obj;
var obj1;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"songs"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT songname FROM newsongs", function(err,result,fields){
  	if(err)throw err;
  	obj=result;
  	obj1=JSON.stringify(obj);
  	console.log(obj1);
  });
});


var express = require('express');
var app = express();
var http =require('http');
var httpServer= http.Server(app);

app.use(express.static(__dirname + '/../testsongplayer'));
app.get('/', function(req,res){
	res.render('player2.ejs',{title:obj1});

});
app.listen(8888);
