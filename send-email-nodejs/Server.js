var express = require('express');
var nodemailer = require('nodemailer');

var app = express();

var stmpTransport = nodemailer.createTransport({
	service: "gmail",
	host: "stmp.gmail.com",
	auth: {
		user: "",
		pass: ""
	}
});

app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/send', function(req, res){
	var mailOptions = {
		to : req.query.to,
		subject : req.query.subject,
		text : req.query.text
	}
	console.log(mailOptions);
	stmpTransport.sendMail(mailOptions, function(err, response){
		if(err){
			console.log(err);
		}else{
			console.log('Message send: ' + response.message);
			res.end("send");
		}
	});
});


app.listen(3000, function(){
	console.log("Express started on port 3000");
});
