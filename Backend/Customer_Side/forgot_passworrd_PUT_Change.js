

const {Signup_Model} = require("../All_Models.js");
const Pass_Hash = require("../Password_Hashing.js");

const nodemailer = require("nodemailer");
const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'getskybuy@gmail.com',
        pass: 'xziw iisq eddg boji'
    }
});




const forgot_passworrd_PUT_Change = async(req, res) => {

    
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
        if(zx.Email == X){
            let px = req.body.Password;
            if(px.length >= 8){

                let xx = Pass_Hash(px, X);
                await Signup_Model.updateOne({Email:X},{$set:{User_Password:xx}}).then(()=>{
                    
                    const Mail_Option = {
                        from: 'Password Changed <getskybuy@gmail.com>',
                        to: zx.Email,
                        subject: 'Password Changed | GET SKY BUY', 
                        html: `
                        <center>Password changed Successfully. If this is not done by you please immediately contact us.</center>
                        `
                    };

                    Transporter.sendMail(Mail_Option);
                    res.clearCookie("Email");
                    res.clearCookie("Token");
                    res.status(200).json({Message:"Changed Successfully."})

                })
            }else{
                res.status(200).json({Message:"Password can not be less then 8 characters."})

            }
           
        }else{
            res.status(200).json({Message:"Unauthorized access or OTP Verification timing is ended."})
        }

    }else{
        res.status(200).json({Message:"Unauthorized access or OTP Verification timing is ended."})
    }




}

module.exports = forgot_passworrd_PUT_Change;