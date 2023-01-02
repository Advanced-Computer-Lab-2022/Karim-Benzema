
const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const reviewsSchema = new Schema ({
    instructorid:{
        type:mongoose.Types.ObjectId,
        ref:'instructorModel'
    },
    userid:{
        type:mongoose.Types.ObjectId,
        ref:'itModel',
        ref:"ctModel",
    },
    reviews: {
        type: String,
        required: true
    }
}, {timestamps: true})


const reviewss = mongoose.model('reviewModel',reviewsSchema); //to use it in another file 
module.exports = reviewss;