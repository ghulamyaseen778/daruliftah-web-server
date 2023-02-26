const nodemailer = require('nodemailer');

const EmailControllers = {
    postEmailController: (req, res) => {
        console.log("let")
        const transporter = nodemailer.createTransport({
            service: 'ghulamyaseen67670@gmail.com',
            auth: {
              user: 'ghulamyaseen67670@gmail.com',
              pass: 'bdea jvnb cfwn avqt'
            }
          });
          
          let mailOptions = {
            from: 'ghulamyaseen67670@gmail.com',
            to: 'anus123anus098@gmail.com',
            subject: 'Sending Email using Node.js',
            html: '<b>That was easy!</b>'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    },
}

module.exports = {EmailControllers}