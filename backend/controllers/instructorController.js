const { json, application } = require('express')
//const admin = require('../models/adminModel')
const instructor = require('../models/instructorModel')
const courses = require('../models/coursesModel')
//const ct = require('../models/ctModel')
const mongoose = require('mongoose')
const course = require('../models/coursesModel')

//get a single admin 
 const getCourseTitle = async (req,res) => {
    //for future use
    const {name} = req.params
   //fix name in the future 
     const data= await courses.find({Instructor : name}).select('title')
     if(!data){
         return res.status(404).json({error: "Course not found"})
     }
     res.status(200).json(data)
 }

//filter by subject or price
const filterSubjectOrPrice = async (req,res) => {
    const { name } = req.params
    const { subject } = req.params
    const { price } = req.params
    const data = await courses.find({$and: [{$or: [{subject: subject},{price: price}]},{Instructor:"aly"}]})//desc order

    res.status(200).json(data)
}

//search subject or title
const searchSubjectOrTitle = async (req,res) => {

    const { input } = req.params
    const data = await courses.find({$and: [{$or : [{subject: {$regex:input}},{title: {$regex:input}}]},{Instructor:"aly"}]})
    if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}

 const createcourse = async (req,res) => {
    //add course to DB 
    const{title,subtitle,totalHours,price,rating,subject,Instructor,shortSummary} = req.body
    try{
        const data= await course.create({title,subtitle,totalHours,price,rating,subject,Instructor,shortSummary}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
 //add route f instructors 
 //new 
module.exports = {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,
    searchSubjectOrTitle
}