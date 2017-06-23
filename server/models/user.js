var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
  name: String,
  _surveys: [{type: Schema.Types.ObjectId, ref: 'Survey'}]
},{timestamps: true})

var User = mongoose.model('User', UserSchema);