const Auth_Token = require("./Auth_Token.js");
const {Signup_Model} = require("./All_Models.js");
// const SENT_OTP = require("./OTP_SENT.js");
const nodemailer = require("nodemailer");
const GET_OTP = require("./OTP_Generator.js");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'getskybuy@gmail.com',
        pass: 'xziw iisq eddg boji'
    }
});

async function Signup_Post(req, res) {
    let p = req.cookies.New_User;
    let s1 = req.body.First_Name;
    let s2 = req.body.Last_Name;
    let s3 = req.body.Mobile_Number;
    let s4 = req.body.Email;
    let s5 = req.body.Confirm_Password;

    if(p == "Yes"){
        if(s5 || s1 || s2 || s3 || s4){
            s1 = s1.trim();
            s2 = s2.trim();
            s3 = s3.trim();
            s4 = s4.trim();
            s5 = s5.trim();
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
            };
            function VALIDATING() {
                let JS_GET_DATA = {};
                // _______________________________________________________________________
                if (s1 == "" || s1 == null){
                    JS_GET_DATA["FIRST"] = "EMPTY";
                }else{
                    JS_GET_DATA["FIRST"] = "GOT_IT";
                };
                // _______________________________________________________________________
                if (s2 == "" || s2 == null){
                    JS_GET_DATA["LAST"] = "EMPTY";
                }else{
                    JS_GET_DATA["LAST"] = "GOT_IT";
                }
                // _______________________________________________________________________
                if (s3 == "" || s3 == null){
                    JS_GET_DATA["MOBILE"] = "EMPTY";
                }
                else if(s3.length <10 || s3.length >10){
                    JS_GET_DATA["MOBILE"] = "NUMBER_LESS_MORE";
                    
                }
                else{
                    let p = 0
                    for (let index = 0; index < s3.length; index++) {
                        const element = s3[index];
                        if (element == 1 || element == 2 || element == 3 || element == 2 || element == 4 || element == 5 || element == 6 || element == 7 || element == 8 || element == 9 || element == 0 ){
                            p = 0
                        }
                        else{
                            p = 1;
                            break;
                        }
                    }
                    if (p==1){
                        p=0;
                        JS_GET_DATA["MOBILE"] = "NO_VALID_NUMBER";
                    }
                    else{
                        JS_GET_DATA["MOBILE"] = "GOT_IT";
                    }
                }
                // _______________________________________________________________________
                if (s4 == "" || s4 == null){
                    JS_GET_DATA["EMAIL"] = "EMPTY";
                }
                else{
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
                        JS_GET_DATA["EMAIL"] = "GOT_IT";
                    }
                    else{
                        JS_GET_DATA["EMAIL"] = "NOT_VALID_MAIL";
                        
                    }
                    
                }
                
                
                // _______________________________________________________________________
                
                if (s5 == "" || s5 == null){
                    JS_GET_DATA["PASSWORD"] = "EMPTY";
                    
                }
                else if(s5.length <8){
                    JS_GET_DATA["PASSWORD"] = "PASSWORD_LESS";
                    
                }else{
                    JS_GET_DATA["PASSWORD"] = "GOT_IT";
                    
                }
                // _______________________________________________________________________
                return JS_GET_DATA;
            }
            
            //___________________________________________________________________________________________________________________
            
            let VALID = VALIDATING();
            let V = "GOT_IT";

            if(VALID.FIRST == V && VALID.LAST == V && VALID.MOBILE == V && VALID.EMAIL == V && VALID.PASSWORD == V) {
                        
                let elem = {};
                let SW = 4;
                let DD = await Signup_Model.find({});
                for (let x = 0; x < DD.length; x++) {
                    elem = DD[x];
                    if(elem.Email == s4){
                        SW = 1;
                        break;
                    }
                    else{
                        SW = 4;
                    }                
                }
                if(SW == 1) {
                    res.json({Message:"E-mail address Already exist."});
                }else{
                    let Final_Auth = Set_Get_Auth();
                    console.log("11");
//_____________________________________________________________________________________
                    let A = 0;
                    let Final_OTP =  GET_OTP();

                    const Mail_Option = { from: 'GET SKY BUY <getskybuy@gmail.com>', to: s4, subject: 'GET-SKY-BUY | Email verification | OTP', html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>One-Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Creating GSB account.</h1><h2>Your OTP for creating GSB account is here.</h2><p>If you haven't created a <strong>GSB account</strong>, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`};

                    Transporter.sendMail(Mail_Option, (error, info) => {
                        if (error) {
                            A = 2;
                            console.error('Error:', error);
                        } else {
                            console.log('Email sent:', info.response);
                            A = 3;
                            
                            
                        }
                    });
//_____________________________________________________________________________________

                    
                    console.log("555");
                    setTimeout(() => {
                        let Email_Sent_Q = "";
                        if(A==3){
                            Email_Sent_Q = "OTP sent successfully";
                        }
                        else{
                            Email_Sent_Q = "Unable to send OTP. Please try again after some time.";
                        };

                        console.log("9999")
                        if (Email_Sent_Q == "OTP sent successfully") {
                            
                            
                            const Signup_Details ={
                                First_Name: s1,
                                Last_Name: s2,
                                Mobile_Number: s3,
                                Email: s4,
                                User_Password: s5,
                                Created_Account: Date(),
                                Authentication: {
                                    OTP_Auth: Final_Auth,
                                    OTP_Value: Final_OTP
                                },
                                Verified: "No",
                                Profile_Id: "No_ID"
                            };
                                
                            
                            console.log(Signup_Details);
                            
                            
                            res.cookie("New_User", "No",{httpOnly: true, path: "/signup", expires: new Date(Date.now() + 86400000), secure: false});
                            let OTP_Mail = Signup_Details.Email;
                            
                            let New_User_Signup = new Signup_Model(Signup_Details);
                            
                            
                            
                            New_User_Signup.save().then(()=>{
                                res.cookie("Temp_Em", OTP_Mail, {httpOnly: true, path: "/signup", expires: new Date(Date.now() + 600000), secure: false});
                                res.json({Message: Email_Sent_Q});
                                
                            });
                            
                        
                        
                        }

                        else{
                            console.log("155555")
                            res.json({Message: "Unable to send OTP. Please try again after some time."})
                        }
                    }, 4800);
                }
            }
            else{
                res.json(VALID);
            }
        }
        
        else {
            res.status(401).send("Unauthorized Access or missing data.");
        }
    
    }else if(p=="No"){
        let a = req.body.OTP_REC;
        let b = req.cookies.Temp_ID;
        let c = req.cookies.Temp_Em;
        let Dta =await Signup_Model.find({})
        console.log(Dta);
        let BF = 0;
        let element;
        for (let i = 0; i < Dta.length; i++) {
            element = Dta[i];
            // console.log(element.Email);
            if (element.Email == c) {
                // console.log(element.Authentication);
                BF = 0;
                break;                
            }
            else{
                // console.log("999");
                BF = 1;
            }
        }
        if (BF == 0) {
            
            if (element.Authentication.OTP_Auth == b) {
                if(element.Authentication.OTP_Value == a){
                    let Get_Authaa = Auth_Token(57);
                    res.cookie("ID_C",Get_Authaa,{
                        httpOnly: true,
                        expires: new Date(Date.now() + 15552000000), // 6 months approx
                        secure: false,
                        path: "/"
                    })
                    res.json({
                        SUCCESS:"YES"
                    })
                   
                } 
                else{
                    res.status(200).send("Wrong OTP");
                    // worng otp 
                }
            } 
            else{
                res.status(200).send("Wrong OTP");
                // worng otp 
            } 
        }
        else{
            res.status(200).send("USER_NOT_FOUND");
        }
    }
    else {
        res.status(401).send("Unauthorized Access. You have to use any browser or app");
    }
}

module.exports = Signup_Post;
