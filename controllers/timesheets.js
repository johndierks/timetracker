var TimesheetsModel = require('../models/timesheets');


var TimesheetsController = {

	list : function(req, res){
		TimesheetsModel.listTimesheetsByUser(function(){res.render('index', { title: 'Timesheets' });});
  		
	}


}

module.exports = TimesheetsController;