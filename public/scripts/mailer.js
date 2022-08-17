
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "p.blitz2022@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

module.exports = transporter
