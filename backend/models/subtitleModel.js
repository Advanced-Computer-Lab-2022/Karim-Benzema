const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const subtitleSchema = new Schema ({
    course: {
        type: mongoose.Types.ObjectId,
        ref:'coursesModel',
        required: true 
    },
    number: {
        type: Number,
        required: true 
    },
    title: {
        type: String,
        required: true 
    },
    totalHoursSUB: {
        type: String,
        required: false 
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
        type: mongoose.Types.ObjectId,
        ref:'examModel',
        required: false  
    }
}, {timestamps: true})


const subtitles = mongoose.model('subtitleModel',subtitleSchema); 
module.exports = subtitles;
