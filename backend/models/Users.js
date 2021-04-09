//Creating the schemas for the db

const mongoose =  require('mongoose')

const UsersSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique :  true
    },
    password : {
        type: String,
        required :  true
    }
})

//Create this schema if it doesn't exist

const Users = mongoose.model( "Users", UsersSchema)
module.exports = Users