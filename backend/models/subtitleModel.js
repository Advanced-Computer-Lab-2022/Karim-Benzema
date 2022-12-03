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
        type: mongoose.Types.ObjectId,
        ref:'examModel',
        required: false  
    },
    solution: {
        type: String,
        required: false  
    }
}, {timestamps: true})


const subtitle = mongoose.model('subtitleModel',subtitleSchema); 
module.exports = subtitle;
