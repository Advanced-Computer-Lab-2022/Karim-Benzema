const { request } = require('express');
const {admin} = require('../models/adminModel')
const {instructor} = require('../models/instructorModel')
const {ct} = require('../models/ctModel')
const bcrypt = require("bcrypt");
const ITproblem = require('../models/itProbModel');
const CTproblem = require('../models/ctProbModel');
const INSTproblem = require('../models/instProbModel,');
const courses = require('../models/coursesModel');
const { it } = require('../models/itModel');

//create new admin 
const createAdmin = async (req,res) => {
    const{username,password} = req.body
    try{
        const salt = await bcrypt.genSalt(Number(10));
		const hashPassword = await bcrypt.hash(password, salt);
        const data= await admin.create({username,password:hashPassword}) 
		res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//create new instructor 
const createinstructor = async (req,res) => {
    //add instructor to DB 
    const{username,password} = req.body
    try{
        const salt = await bcrypt.genSalt(Number(10));
		const hashPassword = await bcrypt.hash(password, salt);
        const data= await instructor.create({username,password:hashPassword}) 
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}
//create new corporate trainee 
const createct = async (req,res) => {
    //add corporate trainee to DB 
    const{username,password} = req.body
    try{
        const salt = await bcrypt.genSalt(Number(10));
		const hashPassword = await bcrypt.hash(password, salt);
        const data= await ct.create({username,password:hashPassword}) 
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({error: error.message})
    }
}

//get all admins 
const getAdmins = async (req,res) => {
   const admins = await admin.find({}).sort({createdAt: -1}) //desc order

   res.status(200).json(admins)
}
//follow up 
const addFollowupIT = async(req,res)=>{
    const {id} = req.params
    console.log(id)
    const {followup,resolved} = req.body
    const result =await ITproblem.findOneAndUpdate({_id:id},
        {followup:followup,
        resolved:resolved} 
        //resolved or pending
    ,{new:true})
    if(!result){
        return res.status(404).json({error:"not found"})
    }
    res.status(200).json(result)
}

//followup ct
const addFollowupCT = async(req,res)=>{
    const {id} = req.params
    console.log(id)
    const {followup,resolved} = req.body
    const result =await CTproblem.findOneAndUpdate({_id:id},
        {followup:followup,
        resolved:resolved} 
        //resolved or pending
    ,{new:true})
    if(!result){
        return res.status(404).json({error:"not found"})
    }
    res.status(200).json(result)
}

//followup inst
const addFollowupINST = async(req,res)=>{
    const {id} = req.params
    console.log(id)
    const {followup,resolved} = req.body
    const result =await INSTproblem.findOneAndUpdate({_id:id},
        {followup:followup,
        resolved:resolved} 
        //resolved or pending
    ,{new:true})
    if(!result){
        return res.status(404).json({error:"not found"})
    }
    res.status(200).json(result)
}
const getrequests = async(req,res)=>{
    const requests = await ct.find({})
    if(!requests){
        return res.status(404).json({error:"not found"})
    }
    res.status(200).json(requests)
}
const getrefunds = async(req,res)=>{
    const requests = await it.find({})
    if(!requests){
        return res.status(404).json({error:"not found"})
    }
    res.status(200).json(requests)
}
// const acceptRequest = async(req,res)=>{
//     const {id}= req.params
//     const{courseID}= req.body
    
//     const CorpT = await ct.findOne({_id:id})
//     const requests =  CorpT.requests
//     const RegCourses = CorpT.courses
//     if(!requests.includes(courseID)){
//         return res.status(404).json({error:"not requested"})
//     }
//     else{
//     RegCourses.push(courseID)
//     requests.pop(courseID)
//     const result = await ct.findOneAndUpdate({_id:id},{courses:RegCourses,requests:requests},{new:true})
//     if(!result){
//         return res.status(404).json({error:"not found"})
//     }
//     res.status(200).json(result)
// }}
const acceptRequest = async (req, res) => {
    // Get the id of the trainee and request from the request parameters
    const { id, requestId } = req.params;
  
    console.log(requestId)
    // Find the trainee document in the database
    const trainee = await ct.findById(id);
  
    // Check if the trainee exists
    if (!trainee) {
      return res.status(404).json({ error: 'Trainee not found' });
    }
  
    // Find the index of the request in the trainee's requests array
    // const requestIndex = trainee.requests.findIndex(
    //   request => request.toString() === requestId
    // );
    const requestIndex = trainee.requests.findIndex(
        request => request._id.equals(requestId.toString())
      );
      
    // var requestIndex=-1;

    // for(var i =0 ; i< trainee.requests.length;i++){
    //     if(trainee.requests[i].equals(requestId)){
    //          requestIndex=i
    //        console.log(requestIndex)
    //     }
        
    // }

    //console.log(requestIndex)

    // Check if the request exists
    if (requestIndex === -1) {
      return res.status(404).json({ error: 'Request not found' });
    }
  
    // Get the course id from the request
    const courseId = trainee.requests[requestIndex];
  
    console.log(courseId)

    // Remove the request from the trainee's requests array
    trainee.requests.pop(courseId);
  
    // Add the course id to the trainee's courses array
    trainee.courses.push(courseId);
    const course = await courses.findById(requestId)
    course.registeredTrainees += 1;

// Save the updated course document
await course.save();
  
      // Update the trainee document in the database using findByIdAndUpdate
  const updatedTrainee = await ct.findByIdAndUpdate(
    id,
    { requests: trainee.requests, courses: trainee.courses },
    { new: true }
  );

  // Send the updated trainee document as the response
  res.status(200).json(updatedTrainee);
};

  
  
const getproblems = async (req,res) => {
    let result = []
    //const data = await courses.find({},{projection : {title:1,totalHours:1,rating:1}});
    const data = await ITproblem.find({}).select('_id Reporterid type report resolved')
    const data1 = await INSTproblem.find({}).select('_id Reporterid type report resolved')
    const data2 = await CTproblem.find({}).select('_id Reporterid type report resolved')
    result.push(data)
    result.push(data1)
    result.push(data2)
    res.status(200).json(result)
}


const discount1Course = async (req,res) => {
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

const discountAllCourses = async (req,res) => {
    //const{id}=req.params
    const{discount,validDate} = req.body 
    let currentDate = new Date().toJSON().slice(0,10);
    // const oldprice = await courses.findOne({_id:id}).select('price')
    // console.log(oldprice)
    // console.log(discount)
    // const {newprice}=  Math.round(((100-discount)/100)*oldprice)
    // console.log(newprice)

    if( (discount!=null && discount!=0) && (validDate!=null) && (validDate>=currentDate)){
    const data1 = await courses.updateMany({},
 {
        discount : discount,
        validDate : validDate
        // ,
        // price: newprice
} ,{new:true})
console.log(data1)

if(!data1){
    return res.status(404).json({error: "Not found"})
}
res.status(200).json(data1)
}
else{
    return res.status(400).json({error:"Discount Added!"})
}

}
const AcceptRefund = async (req,res) =>{
    const id = req.params.id
    const itid = req.params.itid
   // const course = await courses.findById(id)
   // const trainee = await it.findById(itid)
    // const price = course.price
    // const oldWallet = trainee.wallet
    // const newWallet = oldWallet+price
    // const Oldregistered = trainee.courses
    // const Oldrequests = trainee.requests
    // const newRequests = Oldrequests
    // const updatedtrainee = await it.findOneAndUpdate({_id:itid},{wallet:newWallet})
    try {
        // Find the trainee document
        const trainee = await it.findById(itid);
    
        // Remove the request from the refundRequests array
      trainee.requests.splice(trainee.requests.indexOf(id), 1);
    
        // Remove the course from the courses array
       trainee.courses.splice(trainee.courses.indexOf(id), 1);
    
        // Find the course document
        const course = await courses.findById(id);
    
        // Add the course price to the trainee's wallet
       const newWallet= trainee.wallet + course.price;
    
        // Save the updated trainee document
        const updatedTrainee = await it.findOneAndUpdate({_id:itid},{wallet:newWallet,courses:trainee.courses,requests:trainee.requests},{new:true})
    
        res.status(200).json({ message: 'Refund request accepted' });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };


//new 
module.exports = {
    createAdmin,
    createinstructor,
    createct,
    getAdmins,
    addFollowupIT,
    acceptRequest,
    getproblems,
    discount1Course,
    discountAllCourses,
    addFollowupCT,
    addFollowupINST,
    getrequests,
    AcceptRefund,
    getrefunds
}


