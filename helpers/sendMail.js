const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_USER, GMAIL_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendMail = async (data) => {
  const mail = { ...data, from: "ry6ens@gmail.com" };

  transport
    .sendMail(mail)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
};

module.exports = sendMail;
