
/*
 * GET home page.
 */

module.exports = function(app){
	// app.get('/', function(req,res){
	// 		res.redirect('/organization');
	// 	});
	
	app.get('/', function(req,res){
		res.render('organization/stream', {viewTitle: 'organization locations'});
	});
	
	//404
	// Handle 404
	  app.use(function(req, res) {
	      res.status(400);
	     res.render('404.jade', {title: '404: File Not Found'});
	  });

	  // Handle 500
	  app.use(function(error, req, res, next) {
	      res.status(500);
	     res.render('500.jade', {title:'500: Internal Server Error', error: error});
	  });
	
};