const router = require("express").Router();
const {it} = require("../models/itModel");
const {ct} = require("../models/ctModel");
const sendEmail = require("../utils/sendCertificate");
const fs = require('fs');
// const pdfBuffer = fs.readFileSync("C:/Users/hp/Downloads/Certificate.pdf");


// send certificate to user email
router.post("/:id", async (req, res) => {
	try {
		const id = req.params.id
		let user = await it.findOne({ _id : id });
		if (!user){
			user = await ct.findOne({ _id: id });
		}
		if (!user){
            return res
				.status(409)
				.send({ message: "User with given email does not exist!" });
		}
		await sendEmail("Karim Benzema",user.email, "Congratulations, You Have Passed the Course!!","Enjoy your certificate" , pdfBuffer);

		res
			.status(200)
			.send({ message: "The Certificate has been sent to your email account" });
	} catch (error) {
        console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});


module.exports = router;