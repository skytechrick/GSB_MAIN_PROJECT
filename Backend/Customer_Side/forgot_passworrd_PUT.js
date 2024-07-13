





const Auth_Token = require("../Auth_Token.js");
const GET_OTP = require("../OTP_Generator.js");

const nodemailer = require("nodemailer");
const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'getskybuy@gmail.com',
        pass: 'xziw iisq eddg boji'
    }
});






const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");





const forgot_passworrd_PUT = async(req, res) =>{
    
    let JS_GET_DATA = {};
    let s4 = req.body.Email;
    
    // console.log(s4);
    if (req.cookies.For == "Forget") {
        
    
        if (s4 == "" || s4 == null){
            JS_GET_DATA["EMAIL"] = "Invalid Mail";
        }else{
            let TT=0;
            for (let index = 0; index < s4.length; index++) {
                const element = s4[index];
                if(element == " "){
                    TT=11;
                    break;
                }
                if(TT==0){
                    if (element==="@"){
                        TT = 1
                    }
                }
                if(TT==1){
                    if(element==="."){
                        TT = 2
                        break;
                    }
                }
            }
            if(TT==2){
                JS_GET_DATA["EMAIL"] = 1;
            }
            else{
                JS_GET_DATA["EMAIL"] = "Invalid Mail";
            }
        }

        if(JS_GET_DATA.EMAIL == 1){
            let data = await Signup_Model.find({});
            let z = 1;
            let xc;
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                if(element.Email == s4){
                    xc = element

                    z = 2;
                    break;
                };
                
            }
            if (z == 2) {
                
            
                let Final_OTP = GET_OTP();
                let Token = Auth_Token(34);

                const Mail_Option = {
                    from: 'Reset Password <getskybuy@gmail.com>',
                    to: xc.Email,
                    subject: 'Reset Password | Email verification | OTP', 
                    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Password reset | One Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Forget Password</h1><h2>Your OTP for resetting GSB account password is here.</h2><p>If you haven't tried for changing password, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`
                };

                await Transporter.sendMail(Mail_Option, async (error, info) => {
                    if (error) {
                        res.status(200).json({Message: "Unable to sent OTP please try again later."});
                    } else {
                        await Signup_Model.updateOne({Email:xc.Email},{
                            Authentication:{
                                OTP_Auth:Token,
                                OTP_Value:Final_OTP,
                            }
                        }).then(()=>{
                            res.clearCookie("For");
                            res.cookie("Token", Token, {
                                httpOnly: true,
                                path: "/", 
                                expires: new Date(Date.now() + 600000),
                                secure: false,
                            });
                            
                            res.cookie("Email", xc.Email, {
                                httpOnly: true,
                                path: "/", 
                                expires: new Date(Date.now() + 600000),
                                secure: false,
                            });
                            
                                                
                            res.status(200).json({Message: "OTP sent successfully"});
                        })
                    }
                });
            
            }else{
                res.status(200).json({Message: "You do not have any account."});
            }
        }else{
            res.status(200).json({Message: JS_GET_DATA.EMAIL});
        }
    }else{
        res.status(200).json({Message: "Unauthorized Access"});
    }
    
}
module.exports = forgot_passworrd_PUT;