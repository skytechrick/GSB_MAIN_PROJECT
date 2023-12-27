const Auth_Token = require("./Auth_Token.js");
const Signup_Model = require("./All_Models.js");

// const SENT_OTP = require("./SEND_OTP_SIGNUP.js");

const SENT_OTP = require("./OTP_SENT.js");

async function Signup_Post(req, res) {
    // console.log(req.body);
    let p = req.cookies.New_User;
    let s1 = req.body.First_Name.trim();
    let s2 = req.body.Last_Name.trim();
    let s3 = req.body.Mobile_Number.trim();
    let s4 = req.body.Email.trim();
    let s5 = req.body.Confirm_Password.trim();

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
            




            // VALIDATION HERE ALL 5 
            function VALIDATING() {
                
                let JS_GET_DATA = {};
                
                if (s1 == "" || s1 == null){
                    JS_GET_DATA["FIRST"] = "EMPTY";
                    
                }else{
                    JS_GET_DATA["FIRST"] = "GOT_IT";
                };
                
                if (s2 == "" || s2 == null){
                    JS_GET_DATA["LAST"] = "EMPTY";
                    
                }else{
                    JS_GET_DATA["LAST"] = "GOT_IT";
                    
                }
                if (s3 == "" || s3 == null){
                    JS_GET_DATA["MOBILE"] = "EMPTY";
                }
                
                else if(s3.length <10 || s3.length >10){
                    JS_GET_DATA["MOBILE"] = "NUMBER_LESS_MORE";
                    
                }
                else{
                    let p = 0
                    for (let index = 0; index < mobnoo.length; index++) {
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
                                break
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
                
                
                
                if (Create_Passwordd == "" || Create_Passwordd == null){
                    JS_GET_DATA["PASSWORD"] = "EMPTY";
                    
                }
                else if(Create_Passwordd.length <8){
                    JS_GET_DATA["PASSWORD"] = "PASSWORD_LESS";
                    
                }else{
                    JS_GET_DATA["PASSWORD"] = "GOT_IT";
                    
                }
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
                    res.json({
                        Email_Unique:{
                            // Value:"False",
                            Message:"E-mail address Already exist."
                        }
                    });
                    //Email Already exist

                }else{
                    let Final_Auth = Set_Get_Auth();
                    let {Final_OTP_1, Email_Sent_Q_1} = SENT_OTP(s4);
                    if (Email_Sent_Q_1 == "OTP sent successfully") {
                        
                        
                        const Signup_Details ={
                            First_Name: s1,
                            Last_Name: s2,
                            Mobile_Number: s3,
                            Email: s4,
                            User_Password: s5,
                            Created_Account: Date(),
                            Authentication: {
                                OTP_Auth: Final_Auth,
                                OTP_Value: Final_OTP_1
                            },
                            Verified: "No",
                            Profile_Id: "No_ID"
                        };
                            
                        
                        console.log(Signup_Details);
                        
                        
                        res.cookie("New_User", "No",{
                            httpOnly: true,
                            path: "/signup",
                            expires: new Date(Date.now() + 86400000),
                            secure: false
                        });
                        
                        
                        // res.clearCookie("New_User");
                        let OTP_Mail = Signup_Details.Email;
                        
                        let New_User_Signup = new Signup_Model(Signup_Details);
                        
                        
                        
                        New_User_Signup.save().then(()=>{
                            res.cookie("Temp_Em", OTP_Mail, {httpOnly: true, path: "/signup", expires: new Date(Date.now() + 600000), secure: false});
                            setTimeout(() => {res.json({Message: Email_Sent_Q_1})}, 4200);
                            
                        });
                        
                    
                    
                    }

                    else{
                        res.json({Message: Email_Sent_Q_1})
                    }
                        
                        
                    
                    
                    
                    
                }
            }
            else{
                res.json(JS_GET_DATA);
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
        res.status(401).send("Unauthorized Access. You have use any browser or app");
    }
}

module.exports = Signup_Post;
