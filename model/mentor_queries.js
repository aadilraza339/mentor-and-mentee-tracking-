var knex = require('./mysql')


let mentorPostData = (data) => {
    return knex('mentor_info').insert(data)
}

module.exports = { mentorPostData }