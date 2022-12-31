const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const { boolean } = require("joi");
const maxAge = 3 * 24 * 60 * 60;

const adminSchema = new  mongoose.Schema ({
    username: {type: String,required: true},
    password: {type: String,required: true },
}, {timestamps: true})

adminSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id },'supersecret', {
		expiresIn: maxAge,
	});
	return token;
};

const admin = mongoose.model('adminModel',adminSchema);
const validate = (data) => {
	const schema = Joi.object({
        username: Joi.string().required().label("Username"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};
module.exports = { admin, validate };

