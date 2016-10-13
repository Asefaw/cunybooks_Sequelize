const express = require('express');
const router = express.Router();
const models = require('../models');
const User = require('../models/').User;
const authenticate = require('../middlewares/authentication');
const Sequelize = require('sequelize'); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 

router.post('/user/logout', function(req, res){
	req.logout();
 	req.flash('success_msg', 'You have been logged Out');
 	res.redirect('login');

});

module.exports = router;