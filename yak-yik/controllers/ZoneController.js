var Zone = require('../models/Zone');

moudle.exports = {
	find: function(){
		Zone.find(params, function(err, zones){
			if(err){
				callback(err, null);
				return;
			}
			callback(null, zones);
		});
	},

	findById: function(id, callback){
		Zone.findById(id, function(err, zone){
			callback(err, null);
			return;
		});
		callback(null, zone);
	},

	create: function(){
	},

	find: function(){
	},

	find: function(){
	},
} 
