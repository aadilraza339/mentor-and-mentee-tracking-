var knex = require('../mysql')


let mentorPostData = (data) => {
    return knex('mentor_info').insert(data)
}

let mentorEditData = (data) => {
    return knex('mentor_info').update(data)
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