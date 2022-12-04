const { json } = require('express')
const it = require('../models/itModel')
const courses = require('../models/coursesModel')
const mongoose = require('mongoose')
const instructor = require('../models/instructorModel')
const exam = require('../models/examModel')
const question =require('../models/questionModel')
const que =require('../models/questionModel')

const ItAnswers = require('../models/itAnswerModel')
//add country
const solve = async (req,res) => {
    const {set,question}=req.body
  const name= question.name
  let dataa=[];
   const ques= await que.findOne({name:name}).select('_id')
   let dataaa= await ItAnswers.findOne({ques:ques})
    console.log(dataaa)
    if(dataaa==null ){
    dataa= await ItAnswers.create({ques,set})
   }
   else{
    dataa= await ItAnswers.findOneAndUpdate({ques:ques },
        {set:set})
   }
   // console.log(req.params)
   //const dataa =  await instructor.find({ username:username }).select('_id')
   //console.log(dataa)
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await exam.findOneAndUpdate({examName:"exam1" },
    {$push:{ answers:[(set)]}})


 if(!data){
    return res.status(404).json({error: "Not found"})//redundant prob
}
  res.status(200).json(dataa)
}
const correcting = async (req,res) => {
    //const {set}=req.body
   // console.log(req.params)
   //const dataa =  await instructor.find({ username:username }).select('_id')
   //console.log(dataa)
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const array =[];

const corrects=[]
let wrongAnswers=0;
let grade=0;
let gradeComment=""
const wrong=[]
    const data = await exam.findOne({examName:"exam1" }).select('answers')
 const allanswers= await ItAnswers.find({})
 console.log(allanswers)
    const examid = await exam.findOne({examName:"exam1" }).select('_id')
    const questions = array.push(await exam.findOne({examName:"exam1" }).select('questions'))
   //console.log(questions.length)
    const dataa = await question.find({examid:examid }).select('questionAnswer')
    
console.log(data)
   for(i=0;i<dataa.length;i++){
    if(dataa[i].questionAnswer!=data.answers[i]){
    console.log(dataa[i])
    console.log(data.answers[i])
    console.log("wrong")
    let questionnumber =i+1
    wrongAnswers++;
    let string = "question"+questionnumber +"wrong"+'.     '+"correct Answer:"+dataa[i].questionAnswer;
    wrong.push(string)

    }
   }
   grade=(((dataa.length)-wrongAnswers)/(dataa.length))*100
   gradeComment ="Your Grade is" +".       "+grade
   wrong.push(gradeComment)

   console.log(wrong)

 if(!data){
    return res.status(404).json({error: "Not found"})//redundant prob
}
  res.status(200).json(wrong)
}


const correctingg = async (req,res) => {
    //const {set}=req.body
   // console.log(req.params)
   //const dataa =  await instructor.find({ username:username }).select('_id')
   //console.log(dataa)
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const array =[];

const corrects=[]
let wrongAnswers=0;
let grade=0;
let gradeComment=""
const wrong=[]
    const data = await exam.findOne({examName:"exam1" }).select('answers')
 const allanswers= await ItAnswers.find({})

    const examid = await exam.findOne({examName:"exam1" }).select('_id')
    const questions = array.push(await exam.findOne({examName:"exam1" }).select('questions'))
   //console.log(questions.length)
    const dataa = await question.find({examid:examid }).select('questionAnswer')
   
   for(i=0;i<dataa.length;i++){
 let is=allanswers[i].ques
 if(is!=null){
 console.log(is)
let id=allanswers[i].ques._id
    let findquestion= await question.findOne({_id:id}).select('questionAnswer')
    let questionName= await question.findOne({_id:id}).select('name')
    console.log(findquestion)
    if(findquestion.questionAnswer!=allanswers[i].set){
   

    console.log("wrong")
    let questionnumber =i+1
    wrongAnswers++;
    let string = "question"+".            "+questionName.name +"wrong"+'.     '+"correct Answer:"+findquestion.questionAnswer;
    wrong.push(string)
    }
    }
   }
   grade=(((dataa.length)-wrongAnswers)/(dataa.length))*100
   gradeComment ="Your Grade is" +".       "+grade
   wrong.push(gradeComment)

   //console.log(wrong)

 if(!data){
    return res.status(404).json({error: "Not found"})//redundant prob
}
  res.status(200).json(wrong)
}


