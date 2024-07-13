








const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");






const forgot_passworrd_PUT_OTP = async (req, res) => {

    let X = req.cookies.Email;
    let a = await Signup_Model.find({});
    let p = 2;
    let zx;
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (X == element.Email) {
            p = 1;
            zx = element
            break;
        }
    }
    if(p == 1){
        if(zx.Email == X && zx.Authentication.OTP_Auth == req.cookies.Token){

            if (zx.Authentication.OTP_Value == req.body.OTP) {
                await Signup_Model.updateOne({Email:X},{$set:{Authentication:{OTP_Auth:"",OTP_Value:""}}}).then(()=>{
                    res.status(200).json({Message:"OTP verified."})
                })
            }else{
                res.status(200).json({Message:"Wrong OTP."})
            }
        }else{
            res.status(200).json({Message:"Unauthorized access or OTP Verification timing is ended."})
        }

    }else{
        res.status(200).json({Message:"Unauthorized access or OTP Verification timing is ended."})
    }



}

module.exports = forgot_passworrd_PUT_OTP;