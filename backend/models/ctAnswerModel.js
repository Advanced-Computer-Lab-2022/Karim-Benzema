const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema
const question = require('./questionModel')

const ctAnswerSchema = new Schema ({
    ques:{
        type:mongoose.Types.ObjectId,
            ref:'questionModel'
        
    },

    set:{
type:String
    }
    
}, {timestamps: true})


const ctAnswer = mongoose.model('ctAnswerModel',ctAnswerSchema); //to use it in another file 
module.exports = ctAnswer;
//guestSchema.find() //finds different documents int the collection