var mongoose = require('mongoose');
var User = mongoose.model('User');
var Survey = mongoose.model('Survey')

module.exports = {
  getoneuser: function(req, res) {
    User.findOne({name: req.body.name}, function(err, data) {
      res.json(data)
    }) 
  },
  createuser: function(req, res) {
    var user = new User(req.body)
    user.save(function(err) {
      if(err){
        console.log("something went wrong creating a new user")
      }
      else {
        res.json(user)
      }
    })
  },
  createsurvey: function(req,res) {
    User.findOne({_id: req.body._user}, function(err,user) {
      if (err) {
        console.log(err)
      }
      else {
        var survey = new Survey(req.body)
        user._surveys.push(survey)
        user.save(function(err) {
          if (err) {
            console.log(err)
          }
          else {
            survey.save(function(err) {
              if(err) {
                console.log(err)
              }
              else {
                res.json(survey)
              }
            })
          }
        })
      }
    })
  },
  getallsurveys: function(req,res) {
    Survey.find({}).populate('_user')
    .exec(function(err,surveys) {
      if (err) {
        console.log("there was an error getting all surveys",err)
      }
      else {
        res.json(surveys)
      }
    }) 
  },
  getonesurvey: function(req,res) {
    Survey.findOne({_id: req.params.id}, function(err,survey) {
      if(err) {
        console.log("error getonesurvey",err)
      }
      else {
        res.json(survey)
      }
    })
  },
  surveyvote: function(req,res) {
    option = req.body.option
    Survey.findOne({_id:req.body.survey_id}, function(err,survey) {
      if (err) {
        console.log(err)
      }
      else {
        if (option==1) {
          survey.option1_votes = survey.option1_votes+1
        }
        else if (option==2) {
          survey.option2_votes = survey.option2_votes+1
        }
        else if (option==3) {
          survey.option3_votes = survey.option3_votes+1
        }
        else if (option==4) {
          survey.option4_votes = survey.option4_votes+1
        4
        }
        survey.save(function(err) {
          if (err) {
            console.log(err)
          }
          else {
            res.json(survey)
          }
        })
      }
    })
  },
  deletesurvey: function(req,res) {
    Survey.findOne(req.body, function(err,survey) {
      console.log(survey)
      User.findOne({_id: survey._user}, function(err,user) {
        Survey.remove({_id: survey._id}, function(err) {
          user._surveys.pull({_id: survey._id})
          res.json(user)
        })
      })
    })
  }

}
