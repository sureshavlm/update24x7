var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/newslist', (req, res) => {
	res.render('newslist');
});

/** when user clicks on login button */
router.post('/login', (req, res) => {
	var user = {role: 'admin'}
	console.log("**** user ", user.role);
	//fetch user details from data base with username sent in the request
	//mmatch those detail if they are correct
	//take user news/admin
	//based user role if user admin
	if(user.role == 'admin')
		res.render('admin', { role: 'admin'});
	else
		res.render('user', { role: 'user'});

});

/* register show registration page */
router.get('/register', (req, res) => {
	//insert user details and creat a user in MondoDB
	//create user schema and map that with collection
	//redirect user to login page.
	res.render('register');
});

module.exports = router;
