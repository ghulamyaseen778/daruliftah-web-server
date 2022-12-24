const mongoose = require('mongoose')
const CategorySchema =mongoose.Schema({
    CategoryName:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('Category', CategorySchema)