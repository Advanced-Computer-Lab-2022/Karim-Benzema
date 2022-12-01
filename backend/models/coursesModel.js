const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const coursesSchema = new Schema ({
    title: {
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
        type: Number,
        required: false
    },
    ratings:{
    type : [Number],
    required:false
    },
    subject: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
       // type: mongoose.Types.ObjectId,
        //ref:'instructorModel',
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
    period: {
        type: Date,
        required: false
    },
    preview: {
        type: String,
        required: false
    },
    reviews: {
        type: [String],
        required: false
    }
}, {timestamps: true})


const courses = mongoose.model('coursesModel',coursesSchema); //to use it in another file 
module.exports = courses;
//guestSchema.find() //finds different documents int the collection
