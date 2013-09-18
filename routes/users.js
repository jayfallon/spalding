// get users home

module.exports = function(app){
	app.get('/users', function(req,res){
		res.redirect('users/risk');
	});
	
	app.get('/users/risk', function(req,res){
		res.render('users/risk', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/cloud_services', function(req,res){
		res.render('users/cloud_services', {viewTitle: 'Users Cloud Services'});
	});
	
	app.get('/users/assets', function(req,res){
		res.render('users/assets', {viewTitle: 'Users Assets'});
	});
	
	app.get('/users/viruses', function(req,res){
		res.render('users/viruses', {viewTitle: 'Users Viruses'});
	});
	
	app.get('/users/risk/department_unique_assets', function(req,res){
		res.render('users/risk_us_dept', {viewTitle: 'Users Viruses'});
	});
	
	app.get('/users/risk/nexpose', function(req,res){
		res.render('users/nexpose', {viewTitle: 'Users Viruses'});
	});
	
	app.get('/users/risk/option02', function(req,res){
		res.render('users/risk_option02', {viewTitle: 'Users Viruses'});
	});
	
	//get username
	
	app.get('/username', function(req,res){
		res.redirect('users/username');
	});
	
	app.get('/users/username', function(req,res){
		res.render('users/user_details', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/basic', function(req,res){
		res.render('users/user_details_basic', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/incidents/incidentname', function(req,res){
		res.render('users/user_incident_details', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/compromises', function(req,res){
		res.render('users/user_compromises', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/locations', function(req,res){
		res.render('users/user_locations', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/accounts', function(req,res){
		res.render('users/user_accounts', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/assets', function(req,res){
		res.render('users/user_assets', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/mobile_devices', function(req,res){
		res.render('users/user_mobile_devices', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/devices', function(req,res){
		res.render('users/user_mobile_devices', {viewTitle: 'Users Risk'});
	});
	
	app.get('/users/username/cloud_services', function(req,res){
		res.render('users/user_cloud_services', {viewTitle: 'Users Risk'});
	});
};
