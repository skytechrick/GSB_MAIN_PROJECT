const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Auth_Token = require("./Auth_Token.js");
const GET_OTP = require("./OTP_Generator.js");


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

    let KK = req.cookies.New_User;

    console.log(Signup_Details);

    if(KK == "Yes"){
        res.clearCookie(New_User);
        let OTP_Mail = Signup_Details.Email;
        let New_User_Signup = new Signup_Model(Signup_Details);
        const mailOptions = {
            from: 'GET SKY BUY <getskybuy@gmail.com>',
            to: OTP_Mail,
            subject: 'GET-SKY-BUY | Email verification | OTP',
            html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>One-Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Creating GSB account.</h1><h2>Your OTP for creating GSB account is here.</h2><p>If you haven't created a <strong>GSB account</strong>, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`
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
}
    
module.exports = Signup_Post;