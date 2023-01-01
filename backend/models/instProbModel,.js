const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema


const INSTProbSchema = new Schema ({
    ReporterID:{
        type: mongoose.Types.ObjectId,
        ref:'instModel'
    },
    type:{
        type:String,
        req:true
    },
    report:{
        type:String,
        req:true
    },
    resolved:{
        type: String,
        default: "unseen"
    },
    followup:
    {
        type:String
    }

    
}, {timestamps: true})


const INSTproblem = mongoose.model('instProbModel',INSTProbSchema); //to use it in another file 
module.exports = INSTproblem;
//guestSchema.find() //finds different documents int the collection