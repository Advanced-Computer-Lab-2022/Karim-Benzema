const mongoose = require('mongoose') 
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const Schema = mongoose.Schema 
const maxAge = 3 * 24 * 60 * 60;

const instructorSchema = new Schema ({
    firstName: { type: String, required: false},
	lastName: { type: String, required: false },
    username: {type: String,required: true},
    email: {type: String,required: false},
    miniBio: {type: String,required: false},
    password: {type: String,required: true},
    country: { type: String,required: false},
    rating: {type: Number,required: false},
    ratings:{type : [Number],required:false},
    reviews: {type: [String],required: false},
    flag : {type: Boolean, default: false}
}, {timestamps: true})

instructorSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id },'supersecret' ,{
		expiresIn: maxAge,
	});
	return token;
};

const instructor = mongoose.model('instructorModel',instructorSchema); 

const validate = (data) => {
	const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
        username: Joi.string().required().label("Username"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
        flag : Joi.boolean().required().label("Flag"),
	});
	return schema.validate(data);
};
module.exports = { instructor, validate };
