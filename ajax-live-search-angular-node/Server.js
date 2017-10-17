var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'fbstatus'
});

connection.connect(function(){
	console.log("Mysql databse is connect!!!");
});

app.use(express.static( __dirname + '/css'));
app.use(express.static( __dirname + '/js'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
	res.render('index.html');
});

app.get('/load', function(req, res){
	connection.query("select * from cfg_demos", function(err, rows, fields){
		if(err) throw err;
		/*for (var i = 0; i >= rows.lenght; i++) {
			console.log(i)
		}*/
		res.end(JSON.stringify(rows));
	});
});

app.listen(7001, function(){
	console.log("App is started using port 7001.");
});