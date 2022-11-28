const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const subtitleSchema = new Schema ({
    number: {
        type: Number,
        required: true 
    },
    title: {
        type: String,
        required: true 
    },
    totalHours: {
        type: String,
        required: true 
    },
    video: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false  
    },
    exercise: {
        type: String,
        required: false  
    },
    solution: {
        type: String,
        required: false  
    }
}, {timestamps: true})


const subtitle = mongoose.model('subtitleModel',subtitleSchema); //to use it in another file 
module.exports = subtitle;
//guestSchema.find() //finds different documents int the collection
