const mongoose = require('mongoose');
const EmailSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:Boolean,
        default:true,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Email', EmailSchema);