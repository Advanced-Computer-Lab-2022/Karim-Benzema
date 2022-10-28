const { json } = require('express')
const course = require('../models/coursesModel')
const mongoose = require('mongoose')
//create new course 
const createcourse = async (req,res) => {
    //add course to DB 
    const{title,totalHours,price,rating,subject} = req.body
    try{
        const data= await course.create({title,totalHours,price,rating,subject}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

const getCourses = async (req,res) => {
    try{
        const courses = await course.find({})
        res.status(200).json(courses)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    createcourse,
    getCourses
}