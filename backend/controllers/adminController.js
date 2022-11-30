const { json } = require('express')
const admin = require('../models/adminModel')
const instructor = require('../models/instructorModel')
const ct = require('../models/ctModel')
const mongoose = require('mongoose')

//create new admin 
const createAdmin = async (req,res) => {
    //add admin to DB 
    const{username,password} = req.body
    try{
        const data= await admin.create({username,password}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//create new instructor 
const createinstructor = async (req,res) => {
    //add instructor to DB 
    const{username,password} = req.body
    try{
        const data= await instructor.create({username,password}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
//create new corporate trainee 
const createct = async (req,res) => {
    //add corporate trainee to DB 
    const{username,password} = req.body
    try{
        const data= await ct.create({username,password}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//get all admins 
const getAdmins = async (req,res) => {
   const admins = await admin.find({}).sort({createdAt: -1}) //desc order

   res.status(200).json(admins)
}

//new 
module.exports = {
    createAdmin,
    createinstructor,
    createct,
    getAdmins
}


