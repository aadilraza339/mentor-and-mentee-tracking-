var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')
var queries = require('../model/signUp_queries')
require('dotenv').config()
secret_key = process.env.SECRET_KEY
console.log(secret_key)


router.post('/signUp', function (req, res) {
    console.log(req.body)
    var data = req.body
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
                        id = response[0]['id']
                       username  = response[0]["username"],
                       email  = response[0]["email"],

                    token = jwt.sign({username , email , id}, secret_key)
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
    jwt.verify(token, secret_key, (err) => {
        if (!err) {
            res.send(true)
        }
        else {
            res.send(false)
        }
    })
})


module.exports = router


