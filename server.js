 var express = require("express");
const bodyparser = require('body-parser')
var app = express();
app.use(bodyparser.json())
signUp = require('./controller/signUp')
mentee_info = require('./controller/mentee_info')

app.use('/mentor_mentee' , signUp)

app.use('/mentor_mentee' , mentee_info)



app.listen(8000, function (res, err) {
    if (!err) {
        console.log("server running")
    }
    else {
        throw err;
    }
})