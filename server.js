const express = require("express");
const bodyparser = require('body-parser')
const app = express();
const signUp = require('./controller/signUp')
const mentee_info = require('./controller/mentee_info')
const mentor_info = require('./controller/mentor_info')
const main_mentor_page = require('./controller/main_mentor_page')
const cors = require('cors')

app.use(cors())
app.use(bodyparser.json())
app.use('/mentor_mentee' , signUp , mentee_info , mentor_info , main_mentor_page)



app.listen(8000, function (res, err) {
    if (!err) {
        console.log("server running")
    }
    else {
        throw err;
    }
})