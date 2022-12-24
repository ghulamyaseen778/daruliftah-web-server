const mongoose = require('mongoose')
const AdminSchema = mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
})

module.exports = mongoose.model('Admin', AdminSchema)