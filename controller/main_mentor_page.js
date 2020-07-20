const express = require('express');
const router = express.Router();
const queries = require('../model/main_mentor_queries')

router.get('/mentors',function(req,res){
    queries.getMentor().then((response) => {
        console.log(response)
        res.send(response)
    }).catch((err) => {
        console.log(err)
        res.send(err)
    })
})

module.exports = router