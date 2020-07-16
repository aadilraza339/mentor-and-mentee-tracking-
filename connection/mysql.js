console.log("mysql")
const connection = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password : 'password',
        database : 'Mentor_Mentee_Tracker'
    }
}


const knex = require('knex')(connection)

module.exports = knex;   