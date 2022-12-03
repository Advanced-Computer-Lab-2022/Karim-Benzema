const nodemailer = require("nodemailer");

module.exports = async (from ,email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.mailgun.org',
			port: 587,
			auth: {
				user: 'postmaster@sandboxf1d38c3aa6f843369266d7987fa7b4ea.mailgun.org',
				pass: '1ed598268a2982654818188fd475cde8-f2340574-1690de91',
			},
		});

		await transporter.sendMail({
			from:from,
			to:email,
			subject:subject,
			text:text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};