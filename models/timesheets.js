var mongoose = require('mongoose')
	, Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var db = mongoose.createConnection('localhost', 'timesheet-test');

var TimesheetSchema = new Schema({
  'date': Date,
  'lines': [ {any: Schema.Types.Mixed} ],
  'user_id': ObjectId
});

// Timesheet.virtual('id')
//   .get(function() {
//     return this._id.toHexString();
//   });

// Timesheet.pre('save', function(next) {
//   this.keywords = extractKeywords(this.data);
//   next();
// }); 

var Timesheet = db.model('Timesheet', TimesheetSchema)

//mongoose.model('Timesheet', Timesheet);

TimesheetsModel = {
	listTimesheetsByUser : function(callback){
    console.log('listing timesheets');
    callback();
    
	},

  newTimesheet : function(callback){

    console.log('adding new timesheet');

    var ts = new Timesheet({ date: Date.now() });
    
    ts.save(function (err) {
        if (err) // ...
        res.end('made timesheet.');
        callback();
    });


  }


};

module.exports = TimesheetsModel