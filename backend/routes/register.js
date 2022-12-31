const router = require("express").Router();
const { it, validate } = require("../models/itModel");
const bcrypt = require("bcrypt");
const maxAge = 3 * 24 * 60 * 60;
const jwt = require('jsonwebtoken');
const cookie = require('cookie');

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await it.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(10));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new it({ ...req.body, password: hashPassword }).save();
		//res.cookie('jwt', token, { httpOnly: false, maxAge: maxAge * 1000 });
		res.status(201).send({ message: "User created successfully" });
	}
	catch (error) {
		console.log(error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;