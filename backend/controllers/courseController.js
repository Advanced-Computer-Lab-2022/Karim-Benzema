const { json } = require('express')
const course = require('../models/coursesModel')
const mongoose = require('mongoose')
//create new course 
const createcourse = async (req,res) => {
    //add course to DB 
    const{title,totalHours,price,rating} = req.body
    try{
        const data= await course.create({title,totalHours,price,rating}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = {
    createcourse
}