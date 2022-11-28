
const instructor = require('../models/instructorModel')
const courses = require('../models/coursesModel')
const mongoose = require('mongoose')
const course = require('../models/coursesModel')
const { db } = require('../models/instructorModel')

//get a single admin 
 const getCourseTitle = async (req,res) => {
    //for future use
   // const {name} = req.params
   //fix name in the future 
     const data= await courses.find({instructor : "aly"}).select('title')
     if(!data){
         return res.status(404).json({error: "Course not found"})
     }
     res.status(200).json(data)
 }

//get a single admin 
const instCourses = async (req,res) => {
     const data= await courses.find({instructor : "aly"})
     if(!data){
         return res.status(404).json({error: "Course not found"})
     }
     res.status(200).json(data)
 }






 //get all instructors
const getinstructor = async (req,res) => {
    const data = await instructor.find({})
    res.status(200).json(data)
}

//filter by subject or price
const filterSubjectOrPrice = async (req,res) => {
    // const user = req.query.user
    // var rola=new RegExp(user,"i")
    const data = await courses.find({$and: [{$or: [{subject:req.query.subject},{price:req.query.price}]},{instructor:"aly"}]})

    res.status(200).json(data)
}

//search subject or title
const searchSubjectOrTitle = async (req,res) => {

    const user  = req.query.search
    var rola=new RegExp(user,"i")
   const data = await courses.find({$and: [{$or : [{subject: {$regex:rola}},{title: {$regex:rola}}]},{instructor:"aly"}]})
  // const data = await courses.find({Instructor:"aly"})
   if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}

 const createcourse = async (req,res) => {
    //add course to DB 
    const{title,subtitle,totalHours,price,rating,subject,instructor,exercises,discount,shortSummary} = req.body
    try{
        const data= await courses.create({title,subtitle,totalHours,price,rating,subject,instructor,exercises,discount,shortSummary}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
//add country 
const updateCountry = async (req,res) => {
    const { username,country} = req.body

    const data = await instructor.findOneAndUpdate({username : username},{
        country : country
    },{new:true})
    if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
    res.status(200).json(data)
    
}
const getcourse = async (req,res) => {
    //const {username}=req.params
   // console.log(req.params)
   //const dataa =  await instructor.find({ username:username }).select('_id')
   //console.log(dataa)
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await courses.find({instructor:"aly" })
 //console.log(data)
 if(!data){
    return res.status(404).json({error: "Not found"})//redundant prob
}

  res.status(200).json(data)

 
}
//get price of each course
const getpriceof1course = async (req,res) => {
    //const { title } = req.params
    const data = await course.find({}).select('title price')
    res.status(200).json(data)
}
//filter courses by price
const getcoursebyprice = async (req,res) => {
    const { price } = req.body
    // const search = req.params.price
    const data = await courses.find({price: price})//desc order

    res.status(200).json(data)
}
//filter courses by subject and rating 
const getcoursebysubjectRating = async (req,res) => {
    // const { subject , rating } = req.body
    const data1 = await courses.find({$and: [{subject:req.query.subject},{rating: req.query.rating}]})

    res.status(200).json(data1)
}
//filter courses by subject or rating 
const getcoursebysubjectorRating = async (req,res) => {
    // const { subject } = req.body
    // const { rating } = req.body
    const data1 = await courses.find({$or: [{subject:req.query.subject},{rating: req.query.rating}]})

    res.status(200).json(data1)
}
const searchawy = async (req,res) => {
    const { input } = req.query
    const data = await courses.find({$or:[{title:{$regex:input.title}},{subject:{$regex:input.subject}},{Instructor:{$regex:input.Instructort}}]})

    if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}
//define a discount 
const definediscount = async (req,res) => {
    //add instructor to DB 
    const{discount,period,id} = req.body 
    //change id to req.paramas for front end
    const data = await course.findOneAndUpdate({_id:id},
        {period : period,
        discount : discount}
    ,{new:true})
    if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
    res.status(200).json(data)
}

 //add route f instructors 
 //new 
module.exports = {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,
    searchSubjectOrTitle,
//yasm
    getinstructor,
    updateCountry,
    getcourse,
    getcoursebyprice,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy,
    instCourses,
    //yasm2
    definediscount


}