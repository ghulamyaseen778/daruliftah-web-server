const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    Title: {
        type: String, 
        required:true
    },
    AuthorName: {
        type: String, 
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Question: {
        type: String,
        required: true
    },
    Answer: {
        type: Array,
        required: true
    },
    Bold: {
        type: Array,
        required: true
    },
    FatwaNo: {
        type: String,
        required: true
    },
    KeyWord: {
        type: Array,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
})


const FatwaSchema = mongoose.model('Fatwa',Schema)
module.exports = FatwaSchema