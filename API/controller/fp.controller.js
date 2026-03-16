import nodemailer from 'nodemailer';

const ForgetPassword=(req,res)=>{
 const email=req.body.email;
 let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: 'goldtrustpownshop@gmail.com',
     pass: 'aopzbwljovmvency'
   }
 });

 let mailOptions = {
   from: 'goldtrustpownshop@gmail.com',
   to: email,
   subject: 'Link For ForgetPassword PawnShop',
   html: "<h1>Welcome to pawnshop</h1><h2>your link to reset password is attached below</h2><h2>Click on the link below to reset password</h2><a href='http://localhost:3000/resetpassword/"+email+"'>Click to reset password</a>"
 };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error(error);
    console.log("forgetpassword error");
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
export default ForgetPassword;