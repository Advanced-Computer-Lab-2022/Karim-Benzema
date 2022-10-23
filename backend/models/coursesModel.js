const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const coursesSchema = new Schema ({
    title: {
        type: String,
        required: true 
    },
    subtitle: {
        type: String,
        required: true 
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
        required: true
    },
    Exercises: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    shortSummary: {
        type: String,
        required: true
    },

}, {timestamps: true})


const courses = mongoose.model('coursesModel',coursesSchema); //to use it in another file 
module.exports = courses;
//guestSchema.find() //finds different documents int the collection
