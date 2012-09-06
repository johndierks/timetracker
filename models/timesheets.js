var mongoose = require('mongoose')
	, Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId
  , Timesheet;

Timesheet = new Schema({
    'date': Date,
    'lines': [ {any: Schema.Types.Mixed} ],
    'user_id': ObjectId
  });

  Timesheet.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });

  Timesheet.pre('save', function(next) {
    this.keywords = extractKeywords(this.data);
    next();
  }); 

mongoose.model('Timesheet', Timesheet);

TimesheetsModel = {
	listTimesheetsByUser : function(callback){

    mongoose.connection.once('open', function() {
      var ts = new Timesheet({});
      ts.save();
      console.log('saved a timesheet');
      callback();
    });
    
	}
};

module.exports = TimesheetsModel