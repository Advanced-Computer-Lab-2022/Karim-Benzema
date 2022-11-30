const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema
const question = require('../models/questionModel')

const examSchema = new Schema ({
    course:{
        type: mongoose.Types.ObjectId,
        ref:'courseModel'
    },
    subtitle:{
        type: mongoose.Types.ObjectId,
        ref:'subtitleModel'
        
    },
    examName: {
        type: String,
        required: true 
    },
questions: {
            type: [question.questionSchema]
        
          
          }
    
}, {timestamps: true})


const exam = mongoose.model('examModel',examSchema); //to use it in another file 
module.exports = exam;
//guestSchema.find() //finds different documents int the collection