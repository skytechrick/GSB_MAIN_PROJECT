const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
// const { json } = require("body-parser");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'getskybuy@gmail.com',
      pass: 'xziw iisq eddg boji'
    }
});



const Signup_Schema = new mongoose.Schema({
    First_Name:{
        type: String
    },
    Last_Name:{
        type: String
    },
    Mobile_Number:{
        type: Number
    },
    Email:{
        type: String
    }, 
    User_Password:{
        type: String
    },
    Verification:{
        type: String
    },
    Created_Account: {
        type: Date
    },
    Authentication:{
        type: Object
    }
});




const Signup_Model = mongoose.model("Main_User", Signup_Schema);










function Signup_Post(req, res) {
    const Signup_Details ={
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Mobile_Number: req.body.Mobile_Number,
        Email: req.body.Email,
        Confirm_Password: req.body.Confirm_Password
    }
    console.log(Signup_Details);
    let New_Enter = new Sign(Signup_Details);
    New_Enter.save().then( ()=>{res.status(200).redirect("/login")});
    
    
    
    

    
    const mailOptions = {
        from: 'getskybuy@gmail.com',  // Sender's email address
        to: User_Email_Verification,
        subject: '', // Subject line
        html: '<p>This is a <strong>test</strong> email sent from <em>Node.js</em> with HTML content.</p>' // HTML content
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    
    
    
    
    
    
}
    
module.exports = Signup_Post;