const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Auth_Token = require("./Auth_Token.js");
const GET_OTP = require("./OTP_Generator.js");

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

    function Set_Get_Auth(){
        let Get_Auth = Auth_Token(32);
        let tID = req.cookies.Temp_ID;
        if(tID == undefined || tID == null || tID == ""){
            res.cookie("Temp_ID", Get_Auth, {
                httpOnly: true,
                path: "/signup",
                expires: new Date(Date.now() + 600000),
                secure: false
            });
        }
        else{
            res.clearCookie("Temp_ID");
            res.cookie("Temp_ID", Get_Auth, {
                httpOnly: true,
                path: "/signup",
                expires: new Date(Date.now() + 600000),
                secure: false
            });
        }
        return Get_Auth;
    }


    



    
    
    
    
    
    
    
    
    let Final_OTP = GET_OTP();
    let Final_Auth = Set_Get_Auth();


    const Signup_Details ={
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Mobile_Number: req.body.Mobile_Number,
        Email: req.body.Email,
        User_Password: req.body.Confirm_Password,
        Created_Account: Date.now(),
        Authentication: {
            OTP_Auth: Final_Auth,
            OTP_Value: Final_OTP,
        },
        Verification: "No",
    }
    console.log(Signup_Details);


    let OTP_Mail = Signup_Details.Email;
    let New_User_Signup = new Signup_Model(Signup_Details);

    
    
    
    
    
    
    const mailOptions = {
        from: 'getskybuy@gmail.com',
        to: OTP_Mail,
        subject: 'Your OTP for creating GSB account is here',
        html: `
        <hr>
        <p>This is a <strong>test</strong> email sent from <em>Node.js</em> with HTML content.</p>
        <hr>
        <h1>Your OTP is ${Final_OTP}</h1>
        <hr>
        `
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    
    
    New_User_Signup.save().then(()=>{
        res.status(200).redirect("/login");
    });
    
    
    
    
}
    
module.exports = Signup_Post;