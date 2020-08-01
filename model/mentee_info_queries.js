var knex = require('../mysql')
console.log("mentee/queries")

let postMenteeInfo = (data) => {
    return knex('mentee_info').insert(data)

}

let updateMenteeInfo = (data, mentee_id) => {
    return knex('mentee_info')
    .where("mentee_id", mentee_id)
    .update(data)
}

let get_Mentee_By_Mentor_Name = (mentor) => {
    return knex('mentee_info').select('*').where("mentor", mentor)
}

module.exports = { postMenteeInfo ,updateMenteeInfo ,get_Mentee_By_Mentor_Name}
