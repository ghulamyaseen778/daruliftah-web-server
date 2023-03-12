const nodemailer = require('nodemailer');
const Email = require('../Modals/Email');
require("dotenv").config()

const EmailControllers = {
  postEmailController: (req, res) => {
    try {
      Email.create(req.body, (err, email) => {
        if (err) {
          res.json({
            data:"Something went wrong"
          })
        }
        else{
          const transporter = nodemailer.createTransport({
            service: process.env.SERVICE,
            auth: {
              user: process.env.SERVICE,
              pass: process.env.PASS
            }
          });
      
          let mailOptions = {
            from: process.env.SERVICE,
            to: process.env.SERVICE,
            subject: `Daruliftha Faiz-e-Raza Contact By ${email.name}`,
            html: `<h1 style="color:green;">Daruliftha Faiz-e-Raza</h1>
            <p>Name:${email.name}</p>
            <p>PhoneNumber:${email.phone}</p>
            <p>Question:${email.message}</p>
            `
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              let mailOptions2 = {
                from: process.env.SERVICE,
                to: email.email,
                subject: `Daruliftha Faiz-e-Raza Contact By ${email.name}`,
                html: `<h1 style="color:green;">Daruliftha Faiz-e-Raza</h1>
                <h3>Thank You For Your Response</h3>
                <p>Contact For Any Query:<b>033639778</b></p>
                <p>Your Question:${email.message}</p>
                `
              };
              transporter.sendMail(mailOptions2, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                  res.json({
                    data:info.response
                  })
                }
              });
            }
          });
        }
      })
    } catch (error) {
      res.json({
        data:"Something went wrong"
      })
    }
    
  },
}

module.exports = { EmailControllers }