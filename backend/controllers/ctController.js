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
const subtitle =require('../models/subtitleModel')
const exam = require('../models/examModel')
const CtAnswers = require('../models/ctAnswerModel')
const que =require('../models/questionModel')
const question =require('../models/questionModel')

//add country 
const updateCountry = async (req,res) => {
    console.log("in")
    const {id}  = req.params
    console.log(id)
    const {country} = req.body
    console.log(country)
    if (!country) {
        return res.status(400).json({ error: "Please enter a country" });
    }
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such instructor" })
    }
    const data = await ct.findOneAndUpdate({_id : id},{
        country : country,
    },{new:true})
    if(!data){
        return res.status(404).json({error: "Not found"})
    }
    res.status(200).json(data)
    
}
const viewExam = async (req,res) => {

    const id = req.params.id
  
    const data = await subtitle.findOne({_id:id })
    console.log(data)
    const dataaaa = await exam.findOne({subtitle:data._id }).select('questions')
console.log(dataaaa)
 if(!data){
    return res.status(404).json({error: "Not found"})//redundant prob
}
  res.status(200).json(dataaaa)
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
            const{id}=req.params
            const  ctid  = req.params.ctid;
            const Corp = await ct.findOne({_id:ctid}) 
            const RegCourses = Corp.courses
            if(!RegCourses.includes(id)){
                const data = await ct.findOneAndUpdate({_id:ctid},
                    {$push:{requests:id}},
                    {new:true})
                    if(!data){
                        return res.status(404).json({error:"not found"})
                            }
                res.status(200).json(data)}
                else{
                    return res.status(404).json({error:"Course Already Registered"})
                }
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

    const coloringWrongs = async (req,res) => {

        const array =[];
    //const {id} = req.params
    const corrects=[]
    const correctAnswer=[]
    let wrongAnswers=0;
    let grade=0;
    let gradeComment=""
    const wrong=[]
        const data = await exam.findOne({examName:"exam1" }).select('answers')
     const allanswers= await CtAnswers.find({})
    
        const examid = await exam.findOne({examName:"exam1" }).select('_id')
        const questions = array.push(await exam.findOne({examName:"exam1" }).select('questions'))
       //console.log(questions.length)
        const dataa = await question.find({examid:examid }).select('questionAnswer')
       
       for(i=0;i<dataa.length;i++){
     let is=allanswers[i].ques
     if(is!=null){
    
    let id=allanswers[i].ques._id
        let findquestion= await question.findOne({_id:id}).select('questionAnswer')
        let questionName= await question.findOne({_id:id}).select('name')
        
        if(allanswers[i]!=null){
        if(findquestion.questionAnswer!=allanswers[i].set){
       
    
    
        let questionnumber =i+1
        wrongAnswers++;
    
       // wrong.push(allanswers[i].set)
        console.log(allanswers[i].set)
        correctAnswer.push(allanswers[i].set);
        }
        }
    }
       }
      grade=(((dataa.length)-wrongAnswers)/(dataa.length))*100
       gradeComment ="Your Grade is" +".       "+grade
       wrong.push(correctAnswer)
    console.log(correctAnswer)
       //console.log(wrong)
    
     if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
      res.status(200).json(correctAnswer)
    }


    const coloringAnswers = async (req,res) => {

        const array =[];
    //const {id} = req.params
    const corrects=[]
    const correctAnswer=[]
    let wrongAnswers=0;
    let grade=0;
    let gradeComment=""
    const wrong=[]
        const data = await exam.findOne({examName:"exam1" }).select('answers')
     const allanswers= await CtAnswers.find({})
    
        const examid = await exam.findOne({examName:"exam1" }).select('_id')
        const questions = array.push(await exam.findOne({examName:"exam1" }).select('questions'))
       //console.log(questions.length)
        const dataa = await question.find({examid:examid }).select('questionAnswer')
       
       for(i=0;i<dataa.length;i++){
        if(allanswers[i]!=null ||allanswers[i]!=undefined ){
     let is=allanswers[i].ques
     if(is!=null){
    
    let id=allanswers[i].ques._id
        let findquestion= await question.findOne({_id:id}).select('questionAnswer')
        let questionName= await question.findOne({_id:id}).select('name')
        
        if(allanswers[i]!=null){
        if(findquestion.questionAnswer!=allanswers[i].set){
       
    
    
        let questionnumber =i+1
        wrongAnswers++;
    
       // wrong.push(allanswers[i].set)
        console.log(allanswers[i].set)
        correctAnswer.push(findquestion.questionAnswer);
        }
        }
    }
       }
      grade=(((dataa.length)-wrongAnswers)/(dataa.length))*100
       gradeComment ="Your Grade is" +".       "+grade
       wrong.push(correctAnswer)
    console.log(correctAnswer)
       //console.log(wrong)
    
     if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
}
      res.status(200).json(correctAnswer)

    }
    const getAnswerss = async (req,res) => {
const {subid,ctid} = req.params
        const array =[];
    //const {id} = req.params
    const corrects=[]
    const correctAnswer=[]
    let wrongAnswers=0;
    let grade=0;
    let gradeComment=""
    const wrong=[]
        const data = await exam.findOne({examName:"exam1" }).select('answers')
     const allanswers= await CtAnswers.find({})
    
        const examid = await exam.findOne({examName:"exam1" }).select('_id')
        const questions = array.push(await exam.findOne({examName:"exam1" }).select('questions'))
       //console.log(questions.length)
        const dataa = await question.find({examid:examid }).select('questionAnswer')
       
       for(i=0;i<dataa.length;i++){
     let is=allanswers[i].ques
     if(is!=null){
    
    let id=allanswers[i].ques._id
        let findquestion= await question.findOne({_id:id}).select('questionAnswer')
        let questionName= await question.findOne({_id:id}).select('name')
        
        if(allanswers[i]!=null){
        if(findquestion.questionAnswer!=allanswers[i].set){
       
    
    
        let questionnumber =i+1
        wrongAnswers++;
    
       // wrong.push(allanswers[i].set)
        console.log(allanswers[i].set)
        correctAnswer.push(findquestion.questionAnswer);
        }
        }
    }
       }
      grade=(((dataa.length)-wrongAnswers)/(dataa.length))*100
       gradeComment ="Your Grade is" +".       "+grade
       wrong.push(gradeComment)
    if(grade>=50){
        const sub = await subtitle.findOne({_id:subid})
        const subID = sub._id
        const array  = await ct.findOne({_id:ctid})
        console.log(array.solved)
    array.solved.push(subID)
    console.log(array.solved)
    
    console.log(subID)
     const done = await ct.findOneAndUpdate({_id:ctid},{solved:array.solved},{new:true})
    //    const data3= await it.findOneAndUpdate({_id:itid },
    //     {$push:{ solved:[(id)]}},{new:true})
    console.log(done)
    }
       //console.log(wrong)
    
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
     const allanswers= await CtAnswers.find({})
    
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
        if(allanswers[i] != null){
        if(findquestion.questionAnswer!=allanswers[i].set){
       
    
        console.log("wrong")
        let questionnumber =i+1
        wrongAnswers++;
        let string = "question"+".            "+questionName.name +"wrong"+'.     '+"correct Answer:"+findquestion.questionAnswer;
        wrong.push(string)
        }
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
     const allanswers= await CtAnswers.find({})
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
    
    const solve = async (req,res) => {
        const {id,ctid} = req.params
        const {set,question}=req.body
      const name= question.name
      let dataa=[];
       const ques= await que.findOne({name:name}).select('_id')
       let dataaa= await CtAnswers.findOne({ques:ques})
        //console.log(dataaa)
    //     const sub = await subtitle.findOne({_id:id})
    //     const subID = sub._id
    //     const array  = await ct.findOne({_id:ctid})
    //     console.log(array.solved)
    // array.solved.push(subID)
    // console.log(array.solved)
    
    // console.log(subID)
    //  const done = await ct.findOneAndUpdate({_id:ctid},{solved:array.solved},{new:true})
    // //    const data3= await it.findOneAndUpdate({_id:itid },
    // //     {$push:{ solved:[(id)]}},{new:true})
    // console.log(done)
        if(dataaa==null ){
        dataa= await CtAnswers.create({ques,set})
       }
       else{
        dataa= await CtAnswers.findOneAndUpdate({ques:ques },
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
    const ctAnswer = async (req,res) => {
        const {examName}  = req.params
        // const search = req.params.price
        console.log(examName)
        const data = await exam.find({examName: examName})
    
        res.status(200).json(data)
    } 
    const getProgress= async(req,res)=>{
        const id=req.params.id
        const ctid=req.params.ctid
    
        let cSubtitles = []
       // const sub = await subtitle.findOne({_id:id})
       // console.log(sub)
        //const courseID = sub.course
        const data = await subtitle.find({course:id})
        console.log(data[0])
    
        for(var i = 0;i<data.length;i++){
            cSubtitles.push(data[i]._id)
        }
        console.log(cSubtitles)
        var count = 0
        const user = await ct.findOne({_id:ctid})
        console.log(user)
    
        const solvedSub = user.solved
        const watchedSub = user.watched

        for(var x = 0;x<cSubtitles.length;x++){
            if(solvedSub.includes(cSubtitles[x]))
            {
                for(var x = 0;x<cSubtitles.length;x++){
if(watchedSub.includes(cSubtitles[x])){
                count= count+1;
}
                }
            }
            
        }
        let progress=0;
        if(cSubtitles.length==0){
    progress=0;
        }
        else{
        progress = (count/cSubtitles.length)*100
        }
       //if((!data == null) && (!courseID==null)&&(!user==null))
       console.log(progress)
       res.status(200).json(progress)
    // else{
    //     res.status(400).send("not found")
    // }
        
    }



    const watchedArray= async(req,res)=>{
const {subid,ctid}=req.params

    const sub = await subtitle.findOne({_id:subid})
        const subID = sub._id
        const array  = await ct.findOne({_id:ctid})
        console.log(array.watched)
    array.watched.push(subID)
    console.log(array.watched)
    
    console.log(subID)
     const done = await ct.findOneAndUpdate({_id:ctid},{watched:array.watched},{new:true})
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
    getrequests,
    viewExam,
    coloringWrongs
    ,coloringAnswers,
    getAnswerss,
    correctingg, 
    correcting,
    solve, ctAnswer, 
    getProgress,
watchedArray
}