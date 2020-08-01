var express = require('express')
var router = express.Router()
var queries = require('../model/mentee_info_queries')

router.post('/mentee_info' ,function(req , res){
   data = req.body
   queries.postMenteeInfo(data).then((response) => {
       console.log(response)
       res.send(response)
   }) .catch((err) => {
       console.log(err)
       res.send(err)
   })
})

router.put('/mentee_edit' , function(req , res){
    data = req.body
    var token = req.headers.cookie.split(" ")
    token = token[token.length - 1].slice(0, -10)
    jwt.verify(token , secret_key , (err , data) =>  {
        if(!err){
            mentee_id = data["mentee_id"]
        }else{
            res.send("cannot edit")
        }
    })      
    queries.updateMenteeInfo(data , mentee_id).then((response)=>{
           console.log(response)
           res.sendStatus(200)
       }).catch((err) => {
           res.sendStatus(400)
       })
})
 



module.exports = router