//const { json } = require('express')
//const ct = require('../models/ctModel')
const courses = require('../models/coursesModel')
const mongoose = require('mongoose')
const count=require('iso-country-currency');

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
    // const data = await instructor.findOneAndUpdate({_id : id},{
    //     country : country,
    // },{new:true})
    // if(!data){
    //     return res.status(404).json({error: "Not found"})
    // }
    res.status(200).json(data)
    
}

//get all courses
const getcourse = async (req,res) => {
    const data = await courses.find({}).select('title totalHours rating')
    res.status(200).json(data)
}

const getcoursebyid = async (req,res) => {
    const id = req.body
    const data = await courses.findOne({_id:id}).select('title totalHours rating')
    res.status(200).json(data)
}


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

const search = async (req,res) => {
    const { input } = req.params
    const data = await courses.find({$or:[{title:{$regex:input}},{subject:{$regex:input}},{Instructor:{$regex:input}}]})

    if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}
//get price of each course
const getpriceof1course = async (req,res) => {
    const { title } = req.params
    const data = await courses.find({title:title}).select('title price')
    res.status(200).json(data)
}


module.exports = {
    updateCountry,
    getcourse,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    search,
    getpriceof1course,
    getcoursebyid
    
}