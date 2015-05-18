var express = require('express');
var router = express.Router();

router.use(function (req, res, next){
	if(req.method === 'GET'){
		//continue to the next middleware or request handler
		return next();
	}

	if(!req.isAuthenticated()){
		//user not authenticated, redirect to login page
		res.redirect('/#login');
	}
	//user authenticated, redirect to the next middleware or request handler
	return next();
});
router.route('/posts')
	
	//returns all posts
	.get(function (req, res){
		//temporary solution
		res.send({message: 'TODO Return all posts'});
	})

	.post(function (req, res){
		//temporary solution
		res.send({message: 'TODO Create a new post'});
	});

router.route('/posts/:id')
	//return a particular post
	.get(function (req, res){
		res.send({message: 'TODO Return a post with ID ' + req.params.id});
	})

	//update existing post
	.put(function (req, res){
		res.send({message: 'TODO Modify a post with ID ' + req.params.id});
	})

	//delete existing post
	.delete(function (req, res){
		res.send({message: 'TODO Delete a post with ID ' + req.params.id});
	});

module.exports = router;