const express = require('express');
const router = express.Router();
const models = require('../models');
const User = require('../models/').User;
const authenticate = require('../middlewares/authentication');
const Sequelize = require('sequelize'); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy; 


router.post('/user/authenticate',
  passport.authenticate('local', {
  	successRedirect:'userHome', 
  	failureRedirect:'login', 
  	failureFlash:true
  }),
  function(req, res) { 
    res.render('books');
  });  

module.exports = router;