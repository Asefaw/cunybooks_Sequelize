var express = require('express');
var router = express.Router(); 

router.get('/', function(req, res){
	res.render('index');
});

router.get('/user/userHome', function(req, res){
	if(req.user){
		res.redirect('/user/userHome');
	}else{
		res.redirect('/user/login');
	}
})
module.exports = router;