
/*
 * Settings page.
 */

module.exports = function(app){
	app.get('/settings', function(req,res){
		res.render('settings/index', {viewTitle: 'Settings'})
	});
};