const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema
const instructorSchema = new Schema ({
    name: {
        type: String,
        required: false 
    },
    username: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: false
    },
    miniBio: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false  
    },
    rating: {
        type: Number,
        required: true
    },
    ratings:{
    type : [Number],
    required:true
    }
}, {timestamps: true})


const instructor = mongoose.model('instructorModel',instructorSchema); //to use it in another file 
module.exports = instructor;
//guestSchema.find() //finds different documents int the collection
