import nodemailer from 'nodemailer';

function sendMail(email,password)
{
 let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: process.env.EMAIL_USER,
     pass: process.env.EMAIL_PASS
   }
 });

 let mailOptions = {
   from: process.env.EMAIL_USER,
   to: email,
   subject: 'Verification Email PawnShop',
   html: "<h1>Welcome to pawnshop</h1><p>You have successfully register to our site</p><h2>your login credentials are attached below</h2><h4>Username : "+email+"</h4><h4>Password : "+password+"</h4><h2>Click on the link below to verify your account....</h2><a href='http://localhost:3000/vemail/"+email+"'>Click to verify account</a>"
 };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendMail;