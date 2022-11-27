const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}=mongoose.Schema;
const ctSchema = new Schema ({
    name: {
        type: String,
        required: false 
    },
    username: {
        type: String,
        required: true 
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: false  
    }
}, {timestamps: true})


const ct = mongoose.model('ctModel',ctSchema); //to use it in another file 
module.exports = ct;
//guestSchema.find() //finds different documents int the collection
