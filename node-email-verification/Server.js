var express = require('express');
var nodemailer = require('nodemailer');

var app = express();

var stmpTransport = nodemailer.createTransport({
	service: "gmail",
	host: 'stmp.gmail.com',
	auth: {
		user: "",
		pass: ""
	}
});

var rand, mailOptions, host, link;

app.get('/', function(req, res){
	res.sendfile('index.html');
});

app.get('/send', function(req, res){
	rand = Math.floor((Math.random() * 100) + 54);
	host = req.get('host');
	link = "http://" + req.get('host') + "/verify?id=" + rand;
	mailOptions = {
		to : req.query.to,
		subject : "Please confirm your email account",
		html : "Hello, <br> Please click on the link to verify your mail. <br><a href="+link+">Click here to verify</a>"
	}
	console.log(mailOptions);
	stmpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
			res.end("error");
		}else{
			console.log("Message sent: " + response.message);
			res.end('send');
		}
	});
});

app.get('/verify', function(req, res){
	console.log(req.protocol + ":/" + req.get('host'));
	if((req.protocol + "://" + req.get('host')) == ("http://" + host)){
		console.log("Domain is matched. Information is from authentic email");
		if(req.query.id == rand){
			console.log("email is verified");
			res.end("<h1>Email " + mailOptions.to + " is been successfully verified.")
		}else{
			console.log("Email is not verified.");
			res.end("<h1>Bad request!</h1>");
		}
	}else{
		res.end("<h1>Request is from unknown source</h1>")
	}
});


app.listen(3000, function(){
	console.log("Express start to port 3000.");
});
