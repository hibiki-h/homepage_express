import nodemailer from "nodemailer";
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASSWORD;

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: user,
    pass: pass,
  },
});

let mailDetails = {
  from: "xyz@gmail.com",
  to: user,
  subject: "Test mail",
  text: "Node.js testing mail for GeeksforGeeks",
};

async () => {
  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
      console.log(`error output data :${data}`);
      console.log(`log ${pass}`);
    } else {
      console.log("Email sent successfully");
      console.log(`success output data :${data}`);
    }
  });
};
