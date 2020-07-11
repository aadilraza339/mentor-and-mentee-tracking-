var knex = require('../connection/mysql')
console.log("mentee/queries")

let postMenteeInfo = (data) => {
    return knex('mentee_info').insert(data)

}

module.exports = { postMenteeInfo }
