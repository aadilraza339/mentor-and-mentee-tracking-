const express = require("express");
const bodyparser = require('body-parser')
const app = express();
const signUp = require('./controller/signUp')
const mentee_info = require('./controller/mentee_info')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.json())
app.use('/mentor_mentee' , signUp , mentee_info)



app.listen(8000, function (res, err) {
    if (!err) {
        console.log("server running")
    }
    else {
        throw err;
    }
})