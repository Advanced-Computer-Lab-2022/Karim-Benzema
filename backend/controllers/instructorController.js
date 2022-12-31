
const courses= require('../models/coursesModel')
const mongoose = require('mongoose')
const {course} = require('../models/coursesModel')
const subtitle = require('../models/subtitleModel')
const {subtitles} = require('../models/subtitleModel')
const {question} = require('../models/questionModel')
const {exam} = require('../models/examModel')
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");
const currency=require('iso-country-currency');
const ITproblem = require('../models/itProbModel')
const CTproblem = require('../models/ctProbModel')
const INSTproblem = require('../models/instProbModel,')
const { instructor } = require('../models/instructorModel')
const inst = instructor
var courseId = mongoose.Types.ObjectId();
//create inst
//profile instructor yasm
const getMyRating = async(req,res)=>{
    const{id} = req.params
    const data= await instructor.find({_id:id})
    //.select('username email miniBio ratings reviews')
    if(!data){
        return res.status(404).json({error: "instructor not found"})
    }
    res.status(200).json(data)
}
const createinst = async (req,res) => {
    //add course to DB 
    const{name,username,email,miniBio,password,country} = req.body
    try{
        const data= await instructor.create({name,username,email,miniBio,password,country}) //change
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

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
    const data = await instructor.findOneAndUpdate({_id : id},{
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

 const getCourseTitle = async (req,res) => {
    //for future use
   const {id} = req.params
   const name = await instructor.find({_id:id}).select('name')
   //fix name in the future 
     const data= await courses.find({Instructor :name}).select('title')
     if(!data){
         return res.status(404).json({error: "Course not found"})
     }
     res.status(200).json(data)
 }
const instCourses = async (req,res) => {
     const data= await courses.find({instructor : "aly"})

     if(!data){
        return res.status(404).json({error: "Course not found"})
    }
    res.status(200).json(data)
}
 const getCourseRating = async (req,res) => {
    //for future use
   const {id} = req.params
   const name = await instructor.find({_id:id}).select('name')
   //fix name in the future 
     const data= await courses.find({Instructor :name}).select('title rating ratings')
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
    const data = await courses.find({$or: [{subject:req.query.subject},{price:req.query.price}] })
    res.status(200).json(data)
}
//h subject or title
const searchSubjectOrTitle = async (req,res) => {

    const user  = req.query.search
    var rola=new RegExp(user,"i")
    console.log(user)
   const data = await course.find( { $or: [ {instructorName:user}, {title: user},{subject: user} ] } )

  console.log(data);
  
   // const data = await courses.find({Instructor:"aly"})
   if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}
const createcourse = async (req,res) => {
    const instructorIdd=req.params.instructor
    const{title,totalHours,price,subject,discount,shortSummary,period} = req.body
    const instructor = await inst.findOne({_id:instructorIdd}).select('_id')


    try{
        const data= await courses.create({title,totalHours,price,subject,instructor,discount,shortSummary,period}) 
        courseId = data._id
    
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }   
}
const createSubtitle= async (req,res) => {
    const{totalHoursSUB,number} = req.body
    try{
        const count =1
       // while(number>0){
        const title = "Lecture "+number
        console.log(courseId)
        const data= await subtitle.create({course:courseId,number:number,title:title,totalHoursSUB:totalHoursSUB}) //change
        res.status(200).json(data)
        //count++
      //  number--
       // }   
    }
    catch(error) {
        res.status(400).json({error: error.message})
    }
    
}
const createproblem = async (req,res) => {
    const{id}=req.params
    const{type,report} = req.body
    try{
        const data= await INSTproblem.create({ReporterID:id,type:type,report:report}) 
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }   
}
const getproblems = async (req,res) => {
    let result = []
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await ITproblem.find({}).select('id Reporterid type report')
    const data1 = await INSTproblem.find({}).select('id Reporterid type report')
    const data2 = await CTproblem.find({}).select('id Reporterid type Report')
    result.push(data)
    result.push(data1)
    result.push(data2)
    res.status(200).json(result)
}
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
    const data = await instructor.findOneAndUpdate({_id : id},{
        country : country,
    },{new:true})
    if(!data){
        return res.status(404).json({error: "Not found"})
    }
    res.status(200).json(data)
    
}
const curr =  async (req,res) => {
    const id  = req.params.id
    const data = await instructor.findById({_id:id})
    const test =  data.country
    if(!test){
        res.status(200).json("USD")
    }
    else{
    var currencySymbol = currency.getParamByParam('countryName', test, 'currency')
    console.log(currencySymbol)
    res.status(200).json(currencySymbol)
    }
    
 }
const getcourse = async (req,res) => {
    const {id} = req.params 
    const data = await courses.find({instructor:id })
 if(!data){
    return res.status(404).json({error: "Not found"})
}
  res.status(200).json(data)
}
//getcourse 2
// const getcourse = async (req,res) => {
//     //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
//     const data = await courses.find({}).select('title totalHours rating')
//     res.status(200).json(data)
// }

//edit mini biography 
const editBio = async (req,res) => {
    const { id } = req.params
    const{miniBio} = req.body
    const data = await instructor.findOneAndUpdate({_id :id},{
        miniBio : miniBio
    }, {new: true})
    if(!data){
        return res.status(404).json({error: "Not found"})//redundant prob
    }
    res.status(200).json(data)
}
//edit email 
const editEmail = async (req,res) => {
        const { id } = req.params
        const{email} = req.body
        const data = await instructor.findOneAndUpdate({_id : id},{
            email : email
        }, {new: true})
        if(!data){
            return res.status(404).json({error: "Not found"})//redundant prob
        }
        res.status(200).json(data)
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
    // const { input } = req.params
    // const data = await courses.find({$or:[{title:{$regex:input}},{subject:{$regex:input}},{Instructor:{$regex:input}}]})
    if(!data){
        return res.status(404).json({error: "No results!"})
    }
    res.status(200).json(data)
}
//define a discount
const definediscount = async (req,res) => {
    console.log("in")
    const{id}=req.params
    const{discount,validDate} = req.body 
    let currentDate = new Date().toJSON().slice(0,10);
    const oldprice = await courses.findOne({_id:id}).select('price')
    console.log(oldprice)
    console.log(discount)
    // const {newprice}=  Math.round(((100-discount)/100)*oldprice)
    // console.log(newprice)

    if( (discount!=null && discount!=0) && (validDate!=null) && (validDate>=currentDate)){
    const data = await courses.findOneAndUpdate({_id:id},
 {
        discount : discount,
        validDate : validDate
        // ,
        // price: newprice
} ,{new:true})
if(!data){
    return res.status(404).json({error: "Not found"})
}
res.status(200).json(data)
}
else{
    return res.status(400).json({error:error.message})
}

}


const upload = async (req,res) => {
    const {id,number,link,description} = req.body
    const videoId = getId(link)
    console.log('Video ID:', videoId)
    const embed = `https://www.youtube.com/embed/${videoId}`
    var data = mongoose.Types.ObjectId();
    data = await courses.findOne({_id:id}).select('_id')
    const test = await subtitle.findOneAndUpdate({$and: [{course:data,number:number}]},
        {video:embed,
        description:description},
        {new:true})
    if(!test){
            return res.status(404).json({error: "Not found"})//redundant prob
        }
    res.status(200).json(test)    
}
const preview = async (req,res) => {
    const {id,preview} = req.body
    console.log(preview)
    const videoId = getId(preview)
    console.log('Video ID:', videoId)
    const embed = `https://www.youtube.com/embed/${videoId}`
    const test = await courses.findOneAndUpdate({_id:id},
        {preview:embed},
        {new:true})
    if(!test){
            return res.status(404).json({error: "Not found"})//redundant prob
        }
    res.status(200).json(test)
}
function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return (match && match[2].length === 11)
      ? match[2]
      : null;
}
const createExam = async (req,res) => {
    //add course to DB 
    const {title,number,examName}=req.body
   const course = await courses.findOne({title:title}).select('title')
   const subtitle = await subtitles.findOne({number:number}).select('number')

   console.log(subtitle);

   try{
        const data= await exam.create({course,subtitle,examName})
         exercise=data._id
         console.log(exercise)
        //change
        const sub =await subtitles.findOneAndUpdate({number:number},
           { exercise:exercise})
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
const createQuestion = async (req,res) => {
    //add course to DB 
    const {name,mcq1,mcq2,mcq3,mcq4,questionAnswer}=req.body
    
    //const examm = await exam.findOne({examName:eName}).select('questionSet')
    const questionSet=[mcq1,mcq2,mcq3,mcq4]

    try{ console.log(exercise)
        const examName = await exam.findOneAndUpdate({_id:exercise},
          {$push:{ questions:[({name,questionSet,questionAnswer})]}}
           )
           const examid= await exam.findOne({_id:exercise}).select('_id')
        const data= await question.create({examid,name,questionSet,questionAnswer}) //change
        res.status(200).json(examName)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = {
    getCourseTitle,
    createcourse,
    filterSubjectOrPrice,
    searchSubjectOrTitle,//yasm
    getinstructor,
    updateCountry,
    getcourse,
    getcoursebyprice,
    getcoursebysubjectRating,
    getcoursebysubjectorRating,
    getpriceof1course,
    searchawy,
    instCourses,
    definediscount,     //yasm2
    editBio,
    createinst,
    editEmail,
    changePassword,
    getMyRating,
    getCourseRating,
    upload,
    createSubtitle,
    preview,
    createExam,
    createQuestion,
    createproblem,
    getproblems,
    curr
}

