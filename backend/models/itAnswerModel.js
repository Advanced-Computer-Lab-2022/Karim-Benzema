const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema
const question = require('./questionModel')

const itAnswerSchema = new Schema ({
    ques:{
        type:mongoose.Types.ObjectId,
            ref:'questionModel'
        
    },

    set:{
type:String
    }
    
}, {timestamps: true})


const itAnswer = mongoose.model('itAnswerModel',itAnswerSchema); //to use it in another file 
module.exports = itAnswer;
//guestSchema.find() //finds different documents int the collection