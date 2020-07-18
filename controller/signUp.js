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
    // console.log(data)
    queries.postSignUpdata(data).then((data) => {
        console.log(data)
        res.send(data)
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
    queries.checkLoginEmail(email).then((response) => {
        if (response[0]["email"].length == 0) {
            res.send("invalid email")
        } else {
            user_password = response[0]["password"]
            if (password == user_password) {
                token = jwt.sign({ email }, "rashmi")
                console.log(token)
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


