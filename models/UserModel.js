const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    url : String ,
    name : String ,
    phoneno : String ,
    email : {
        type : String , 
    } ,
    password : String ,
    role : {
        default : 'user' ,
        type : String
    } ,
    createAt : {
        default : Date.now() ,
        type : Number
    }
})


const userModel = mongoose.model('users' , UserSchema)

module.exports = userModel