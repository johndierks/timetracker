var TimesheetsModel = require('../models/timesheets');


var TimesheetsController = {

	list : function(req, res){


		TimesheetsModel.listTimesheetsByUser(function(){res.render('timesheets/index', { title: 'Timesheets',timesheets: {} });});
	},
	add : function(req, res){
		TimesheetsModel.newTimesheet(10, req.body, function(err){ 
														if(err){
															res.json({'message':'failed.'})
														}else{
															res.json({'message':'success!'})
														}; 
													});
	}


}

module.exports = TimesheetsController;