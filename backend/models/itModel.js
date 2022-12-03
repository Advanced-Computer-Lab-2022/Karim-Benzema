const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const itSchema = new Schema ({
    name: {
        type: String,
        required: true 
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
        required: true  
    },
    courses: {
        type: [mongoose.Types.ObjectId],
        required: false
    }
}, {timestamps: true})


const it = mongoose.model('itModel',itSchema); //to use it in another file 
module.exports = it;
//guestSchema.find() //finds different documents int the collection
