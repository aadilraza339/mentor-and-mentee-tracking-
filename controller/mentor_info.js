var express = require('express')
const jwt = require('jsonwebtoken')
var router = express.Router()
queries = require('../model/mentor_queries')



router.post('/mentor_info', function (req, res) {
    data = {
        mentor_name: req.body.mentor_name,
        mentee_name: req.body.mentee_name,
        mentoring_duration: req.body.mentoring_duration,
        improve_upon: req.body.improve_upon,
        english_feedback: req.body.english_feedback
    }
    queries.mentorPostData(data).then((response) => {
        console.log(response)
        res.send(response)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

router.put('/mentor_edit', function (req, res) {
    data = {
        mentor_name: req.body.mentor_name,
        mentee_name: req.body.mentee_name,
        mentoring_duration: req.body.mentoring_duration,
        improve_upon: req.body.improve_upon,
        english_feedback: req.body.english_feedback
    }
    queries.mentorEditData(data).then((response) => {
        console.log(response)
        res.send(response)
    }).catch((err) => {
        console.log(err)
    })

})

router.get('/mentee_search/:mentee_name', function (req, res) {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkk")
    var token = req.headers.cookie.split(" ")
    token = token[token.length - 1].slice(0, -10)
    console.log(token)
    mentee_name = req.params.mentee_name
    console.log(mentee_name)
    queries.menteeSearch(mentee_name).then((response) => {
        if (response.length != 0) {
            console.log(response)
            console.log(token)
            key = response[0]["mentor"]
            console.log(key)
            console.log("mentee_found")
            jwt.verify(token, key, (err, data) => {
                console.log("kkkkkkkkkkkkkkkkkkkkkknsnnnnnnnnnnnnnnnnnnnnnnnnnn")
                if (!err) {
                    console.log("verified")
                    queries.getMenteeData(key).then((response) => {
                        console.log(response)
                        res.send(response)
                    }).catch((err) => {
                        console.log(err)
                        res.send(err)
                    })
                } else {
                    console.log("not valid")
                    res.send("not verified")
                }
            })
        } else {
            res.send("No such mentee found")
        }
    })
        .catch((err) => {
            res.send(err)
        })
})


module.exports = router


