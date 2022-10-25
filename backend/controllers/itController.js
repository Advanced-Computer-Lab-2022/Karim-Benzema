const { json } = require('express')
const it = require('../models/itModel')
const courses = require('../models/coursesModel')
const mongoose = require('mongoose')

//add country 
 const updateCountry = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such individual trainee" })
    }

    const data = await it.findOneAndUpdate({_id : id},{
        country : "Egypt",
        ...req.body
    })
    if(!data){
        return res.status(404).json({error: "Not found"})
    }
    res.status(200).json(data)
    
}
//title,totalHours,rating  .sort({createdAt: -1})
//.project({ title:1,totalHours:1,rating :1}) ;
//get all course 
const getcourse = async (req,res) => {
    const data = await courses.find({})//desc order

    res.status(200).json(data)
}

// trial
const getit = async (req,res) => {
    const {id} = req.params
   
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such it" })
    }

    const data= await it.findById(id)

    if(!data){
        return res.status(404).json({error: "Not found"})
    }

    res.status(200).json(data)
}

module.exports = {
    updateCountry,
    getit,
    getcourse
}