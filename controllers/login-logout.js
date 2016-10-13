const express = require('express');
const router = express.Router();
const models = require('../models');
const User = require('../models/').User;
const authenticate = require('../middlewares/authentication');
const Sequelize = require('sequelize'); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 


module.exports = { 
	login(req, res){
		res.render('login');
	},

	authenticateUser(req, res){
		passport.authenticate('local', {
	  	successRedirect:'userHome', 
	  	failureRedirect:'login', 
	  	failureFlash:true
	  }); 
	},

	logout(req, res){
		req.logout();
	req.flash('success_msg', 'You have been logged Out');

	res.redirect('login');
	},

	profile(req, res){
		res.render('userHome');
	}
};

// router.post('/user/login',
//   passport.authenticate('local', {
//   	successRedirect:'userHome', 
//   	failureRedirect:'login', 
//   	failureFlash:true
//   }),
//   function(req, res) { 
//     res.render('books');
//   });  
// module.exports = router;

// // get user' home page
// router.get('/user/userHome', function(req, res, next){
// 	res.render('userHome');
// });
// router.get('/users', function(req, res){
// 	models.User.findAll({}).then(function(users) {
//         res.render('users', {users: users});
//     });
// })
// module.exports = router;

// module.exports = {
// 	//render the login form
// 	login(req, res){
// 		if(!req.user){
// 			res.render('login');
// 		}else{
// 			res.redirect('/user/userHome');
// 		}
// 	},
// 	//authentication of user
// 	authenticateUser(req, res) {
// 	  passport.authenticate('local', {
// 	  	successRedirect:'userHome', 
// 	  	failureRedirect:'login', 
// 	  	failureFlash:true
// 	  }),
// 	  function(req, res) { 
// 	    res.render('books');
// 	  };
// 	}, 

// 	//logout
// 	logout(req, res){
// 		req.logout();
// 	 	req.flash('success_msg', 'You have been logged Out');
// 	 	res.redirect('login');
// 	}

// };