const viewExam = async (req,res) => {
    //const {username}=req.params
   // console.log(req.params)
   //const dataa =  await instructor.find({ username:username }).select('_id')
   //console.log(dataa)
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await exam.find({examName:"exam1" })
    const dataaaa = await exam.find({examName:"exam1" }).select('questions')

 console.log(dataaaa)
 if(!data){
    return res.status(404).json({error: "Not found"})//redundant prob
}
  res.status(200).json(data)
}
const itAnswer = async (req,res) => {
    const {examName}  = req.params
    // const search = req.params.price
    console.log(examName)
    const data = await exam.find({examName: examName})

    res.status(200).json(data)
} 

//add country 
 const updateCountry = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such individual trainee" })
    }

    const data = await it.findOneAndUpdate({_id : id},{
        country : "Egypt",
        ...req.body
    })
    if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
    res.status(200).json(data)
    
}



const changePassword = async (req,res) => {
   // const { id } = req.params
    const{password}=req.body
    if(!mongoose.Types.ObjectId.isValid('63551aefcd009a2612b7c749')){
        return res.status(404).json({ error: "No such individual trainee" })
    }
 
    const data = await it.findOneAndUpdate({_id : '63551aefcd009a2612b7c749'},{
        password : password
    },{new:true})
    if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
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


    const rateInstructor = async (req,res) =>{
            const { id,rating} = req.body
            const course = await courses.findOne({_id:id})
            const name = course.instructor
            const inst = await instructor.findOne({name:name})
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
            const data = await instructor.findOneAndUpdate({name : name},{
                ratings:newratings,
                rating : avg
            },{new:true})
                if(!data){
                    return res.status(404).json({error:"not found"})
                }
                res.status(200).json(data)}
        

        //get all course with title, total hrs ,rating
const getcourse = async (req,res) => {
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await courses.find({}).select('title totalHours price rating')
    res.status(200).json(data)
}
//yasm
const getCoursebyitid = async (req,res) => {
    try{
        const array = (await it.findById({_id:'63551aefcd009a2612b7c749'}).select('courses')).courses
        //console.log(ITperson)
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
//get price of each course
const getpriceof1course = async (req,res) => {
    const { title } = req.params
    const data = await courses.find({title:title}).select('title price')
    res.status(200).json(data)
}

//filter courses by price
const getcoursebyprice = async (req,res) => {
    const { price } = req.params
    // const search = req.params.price
    const data = await courses.find({price: price})//desc order

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
const getit = async (req,res) => {
    const {id} = req.params
   
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such it" })
    }

    const data= await it.findById(id)

    if(!data){
        return res.status(404).json({error: "Not found"})
    }

    res.status(200).json(data)
}
const createIT = async (req,res) => {
    const {name,username,password,country,courses}=req.body
    const newCT = await it.create({name,username,password,country,courses})
    res.status(200).json(newCT)
}
const register = async (req,res) =>{
    const {username,id} = req.body
    const test = await courses.find({_id:id}).select('_id')
    const data = await it.findOneAndUpdate({username:username},
        {$push:{courses:test}},
        {new:true}
        )
    res.status(200).json(data)
 }

const reviewInstructor = async (req,res) => {
    const {id,review} = req.body
    const course = await courses.findOne({_id:id})
    const name = course.instructor
    const inst = await instructor.findOne({name:name})
    const list = await inst.reviews
    console.log(review)
    let newReviews=[String]
    newReviews=list 
    console.log(newReviews) 
    newReviews.push(review) 
    console.log(newReviews)
    const data = await instructor.findOneAndUpdate({_id : id},{
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
module.exports = {
    updateCountry,
    getit,
    getcourse,
    getcoursebyprice,
    // getcoursebysubject,
    // getcoursebyrating,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy,
    rateCourse,
    rateInstructor,
    changePassword,
    itAnswer,
    viewExam,
    solve,
    correcting,
    correctingg,
    createIT,
    reviewInstructor,
    reviewCourse,
    register,
    getCoursebyitid
}