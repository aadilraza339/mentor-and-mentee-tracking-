 var express = require("express");
const bodyparser = require('body-parser')
var app = express();
app.use(bodyparser.json())


var signUp = require('./controller/signUp')

app.use('/mentor_mentee', signUp)

app.listen(3000, function (res, err) {
    if (!err) {
        console.log("server running")
    }
    else {
        throw err;
    }
})