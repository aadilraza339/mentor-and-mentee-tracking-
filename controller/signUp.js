var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
var queries = require('../model/signUp_queries')





router.post('/signUp', function (req, res) {
    console.log(req.body)
    var data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }
    queries.postSignUpdata(data).then((response) => {
        res.send(response)
    }).catch((err) => {
        console.log(err)
        res.send(err.code)
    })
})

router.post('/login', function (req, res) {
    email = req.body.email
    password = req.body.password
    console.log(email)
    console.log(password)
    queries.checkLoginEmail(email)
        .then((response) => {
            console.log(response)
            if (response[0]["email"].length == 0) {
                res.send("invalid email")
            } else {
                user_password = response[0]["password"]
                if (password == user_password) {
                       name  = response[0]["firstname"],
                       email  = response[0]["email"],
                       password = response[0]["password"]

                    token = jwt.sign({email , password}, name)
                    console.log(token)
                    res.cookie(token)
                    res.send('login successfull')
                } else {
                    res.send("invalid password")
                }
            }
        }).catch((err) => {
            console.log(err)
            res.send(err)
        })
})

router.get('/verify', (req, res) => {
    var token = req.query.token;
    jwt.verify(token, 'rashmi', (err) => {
        if (!err) {
            res.send(true)
        }
        else {
            res.send(false)
        }
    })
})


module.exports = router


