var db = require('mysql');
var connection = db.createConnection({
	host: "localhost",
	user: "root",
	password: "admin",
	database: "fbstatus"
});

module.exports = {
	add_status: function(s, res){
		connection.connect(function(errc) {
			if (errc){
				console.log("Connected faild!");
			}else{
				console.log("Connected success!");
			}
			var query = "insert into status(s_text, t_status) values('"+s.status+"', CURRENT_TIMESTAMP)";
			connection.query(query, function(err, rows){
				if(err){
					console.log("Cannot execute!");
				}else{
					console.log("Status " + s.status + " is been added to Database!");
					res.end("Yes");
				}
			});
		});
	}
};
