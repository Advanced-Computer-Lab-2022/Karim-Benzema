const { json } = require('express')
const {ct} = require('../models/ctModel')
const courses = require('../models/coursesModel')
const mongoose = require('mongoose')
const instructor = require('../models/instructorModel')
const it = require('../models/itModel')
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");
const count=require('iso-country-currency');
const CTproblem = require('../models/ctProbModel')
const ITproblem = require('../models/itProbModel')
const INSTproblem = require('../models/instProbModel,')
//add country 
const updateCountry = async (req,res) => {
    const { id } = req.params
    const {country} = req.body
    if (!country) {
        return res.status(400).json({ error: "Please enter a country" });
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such instructor" })
    }
    var currency = " "
    const countArray = count.getAllISOCodes()
    for(var i=0;i<countArray.length;i++){
        if(countArray[i].countryName.toString()==country){
            currency = countArray[i].currency.toString()
            break;
        }
    }
    const data = await ct.findOneAndUpdate({_id : id},{
        country : country,
    },{new:true})
    if(!data){
        return res.status(404).json({error: "Not found"})
    }
    res.status(200).json(data)
    
}
const createproblem = async (req,res) => {
    const{id}=req.params
    const{type,report} = req.body
    try{
        const data= await CTproblem.create({ReporterID:id,type:type,report:report}) 
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }   
}
//title,totalHours,rating  .sort({createdAt: -1})
//.project({ title:1,totalHours:1,rating :1}) ;

//get all course 
const getcourse = async (req,res) => {
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await courses.find({}).select('title totalHours rating reviews preview')
    res.status(200).json(data)
}

const getproblems = async (req,res) => {
    const data = await ITproblem.find({}).select('id Reporterid type report')
    res.status(200).json(data)
}

const getproblems1 = async (req,res) => {
     const data1 = await INSTproblem.find({}).select('id Reporterid type report')
    res.status(200).json(data1)
}

const getproblems2 = async (req,res) => {
     const data2 = await CTproblem.find({}).select('id Reporterid type Report')
    res.status(200).json(data2)
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
            console.log('in')
        const { id } = req.params
        const{password}=req.body 
        try{
        const passwordSchema = Joi.object({
            password: passwordComplexity().required().label("Password"),
        });
        const { error } = passwordSchema.validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });
        const salt = await bcrypt.genSalt(Number(10));
        const hashPassword = await bcrypt.hash(password, salt);
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ error: "No such instructor" })
        }
        const data = await ct.findOneAndUpdate({_id : id},{
            password : hashPassword
        },{new:true})
        if(!data){
            return res.status(404).json({error: "Not found"})
        }
        res.status(200).send({ message: "Password reset successfully" })
    }
    catch(error) {
        res.status(400).json({error: error.message})
    } 
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

  const reviewInstructor = async (req,res) => {
    const {id,review} = req.body
    const course = await courses.findOne({_id:id})
    const name = course.instructorName
    const inst = await instructor.findOne({name:name})
    const instid=inst._id
    const list = await inst.reviews
    console.log(review)
    let newReviews=[String]
    newReviews=list 
    console.log(newReviews) 
    newReviews.push(review) 
    console.log(newReviews)
    const data = await instructor.findOneAndUpdate({_id : instid},{ //instid
        reviews:newReviews
            },{new:true})
    if(!data){
       return res.status(404).json({error:"not found"})
            }
            res.status(200).json(data)
}

        const reviewCourse = async (req,res) => {
            const {id,review} = req.body
            const c = await courses.findOne({_id:id})
            const list = await c.reviews
            console.log(list)
            let newReviews=[String]
            newReviews=list 
            console.log(newReviews) 
            newReviews.push(review) 
            console.log(newReviews)
            const data = await courses.findOneAndUpdate({_id : id},{
                reviews:newReviews
                    },{new:true})
            if(!data){
                return res.status(404).json({error:"not found"})
                    }
            res.status(200).json(data)
        }

     const register = async (req,res) =>{
        const {username,id} = req.body
        const test = await courses.find({_id:id}).select('_id')
        const data = await ct.findOneAndUpdate({username:username},
            {$push:{courses:test}},
            {new:true}
            )
        res.status(200).json(data)
     }
     const getrequests = async (req,res) => {
        const{id}=req.params
        const Corp = await ct.findOne({_id:id})
        const request= Corp.requests
        let result = []
        for(var i =0;i<request.length;i++){
            result.push(await courses.find({_id:request[i]}).select('title'))
         }
        if(!result){
            return res.status(404).json({error:"not found"})
                }
        res.status(200).json(result)
    }
    const getCoursebyCtid = async (req,res) => {
        try{
            const {id}= req.params
            const array = (await ct.findById({_id:id}).select('courses')).courses
            console.log(array)
            let result = []
            for(var i =0;i<array.length;i++){
               result.push(await courses.find({_id:array[i]}))
            }
            res.status(200).json(result)
            console.log(result)
        }catch(error) {
            res.status(400).json({error: error.message})
        }
    }

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
    changePassword,
    getAllct,
    reviewInstructor,
    reviewCourse,
    register,
    getCoursebyCtid,
    createproblem,
    getproblems, //for it
    getproblems1,//for inst
    getproblems2,//for ct
    getrequests
}