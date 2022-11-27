const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const adminSchema = new Schema ({
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
    }
}, {timestamps: true})


const admin = mongoose.model('adminModel',adminSchema); //to use it in another file 
module.exports = admin;
//guestSchema.find() //finds different documents int the collection
