const mongoose = require('mongoose')
const ClausorSchema =mongoose.Schema({
   name:{
    type:String,
    trim:true,
    required:true
   },
   url:{
    type:String,
    trim:true,
    required:true
   },
   status:{
    type:Boolean,
    default:false
   }
})

module.exports = mongoose.model('clausorImg', ClausorSchema)