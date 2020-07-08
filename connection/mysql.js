result = require('dotenv').config()


const connection = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'Mentor_Mentee_Tracker'
    }
}


const knex = require('knex')(connection)

module.exports = knex;   