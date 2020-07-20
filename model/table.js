const knex = require('./mysql')


knex.schema.hasTable('registration').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('registration', (table) => {
            table.increments('id')
            table.string('firstname')
            table.string('lastname')
            table.string('email').unique()
            table.string('password')
        }).then(() => console.log("table created"))
            .catch((err) => { console.log(err); throw err })
    }
    else {
        console.log("table  resgistration created")
    }
}).catch((err) => {
    throw err
})


knex.schema.hasTable('mentee_info').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('mentee_info' , (table) => {
            table.increments('mentee_id')
            table.string('mentor')
            table.string('mentee')
            table.integer('monthsInNg')
            table.string('english_mentor')
            table.string('from_place')
            table.string('completed_till_which_course')
            table.string('mentor_feedback')
            table.string('study_schedule')
            table.integer('study_hours_daily')
        }).then(() => {
            console.log("table created")
        }).catch((err) => {console.log(err) ;
        throw err})
    }
    else{
        console.log("table mentee_info created")
    }
})

knex.schema.hasTable('mentor_info').then(function(exists) {
    if (!exists) {
        knex.schema.createTable('mentor_info' , (table) => {
            table.increments('mentor_id')
            table.string('mentor_name')
            table.string('mentee_name')
            table.string('mentoring_duration')
            table.string('improve_upon')
            table.string('english_feedback')
        }).then(() => {
            console.log("table created")
        }).catch((err) => {console.log(err) ;
        throw err})
    }
    else{
        console.log("table mentor_Info created")
    }
})