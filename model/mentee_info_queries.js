var knex = require('../mysql')
console.log("mentee/queries")

let postMenteeInfo = (data) => {
    return knex('mentee_info').insert(data)

}

let updateMenteeInfo = (data, mentee_id) => {
    return knex('mentee_info')
    .where("mentee_id", mentee_id)
    .update({
        mentor : data.mentor,
        mentee : data.mentee,
        monthsInNg : data.monthsInNg ,
        english_mentor : data.english_mentor,
        from_place : data.from_place,
        completed_till_which_course : data.completed_till_which_course,
        mentor_feedback : data.mentor_feedback,
        study_schedule : data.study_schedule,
        study_hours_daily : data.study_hours_daily
    })
}

let get_Mentee_By_Mentor_Name = (mentor) => {
    return knex('mentee_info').select('*').where("mentor", mentor)
}

module.exports = { postMenteeInfo ,updateMenteeInfo ,get_Mentee_By_Mentor_Name}
