var knex = require('./mysql')



let postSignUpdata = (data) => {
   return knex('registration').insert(data)
}

let checkLoginEmail= (email) => {
   return knex.select('*').from('registration').havingIn('email', email)
}



module.exports = { postSignUpdata , checkLoginEmail} 