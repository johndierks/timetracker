var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var db = mongoose.createConnection('localhost', 'timetracker');

var TimesheetSchema = mongoose.Schema({
  'date': Date,
  'lines': [ {any: Schema.Types.Mixed} ],
  'user_id': ObjectId
});

var Timesheet = db.model('Timesheet', TimesheetSchema)


// Timesheet.virtual('id')
//   .get(function() {
//     return this._id.toHexString();
//   });

// Timesheet.pre('save', function(next) {
//   this.keywords = extractKeywords(this.data);
//   next();
// }); 


mongoose.model('Timesheet', Timesheet);

TimesheetsModel = {
	listTimesheetsByUser : function(callback){
    console.log('listing timesheets');
    callback();
    
	},

  newTimesheet : function(user,data,callback){

    var date = data.date;
    var lines = data.lines;
    var u = user;

    console.log(lines);

    var ts = new Timesheet({ "date": Date.now(),"lines":lines, "user_id":u });
    
    ts.save(function (err) {
        if (err) callback(err);
        console.log('adding new timesheet');
        callback();
    });
    
    

  }


};

module.exports = TimesheetsModel