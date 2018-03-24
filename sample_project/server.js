var express = require('express');
var app = express();

var random = require('./modules/module1.js');

app.get('/', function(req, res){
	res.send('Testion the route: '+ random.RandomChar(10));
});

app.listen(3000, function(){
	console.log('Running on port 3000');
});
