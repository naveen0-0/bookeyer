const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
    username : {
        type:String
    },
    email:{
        type:String
    },
    password:{
        type : String
    },
    verified:{
        type:Boolean,
        default:false
    }
})

const User = model('user',UserSchema);
module.exports = User;