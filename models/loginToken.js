var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

LoginToken = new Schema({
  email: { type: String, index: true },
  series: { type: String, index: true },
  token: { type: String, index: true }
});

LoginToken.method('randomToken', function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
});

LoginToken.pre('save', function(next) {
  // Automatically create the tokens
  this.token = this.randomToken();

  if (this.isNew)
    this.series = this.randomToken();

  next();
});

LoginToken.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

LoginToken.virtual('cookieValue')
  .get(function() {
    return JSON.stringify({ email: this.email, token: this.token, series: this.series });
  });

module.exports = LoginTokenModel;