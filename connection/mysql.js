result = require('dotenv').config();
console.log(result)

const connection = {
    client: 'mysql',
    connection: {
        host: process.env.host,
        user: process.env.user,
        password : process.env.password,
        database : process.env.database
    }
}


const knex = require('knex')(connection)

module.exports = knex;   