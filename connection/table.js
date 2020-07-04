const knex = require('./mysql')


knex.schema.hasTable('resgistration').then(function (exists) {
    if (!exists) {
        knex.schema.createTable('resgistration', (table) => {
            table.increments('id')
            table.string('firstname')
            table.string('lastname')
            table.string('email')
            table.string('password')
        }).then(() => console.log("table created"))
            .catch((err) => { console.log(err); throw err })
    }
    else {
        console.log("table created")
    }
})