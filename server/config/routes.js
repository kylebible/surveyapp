var mongoose = require('mongoose');
var User = mongoose.model('User');
var controller = require('../controllers/controller.js');
var path = require('path')

module.exports = function(app) {

app.post('/getoneuser', function(req,res) {
  controller.getoneuser(req,res)
})

app.post('/createuser', function(req,res) {
  controller.createuser(req,res)
})

app.post('/createsurvey', function(req,res) {
  controller.createsurvey(req,res)
})

app.get('/getallsurveys', function(req,res) {
  controller.getallsurveys(req,res)
})

app.get('/getonesurvey/:id', function(req,res) {
  controller.getonesurvey(req,res)
})

app.post('/surveyvote',function(req,res) {
  controller.surveyvote(req,res)
})

app.post('/deletesurvey',function(req,res) {
  console.log("atroute")
  controller.deletesurvey(req,res)
})

app.all("*",(req,res,next) => {
        console.log("at *")
        res.sendFile(path.resolve("./public/dist/index.html"))
    })

}
