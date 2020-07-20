var express = require('express')
var router = express.Router()
queries = require('../model/mentor_queries')

router.post('/mentor_info' ,function(req , res){
    data = {
     mentor_name : req.body.mentor_name ,
     mentee_name  : req.body.mentee_name ,
     mentoring_duration : req.body.mentoring_duration,
     improve_upon : req.body.improve_upon ,
     english_feedback : req.body.english_feedback
    }
    queries.mentorPostData(data).then((response) => {
        console.log(response)
        res.send(response)
    }) .catch((err) => {
        console.log(err)
        res.send(err)
    })
 })
 

 module.exports = router


