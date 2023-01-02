const router = require("express").Router();
const {it } = require("../models/itModel");
const {ct} = require("../models/ctModel");
const {instructor}= require("../models/instructorModel");
const {admin} = require("../models/adminModel");
const joi = require("joi");
const bcrypt = require("bcrypt");
const maxAge = 3 * 24 * 60 * 60;
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { boolean } = require("joi");
var role = '';
var flag = '';

router.post("/", async (req, res) => {
    try{
       const {error} = validate(req.body);
       if(error)
         return res.status(400).send({message: error.details[0].message});
       var user = await it.findOne({username: req.body.username});
       role='it';
       if(!user){
           user = await instructor.findOne({username: req.body.username});
           role='instructor';
       }
       if(!user){
           user = await ct.findOne({username: req.body.username});    
           role='ct';
       }
       if(!user){
           user = await admin.findOne({username: req.body.username});
           role='admin';
       }
       if(!user){
           return res.status(404).send({message: "User not found"});
       }
       flag = user.flag
       const validPassword = await bcrypt.compare(
           req.body.password,
           user.password
       );
       console.log(validPassword)
       if(!validPassword){
           return res.status(401).send({message: "Invalid password"});
       }
       const id = user._id;
       const token = await user.generateAuthToken();
       console.log("token");
       res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
       res.cookie('role', role, { httpOnly: false, maxAge: maxAge * 1000 });
       console.log("cookie");
       console.log(flag)
       res.status(200).send({data:token, message: "Logged in Successfully", role: role, id: id, flag: flag})   
       if(user && flag == false){
           if(role == 'admin'){
               flag = await admin.updateOne({flag: true});
           }
           if (role == 'it'){
               flag = await it.updateOne({flag: true});
           }
           if (role == 'ct'){
               flag = await ct.updateOne({flag: true});
           }
           if (role == 'instructor'){
               flag = await instructor.findOneAndUpdate({username: req.body.username}, {flag: true}
                   , {new: true});
       }
       console.log(flag);
    }
   }
       catch(error){
          console.log(error)
          res.status(500).send({message: "Internal Server Error"}); 
       }
   });

const validate = (data) => {
    const schema = joi.object({
        username: joi.string().min(6).required().label('Username'),
        password: joi.string().required().label('Password')
    })
    return schema.validate(data)
}


module.exports = router;