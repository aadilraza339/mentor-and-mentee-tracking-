var knex = require('./mysql')


let getMentor = () => {
    return knex('mentor_info').select("mentor_name")
}

module.exports = {getMentor}