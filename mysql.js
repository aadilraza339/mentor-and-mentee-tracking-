console.log("mysql")
require('dotenv').config()

const connection = {
    client: 'mysql',
    connection: {
        host : process.env.db_host,
        user: process.env.db_user ,
        password : process.env.db_password,
        database : process.env.db
    }
}


const knex = require('knex')(connection)

module.exports = knex;   