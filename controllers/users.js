var UsersModel = require('../models/users');


var UsersController = {

	list : function(req, res){
		UsersModel.listTimesheetsByUser(function(){res.render('index', { title: 'Users' });});	
	}
}

module.exports = UsersController;