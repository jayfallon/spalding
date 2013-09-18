// get organization

module.exports = function(app){
	app.get('/organization', function(req,res){
		res.render('organization/stream');
	});
	
	app.get('/organization/users', function(req,res){
		res.render('organization/stream');
	});
	
	app.get('/organization/devices', function(req,res){
		res.render('organization/organization_devices');
	});
	
	app.get('/organization/devices/departments', function(req,res){
		res.render('organization/organization_devices_department');
	});
	
	app.get('/organization/cloud_services', function(req,res){
		res.render('organization/organization_cloud_services');
	});
	
	app.get('/organization/locations', function(req,res){
		res.render('organization/organization_locations');
	});
	
	app.get('/organization/incidents', function(req,res){
		res.render('organization/organization_incidents');
	});
	
	// app.get('/organization/risk', function(req,res){
	// 		res.render('organization/organization_risk');
	// 	});
	
	app.get('/organization/departments', function(req,res){
		res.render('organization/organization_departments');
	});
	
	app.get('/organization/assets', function(req,res){
		res.render('organization/organization_assets');
	});
	
	app.get('/organization/services', function(req,res){
		res.render('organization/organization_services');
	});
	
	app.get('/organization/providers', function(req,res){
		res.render('organization/organization_providers');
	});
	
	//above spalding
	//below nestor
	app.get('/department', function(req,res){
		res.redirect('department/departmentname');
	});
	
	app.get('/organization', function(req,res){
		res.redirect('organization/locations/users');
	});
	
	app.get('/organization/locations', function(req,res){
		res.redirect('organization/locations/users');
	});
	
	app.get('/organization/locations', function(req,res){
		res.render('organization/locations');
	});
	
	app.get('/organization/cloud_services', function(req,res){
		res.render('organization/cloud_services', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/organization/assets', function(req,res){
		res.render('organization/assets', {viewTitle: 'organization Assets'});
	});

	app.get('/organization/mobile_devices', function(req,res){
		res.render('organization/mobile_devices', {viewTitle: 'organization mobile devices'});
	});
	
	app.get('/organization/viruses', function(req,res){
		res.render('organization/viruses', {viewTitle: 'organization Viruses'});
	});
	
	//locations subsections
	
	app.get('/organization/locations/users', function(req,res){
		res.render('organization/locations_users', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/locations/departments', function(req,res){
		res.render('organization/locations_departments', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/locations/services', function(req,res){
		res.render('organization/locations_services', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/locations/organizations', function(req,res){
		res.render('organization/locations_organizations', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/locations/locations', function(req,res){
		res.render('organization/locations_locations', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/locations/countries', function(req,res){
		res.render('organization/locations_countries', {viewTitle: 'organization Viruses'});
	});
	
	//cloud services subsections
	
	app.get('/organization/cloud_services/users', function(req,res){
		res.render('organization/cloud_services_users', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/organization/cloud_services/departments', function(req,res){
		res.render('organization/cloud_services_departments', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/organization/cloud_services/countries', function(req,res){
		res.render('organization/cloud_services_countries', {viewTitle: 'organization Cloud Services'});
	});
	
	//assets subsections
	
	app.get('/organization/assets/users', function(req,res){
		res.render('organization/assets_users', {viewTitle: 'organization Assets'});
	});
	
	app.get('/organization/assets/locations', function(req,res){
		res.render('organization/assets_locations', {viewTitle: 'organization Assets'});
	});
	
	app.get('/organization/assets/countries', function(req,res){
		res.render('organization/assets_countries', {viewTitle: 'organization Assets'});
	});
	
	//mobile devices subsections
	
	app.get('/organization/mobile_devices/users', function(req,res){
		res.render('organization/mobile_devices_users', {viewTitle: 'organization mobile devices'});
	});
	
	app.get('/organization/mobile_devices/services', function(req,res){
		res.render('organization/mobile_devices_services', {viewTitle: 'organization mobile devices'});
	});
	
	app.get('/organization/mobile_devices/organizations', function(req,res){
		res.render('organization/mobile_devices_organizations', {viewTitle: 'organization mobile devices'});
	});
	
	app.get('/organization/mobile_devices/locations', function(req,res){
		res.render('organization/mobile_devices_locations', {viewTitle: 'organization mobile devices'});
	});
	
	app.get('/organization/mobile_devices/countries', function(req,res){
		res.render('organization/mobile_devices_countries', {viewTitle: 'organization mobile devices'});
	});
	
	//viruses subsections
	
	app.get('/organization/viruses/users', function(req,res){
		res.render('organization/viruses_users', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/viruses/assets', function(req,res){
		res.render('organization/viruses_assets', {viewTitle: 'organization Viruses'});
	});
	
	app.get('/organization/viruses/devices', function(req,res){
		res.render('organization/viruses_devices', {viewTitle: 'organization Viruses'});
	});
	
	//single views
	
	app.get('/department/departmentname', function(req,res){
		res.render('organization/department_details', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/department/departmentname/compromises', function(req,res){
		res.render('organization/department_compromises', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/department/departmentname/locations', function(req,res){
		res.render('organization/department_locations', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/department/departmentname/accounts', function(req,res){
		res.render('organization/department_accounts', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/department/departmentname/assets', function(req,res){
		res.render('organization/department_assets', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/department/departmentname/devices', function(req,res){
		res.render('organization/department_mobile_devices', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/department/departmentname/cloud_services', function(req,res){
		res.render('organization/department_cloud_services', {viewTitle: 'organization Cloud Services'});
	});
	
	app.get('/video', function(req,res){
		res.render('organization/video', {viewTitle: 'organization Cloud Services'});
	});

};