const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    AuthorName: {
        type: String, 
        required:true
    },
    category:{
        type:String,
        required:true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    fatwaNo: {
        type: Number,
        required: true
    },
    KeyWord: {
        type: Array,
        default: ['fatawa']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const FatwaSchema = mongoose.model('Fatwa',Schema)
module.exports = FatwaSchema