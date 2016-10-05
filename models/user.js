var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const db = require('../database/db');

// User Schema
var userSchema = mongoose.Schema({ 
	fullName: {
		type: String
	}, 
	email: {
		type:String,
        required: true,
        unique: true
	}, 	
	password: {
		type: String
	},
	college: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByEmail = function(email, callback){
	var query = {email: email};
	User.findOne(query, callback);
}
module.exports.getUserById= function(id, callback){ 
	User.findById(id, callback);
}

module.exports.validatePassword= function(password, hash, callback){
	bcrypt.compare(password, hash, function(err, isMatch){
		if(err) throw err;
		callback(null, isMatch);
	});
}

module.exports.userExist = function(email, callback){
	var query = {email: email};
	User.findOne(query, callback);
}