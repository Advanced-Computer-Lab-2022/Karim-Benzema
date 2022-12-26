const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema


const ITProbSchema = new Schema ({
    ReporterID:{
        type: mongoose.Types.ObjectId,
        ref:'itModel'
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
        type:String,
        req:false
    }


}, {timestamps: true})


const ITproblem = mongoose.model('itProbModel',ITProbSchema); //to use it in another file 
module.exports = ITproblem;
//guestSchema.find() //finds different documents int the collection