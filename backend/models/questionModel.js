const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 

const questionSchema = new Schema ({
    name:{
        type: String,
        required: true 
    },
 
    questionSet:{
        type: Array
        
    },
    questionAnswer: {
        type: String,
        required: false 
    },
   
}, {timestamps: true})


const question = mongoose.model('questionModel',questionSchema); //to use it in another file 
module.exports = question;
//guestSchema.find() //finds different documents int the collection