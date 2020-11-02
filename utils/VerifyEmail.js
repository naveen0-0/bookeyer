const nodeMailer = require('nodemailer');
const EmailTemplate = require('email-templates').EmailTemplate;

const VerifyEmail = (emailTo,user) => {
    let transporter = nodeMailer.createTransport({
        service : 'gmail',
        auth: {
            user : process.env.EMAIL,
            pass : process.env.PASSWORD
        }
    })

    let mailOptions = {
        from:process.env.EMAIL,
        to:emailTo,
        subject:"Please verify your email address for Bookeyer",
        html:`<h3>Thank You for signing up ${user}</h3> </br> <a href="http://localhost:5000/verify/${emailTo}">Verify Email Address</a>`
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log("Email Sent")
        }
    })
}


module.exports = {
    VerifyEmail  : VerifyEmail
}