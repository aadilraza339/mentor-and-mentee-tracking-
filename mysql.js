console.log("mysql")
require('dotenv').config()


const connection = {
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST ,
        user: process.env.DB_USER ,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
    }
}


const knex = require('knex')(connection)

module.exports = knex;   