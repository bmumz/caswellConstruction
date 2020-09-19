// TUTORIAL
// const express = require("express");
// const router = express.Router();
// const nodemailer = require("nodemailer");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}...`);
// });

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com", //replace with your email provider
//   port: 587,
//   auth: {
//     user: process.env.OWNER_EMAIL, //replace with the email address
//     pass: process.env.OWNER_PASSWORD, //replace with the password
//   },
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take our messages");
//   }
// });

// router.post("/contact", (req, res, next) => {
//   var name = req.body.name;
//   var email = req.body.email;
//   var subject = req.body.subject;
//   var message = req.body.message;
//   var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `;
//   var mail = {
//     from: name,
//     to: "brandimummery@gmail.com",
//     subject: subject,
//     text: content,
//   };
//   transporter.sendEmail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: "fail",
//       });
//     } else {
//       res.json({
//         status: "success",
//       });
//     }
//   });
// });
