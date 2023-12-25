const nodemailer = require("nodemailer");
const GET_OTP = require("./OTP_Generator.js");
const mongoose = require("mongoose");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'getskybuy@gmail.com',
      pass: 'xziw iisq eddg boji'
    }
});





async function OTP_POST_Signup_Post(req, res) {
    let resendd = req.body.resend;
    if(resendd = "Yes"){
        let a = 1;

        let Temp_ID = req.cookies.Temp_ID;
        let Temp_Em = req.cookies.Temp_Em;
        if (Temp_ID == undefined || Temp_Em == undefined) {
            res.json({
                Time:"Finished",
                Message:"Your verification time is finished and your account is discard, you can recreate your account."
            })            
        }else if(Temp_ID & Temp_Em){
            
            let list = await Signup_Model.find({});

            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                let Emaila = element.Email;
                let G = element.Authentication.OTP_Auth;
                if(Emaila == Temp_Em & G == Temp_ID){
                    a = 0;
                    break;
                }
                
            }
            if(a == 0){
                let emaill = element.Email;

                Final_OTP = GET_OTP();

                let upd = { $set: { Authentication: { OTP_Value: Final_OTP } }};
                let fil = {Email: emaill};
                Signup_Model.updateOne(fil , upd)


                .then(result => {
                    console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`);
                })
                .catch(error => {
                    console.error('Error updating document:', error);
                })
                //   .finally(() => {
                //     mongoose.disconnect();
                //   });


                

                const mailOptions = {
                    from: 'GET SKY BUY <getskybuy@gmail.com>',
                    to: emaill,
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
                res.json({
                    Email: "Sent successfully"
                })

            }
            else if(a == 1){
                res.json({
                    No_Email_Found:"True"
                })
            }



        }
        else{
            res.json({
                Time:"Finished",
                Message:"Your verification time is finished and your account is discard, you can recreate your account."
            })            

        }



        res.status(200).json()
    }








    let OTP_REC = req.body.OTP_a;

    let hg = 1;
    if(OTP_REC){
        let Temp_IDa = req.cookies.Temp_ID;
        let Temp_Ema = req.cookies.Temp_Em;
        let list = await Signup_Model.find({});

            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                let Emaila = element.Email;
                let G = element.Authentication.OTP_Auth;
                if(Emaila == Temp_Ema & G == Temp_IDa){
                    hg = 0;
                    break;
                }
                
            }
            if(hg==0){
                if(element.Authentication.OTP_Value == OTP_REC){
                    res.json({Login:"Yes"});
                    setTimeout(() => {
                        res.status(200).redirect("/login");
                    }, 2000);

                }else{
                    res.json({Login:"No,Wrong OTP"});
                }
            }else{
                res.status(200).send("No account found")
            }
    }




}

module.exports = OTP_POST_Signup_Post;


// res.status(200).send("Cann't procced you request.")