const { json } = require('express')
const admin = require('../models/adminModel')
const mongoose = require('mongoose')

//get all admins 
const getAdmins = async (req,res) => {
    const admins = await admin.find({}).sort({createdAt: -1}) //desc order

    res.status(200).json(admins)
}

//get a single admin 
const getAdmin = async (req,res) => {
    const {id} = req.params
   
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such Admin" })
    }

    const data= await admin.findById(id)

    if(!data){
        return res.status(404).json({error: "Not found"})
    }

    res.status(200).json(data)
}

//create new admin 
const createAdmin = async (req,res) => {
    //add admin to DB 
    const{name,username,password} = req.body
    try{
        const administrator= await admin.create({name,username,password}) //change
        res.status(200).json(administrator)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//delete an admin 
const deleteAdmin = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such Admin" })
    }

    const data = await admin.findOneAndDelete({_id : id})

    if(!data){
        return res.status(404).json({error: "Not found"})
    }

    res.status(200).json(data)

}

//update an admin
 const updateAdmin = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such Admin" })
    }

    const data = await admin.findOneAndUpdate({_id : id},{
        //name : "yasmine"
        ...req.body
    })
    if(!data){
        return res.status(404).json({error: "Not found"})
    }
    res.status(200).json(data)
    

}

//new 
module.exports = {
    createAdmin,
    getAdmin,
    getAdmins,
    deleteAdmin,
    updateAdmin
}

