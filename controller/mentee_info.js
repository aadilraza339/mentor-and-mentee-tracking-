var express = require('express')
var router = express.Router()
var queries = require('../model/mentee_info_queries')
console.log("mentee/controller")

router.post('/mentee_info' ,function(req , res){
   data = {
    mentor : req.body.mentor,
    mentee : req.body.mentee,
    monthsInNg : req.body.monthsInNg ,
    english_mentor : req.body.english_mentor,
    from_place : req.body.from_place,
    completed_till_which_course : req.body.completed_till_which_course,
    mentor_feedback : req.body.mentor_feedback,
    study_schedule : req.body.study_schedule,
    study_hours_daily : req.body.study_hours_daily
   }
   queries.postMenteeInfo(data).then((response) => {
       console.log(response)
       res.send(response)
   }) .catch((err) => {
       console.log(err)
       res.send(err)
   })
})


module.exports = router