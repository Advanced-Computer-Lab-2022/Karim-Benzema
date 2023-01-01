const mongoose = require('mongoose') //import mongoose

const Schema = mongoose.Schema 
const {ObjectId}= mongoose.Schema


const CTProbSchema = new Schema ({
    ReporterID:{
        type: mongoose.Types.ObjectId,
        ref:'ctModel'
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


const CTproblem = mongoose.model('ctProbModel',CTProbSchema); //to use it in another file 
module.exports = CTproblem;
//guestSchema.find() //finds different documents int the collection