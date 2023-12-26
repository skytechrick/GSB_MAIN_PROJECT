const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
const Auth_Token = require("./Auth_Token.js");
const GET_OTP = require("./OTP_Generator.js");

const Signup_Model = require("./Signup_Model.js");

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'getskybuy@gmail.com',
      pass: 'xziw iisq eddg boji'
    }
});

function Signup_Post(req, res) {
    console.log(req.body);
    let p = req.cookies.New_User;
    let s1 = req.body.First_Name;
    let s2 = req.body.Last_Name;
    let s3 = req.body.Mobile_Number;
    let s4 = req.body.Email;
    let s5 = req.body.Confirm_Password;

    if(p == "Yes"){        
        if(s5 || s1 || s2 || s3 || s4){
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
                First_Name: s1,
                Last_Name: s2,
                Mobile_Number: s3,
                Email: s4,
                User_Password: s5,
                Created_Account: Date(),
                Authentication: {
                    OTP_Auth: Final_Auth,
                    OTP_Value: Final_OTP,
                },
                Verification: "No",
            }

            console.log(Signup_Details);
            
            let KK = req.cookies.New_User;
            if(KK == "Yes"){
                res.clearCookie("New_User");
                let OTP_Mail = Signup_Details.Email;
                let New_User_Signup = new Signup_Model(Signup_Details);
                const mailOptions = {
                    from: 'GET SKY BUY <getskybuy@gmail.com>',
                    to: OTP_Mail,
                    subject: 'GET-SKY-BUY | Email verification | OTP',
                    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>One-Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Creating GSB account.</h1><h2>Your OTP for creating GSB account is here.</h2><p>If you haven't created a <strong>GSB account</strong>, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`
                };

                let A1 = 0;
                let A2 = 0;
                
                

                New_User_Signup.save().then(()=>{
                    res.cookie("Temp_Em", OTP_Mail, {
                        httpOnly: true,
                        path: "/signup",
                        expires: new Date(Date.now() + 600000),
                        secure: false
                    });
                    A2 = 1;
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            A1 = 0;
                            console.error('Error:', error);
                        } else {
                            console.log('Email sent:', info.response);
                            A1 = 1;
    
    
                        }
                    });
                })

                setTimeout(() => {                    
                    if(A1 == 1 & A2 == 1){
                        res.json({Email: "YES", DATA_SAVE: "YES"});
                    }else if(A2 == 0 & A1 == 0){
                        res.json({Email: "NO", DATA_SAVE: "NO"});
                    }else if(A1 == 0 & A2 == 1){
                        res.json({Email: "NO", DATA_SAVE: "YES"});
                        
                    }else if(A2 == 0 & A1 == 1){
                        res.json({Email: "YES", DATA_SAVE: "NO"});
                    }
                }, 4200);
                
                
                
                
                
                
            }
        }
        
        else {
            res.status(401).send("Unauthorized Access");
        }
    
    }

    else {
        res.status(401).send("Unauthorized Access");
    }
}
    
module.exports = Signup_Post;