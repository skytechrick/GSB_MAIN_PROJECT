
const User_Auth = require("../User_Auth.js");


const {Signup_Model} = require("../All_Models.js");



const setting_post = async (req, res) => {

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let a = req.body;
        let TT = a.T;
        
        if (TT == 1) {
            
            function VALIDATING(s1, s2, s3) {
                let JS_GET_DATA = {};
                if (s1 == "" || s1 == null || s2 == "" || s1.length <3 || s2.length <3 || s2 == null){
                    JS_GET_DATA["FIRST"] = "Enter Correct Name";
                }else{
                    JS_GET_DATA["FIRST"] = 1;
                };
                if (s3 == "" || s3 == null){
                    JS_GET_DATA["MOBILE"] = "Enter correct Number";
                }else if(s3.length <10 || s3.length >10){
                    JS_GET_DATA["MOBILE"] = "Enter correct Number";
                    
                }else{
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
                        JS_GET_DATA["MOBILE"] = "Enter correct Number";
                    }else{
                        JS_GET_DATA["MOBILE"] = 1;
                    }
                }
                return JS_GET_DATA;
            }

            let Get_First_Name = a.First_Name;
            let Get_Last_Name = a.Last_Name;
            let Get_Mobile = a.Mobile_Number;
            let ad = VALIDATING(Get_First_Name, Get_Last_Name, Get_Mobile);
            // console.log(ad);

            if (ad.FIRST == 1 && ad.MOBILE == 1) {
                let d = {
                    First_Name:Get_First_Name,
                    Last_Name:Get_Last_Name,
                    Mobile_Number:Get_Mobile,
                };
                await Signup_Model.updateOne({Email:Auths.Email}, {$set:d}).then(()=>{
                    res.status(200).json({Success:true,Message:'Changes saved successfully.'});
                });

            }else{
                res.status(200).json({Success:false,Message: 1, OB:ad});
            }
        }else{
            res.clearCookie("U_ID");
            res.status(200).redirect("http://192.168.0.12/login");
        }
    }else{
        res.clearCookie("U_ID");
        res.status(200).redirect("http://192.168.0.12/login");
    };


}
module.exports = setting_post;