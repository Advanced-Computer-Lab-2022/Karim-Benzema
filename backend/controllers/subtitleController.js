const { json } = require('express')
const subtitle = require('../models/subtitleModel')
const mongoose = require('mongoose')
const test = require ('../controllers/courseController')
const { courseId } = require('./instructorController')

const createSubtitle= async (req,res) => {
    const{totalHours} = req.body
    try{
        const count =4
       // while(number>0){
        const title = "Lecture "+count
        console.log(courseId)
        const data= await subtitle.create({course:courseId,number:count,title,totalHours}) //change
        res.status(200).json(data)
        //count++
      //  number--
       // }
       
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
    
}




module.exports = {
    createSubtitle
}