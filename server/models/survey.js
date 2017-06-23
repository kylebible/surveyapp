var mongoose = require('mongoose');
var Schema = mongoose.Schema

var SurveySchema = new mongoose.Schema( {
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    option1_votes: Number,
    option2_votes: Number,
    option3_votes: Number,
    option4_votes: Number,
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps: true});

var Survey = mongoose.model('Survey', SurveySchema)