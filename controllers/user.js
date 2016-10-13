const models = require('../models');
const User = require('../models/').User; 


module.exports = {
	index(req, res){
		if(!req.user){
			res.render('signup');
		}else{
			res.redirect('/user/userHome');
		}	 
	},
	create(req, res){
		var fullName = req.body.fullName;
		var email = req.body.email; 
		var password = req.body.password; 
		var college = req.body.college;
		// Validation
		req.checkBody('fullName', 'Full Name is required').notEmpty();
		req.checkBody('email', 'Email is required').notEmpty();
		req.checkBody('email', 'Email is not valid').isEmail(); 
		req.checkBody('password', 'Password is required').notEmpty(); 
		req.checkBody('college', 'College is required').notEmpty(); 
		req.checkBody('terms', 'Must Agree With Terms').notEmpty(); 

		var errors = req.validationErrors();
		if(errors){
			res.render('signup',{
				errors: errors
			});
		}else{
			User.create(req.body)
			.then(function(user){
				res.render('login',{status: {title: 'Account Created', msg: 'Login in using the email and password you just created.'}}); 
			});
					 
		}
	},
};