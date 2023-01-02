const mongoose = require('mongoose') 
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const Schema = mongoose.Schema 
const maxAge = 3 * 24 * 60 * 60;

const ctSchema = new Schema ({
    firstName: { type: String, required: false},
	lastName: { type: String, required: false },
    username: {type: String,required: true},
    email: {type: String,required: false },
    password: {type: String,required: true }, 
    country: { type: String, required: false },
    courses: {type: [mongoose.Types.ObjectId],required: false,ref: 'courseModel'},
	solved: {type: [mongoose.Types.ObjectId],required: false,ref: 'subtitleModel'},
	requests:{type: [mongoose.Types.ObjectId],required: false,ref: 'courseModel'},
	watched: {type: [mongoose.Types.ObjectId],required: false,ref: 'subtitleModel'},


	flag : {type: Boolean, default: false}
}, {timestamps: true})

ctSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, 'supersecret',{
		expiresIn: maxAge,
	});
	return token;
};

const ct = mongoose.model('ctModel',ctSchema); 
const validate = (data) => {
	const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
        username: Joi.string().required().label("Username"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		contract: Joi.boolean().required().label("Contract"),
	});
	return schema.validate(data);
};

module.exports = { ct, validate };
