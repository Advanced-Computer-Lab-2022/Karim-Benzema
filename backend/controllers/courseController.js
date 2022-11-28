const { json, response } = require('express')
const course = require('../models/coursesModel')
const mongoose = require('mongoose')
//create new course 
const createcourse = async (req,res) => {
    //add course to DB 
    const{title,subtitle,totalHours,price,rating,subject,instructor,exercises,discount,shortSummary,period} = req.body
    try{
        const data= await course.create({title,subtitle,totalHours,price,rating,subject,instructor,exercises,discount,shortSummary,period}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
const searchSubjectOrTitle = async (req,res) => {

    const user  = req.query.search
    var rola=new RegExp(user,"i")
    console.log(user)
  //{subject: user},{title: user},{instructor:user}
   const data = await course.find( { $or: [ {instructor:user}, {title: user},{subject: user} ] } )

  console.log(data);
  
   // const data = await courses.find({Instructor:"aly"})
   if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}

const getCourses = async (req,res) => {
    try{
        const courses = await course.find({})
        res.status(200).json(courses)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//filter courses by price
const getcoursebyprice = async (req,res) => {
    // const { price } = req.query
    // const search = req.params.price
    // const data = await course.find({price: req.query.price})
    // res.status(200).json(data)
    var minimumPrice = req.params.min //params query
    var maximumPrice = req.params.max
    const courses = await course.find({})
    var newcourses = []
    courses.forEach(item => {
    if (item.price >= minimumPrice && item.price <= maximumPrice) {
        newcourses.push(item)
} })
    res.status(200).json(newcourses)
}
//search
const searchawy = async (req,res) => {
    const { input } = req.query
    const data = await course.find({$or:[{title:{$regex:input.title}},{subject:{$regex:input.subject}},{Instructor:{$regex:input.Instructor}}]})

    if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}
//filter courses by subject and rating 
const getcoursebysubjectRating = async (req,res) => {
    // const { subject , rating } = req.query
    const data1 = await course.find({$and: [{subject:req.query.subject},{rating: req.query.rating}]})

    res.status(200).json(data1)
    console.log(data1)
}
//filter courses by subject or rating 
const getcoursebysubjectorRating = async (req,res) => {
    // const { subject , rating } = req.query
    const data1 = await course.find({$or: [{subject:req.query.subject},{rating: req.query.rating}]})

    res.status(200).json(data1)
    
}
module.exports = {
    createcourse,
    getCourses,
    searchSubjectOrTitle,
    getcoursebyprice,
    searchawy,
    getcoursebysubjectRating,
    getcoursebysubjectorRating
}