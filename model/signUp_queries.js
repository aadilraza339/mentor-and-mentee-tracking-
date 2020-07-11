var knex = require('../connection/mysql')



let postSignUpdata = (data) => {
   return knex('resgistration').insert(data)
}

let checkLoginEmail= (email) => {
   return knex.select('*').from('resgistration').havingIn('email', email)
}



module.exports = { postSignUpdata , checkLoginEmail} 