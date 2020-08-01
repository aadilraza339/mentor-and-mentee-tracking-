var knex = require('../mysql')


let mentorPostData = (data) => {
    return knex('mentor_info').insert(data)
}

let mentorEditData = (data) => {
    return knex('mentor_info').update({
      mentor_name : data.mentor_name,
      mentee_name : data.mentee_name ,
      mentoring_duration : data.mentoring_duration ,
      improve_upon : data.improve_upon ,
      english_feedback : data.english_feedback
    })
}

let menteeSearch = (mentee_name)=>{
    return knex('mentee_info').select('*').havingIn('mentee',mentee_name)
}

let getMenteeData = (key) => {
    return knex('mentee_info').select("*").where("mentor" , key)
}

let editMentee = (update_data , mentee_name) => {
    return knex('mentee_info').update(update_data).where('mentee', mentee_name )
}



module.exports = { mentorPostData , mentorEditData, menteeSearch ,getMenteeData , editMentee}