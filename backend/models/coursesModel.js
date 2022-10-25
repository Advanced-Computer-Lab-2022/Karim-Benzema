const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const coursesSchema = new Schema ({
    title: {
        type: String,
        required: true 
    },
    subtitle: {
        type: String,
        required: false 
    },
    totalHours: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    Instructor: {
        type: String,
        required: false
    },
    Exercises: {
        type: String,
        required: false
    },
    discount: {
        type: Number,
        required: false
    },
    shortSummary: {
        type: String,
        required: false
    },

}, {timestamps: true})


const courses = mongoose.model('coursesModel',coursesSchema); //to use it in another file 
module.exports = courses;
//guestSchema.find() //finds different documents int the collection
