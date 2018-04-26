var express = require('express');
var app = express();
var http =require('http');
var httpServer= http.Server(app);

app.use(express.static(__dirname + '/../testsongplayer'));
app.get('/', function(req,res){
	res.render('player2.ejs',{title:"hehe"});

});
app.listen(8888);
