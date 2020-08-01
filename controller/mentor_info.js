var express = require('express')
const jwt = require('jsonwebtoken')
var router = express.Router()
queries = require('../model/mentor_queries')
require('dotenv').config()

secret_key = process.env.SECRET_KEY



router.post('/mentor_info', function (req, res) {
    data = req.body
    queries.mentorPostData(data).then((response) => {
        console.log(response)
        res.send(response)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

router.put('/mentor_edit', function (req, res) {
    data = req.body
    queries.mentorEditData(data).then((response) => {
        console.log(response)
        res.send(response)
    }).catch((err) => {
        console.log(err)
    })

})

router.get('/mentee_search/:mentee_name', function (req, res) {
    updated_data = req.body
    var token = req.headers.cookie.split(" ")
    token = token[token.length - 1].slice(0, -10)
    mentee_name = req.params.mentee_name
    queries.menteeSearch(mentee_name).then((response) => {
        console.log(response)
        if (response.length != 0) {
            jwt.verify(token, secret_key, (err, data) => {
                if (!err) {
                    console.log(data)
                    res.send("token verified")
                    mentor_name = response[0]["mentor"]
                    console.log(mentor_name)
                    auth_username = data["username"]
                    console.log(auth_username)
                    if(mentor_name == auth_username){
                        console.log("mentor verified")
                        res.send("mentor verified")
                        queries.editMentee(updated_data, mentee_name).then((result) => {
                            console.log(result)
                            res.send("menteeedited")
                        }).catch((err) => {
                            console.log(err)
                            res.send(err)
                        })

                    }else {
                        console.log("mentor does not have access to view this")
                        res.send("mentor does not have access to view this")
                    }
                } else {
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


