const { json } = require('express')
const ct = require('../models/ctModel')
const courses = require('../models/coursesModel')
const mongoose = require('mongoose')
const instructor = require('../models/instructorModel')
const it = require('../models/itModel')

//add country 
 const updateCountry = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such individual trainee" })
    }

    const data = await ct.findOneAndUpdate({_id : id},{
        country : "Egypt",
        ...req.body
    })
    if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
    res.status(200).json(data)
    
}
//title,totalHours,rating  .sort({createdAt: -1})
//.project({ title:1,totalHours:1,rating :1}) ;

//get all course 
const getcourse = async (req,res) => {
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await courses.find({}).select('title totalHours rating')
    res.status(200).json(data)
}

const getAllct = async (req,res) => {
    const data = await ct.find({})
    res.status(200).json(data)
}

// //filter courses by subject 
// const getcoursebysubject = async (req,res) => {
//     const { subject } = req.params
//     const data = await courses.find({subject: subject})//desc order

//     res.status(200).json(data)
// }
// //filter courses by rating  
// const getcoursebyrating = async (req,res) => {
//     const { rating } = req.params
//     const data = await courses.find({rating: rating})//desc order

//     res.status(200).json(data)
// }
//filter courses by subject and rating 

const getcoursebysubjectRating = async (req,res) => {
    const { subject } = req.params
    const { rating } = req.params
    const data1 = await courses.find({$and: [{subject:subject},{rating: rating}]})

    res.status(200).json(data1)
}
//filter courses by subject or rating 
const getcoursebysubjectorRating = async (req,res) => {
    const { subject } = req.params
    const { rating } = req.params
    const data1 = await courses.find({$or: [{subject:subject},{rating: rating}]})

    res.status(200).json(data1)
}
const searchawy = async (req,res) => {
    const { input } = req.params
    const data = await courses.find({$or:[{title:{$regex:input}},{subject:{$regex:input}},{Instructor:{$regex:input}}]})

    if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}

// trial
const getct = async (req,res) => {
    const {id} = req.params
   
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such ct" })
    }

    const data= await ct.findById(id)

    if(!data){
        return res.status(404).json({error: "Not found"})
    }

    res.status(200).json(data)
}
const rateCourse = async (req,res) =>{
    const { id,rating} = req.body
    const course = await courses.findOne({_id:id})
    const list = await course.ratings
    console.log(list)
    let newratings=[Number]
    newratings=list 
    console.log(newratings) 
    newratings.push(rating) 
    console.log(newratings)
    var sum = 0
    for(var i = 0;i < newratings.length;i++){
 sum =sum + newratings[i]
    }
    const avg = sum/newratings.length
    const data = await courses.findOneAndUpdate({_id : id},{
        ratings:newratings,
        rating : avg
    },{new:true})
        if(!data){
            return res.status(404).json({error:"not found"})
        }
        res.status(200).json(data)}



        const changePassword = async (req,res) => {
            const { id } = req.params
            const{password}=req.body
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({ error: "No such individual trainee" })
            }
        
            const data = await ct.findOneAndUpdate({_id : id},{
                password : password
            },{new:true})
            if(!data){
                return res.status(404).json({error: "Not found"})//redundant prob
            }
            res.status(200).json(data)
            
        }


const rateInstructor = async (req,res) =>{
    const { id,rating} = req.body
    const inst = await instructor.findOne({_id:id})
    const list = await inst.ratings
    console.log(list)
    let newratings=[Number]
    newratings=list 
    console.log(newratings) 
    newratings.push(rating) 
    console.log(newratings)
    var sum = 0
    for(var i = 0;i < newratings.length;i++){
 sum =sum + newratings[i]
    }
    const avg = sum/newratings.length
    const data = await instructor.findOneAndUpdate({_id : id},{
        ratings:newratings,
        rating : avg
    },{new:true})
        if(!data){
            return res.status(404).json({error:"not found"})
        }
        res.status(200).json(data)}

module.exports = {
    updateCountry,
    getct,
    getcourse,
    // getcoursebysubject,
    // getcoursebyrating,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    searchawy,
    rateCourse,
    rateInstructor,
    changePassword
    
}