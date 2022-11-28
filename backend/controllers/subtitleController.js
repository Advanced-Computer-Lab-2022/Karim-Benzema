const { json } = require('express')
const subtitle = require('../models/subtitleModel')
const mongoose = require('mongoose')
//create new course 



const createSubtitle = async (req,res) => {
    const{number,totalHours} = req.body
    try{
        const count =1
       // while(number>0){
        const title = "Lecture"+count+""
        const data= await subtitle.create({number:count,title,totalHours}) //change
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