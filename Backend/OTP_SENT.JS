const nodemailer = require("nodemailer");
const GET_OTP = require("../OTP_Generator.js");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'getskybuy@gmail.com',
        pass: 'xziw iisq eddg boji'
    }
});

function SENT_OTP(OTP_Mail) {
    let A = 0;
    let Final_OTP =  GET_OTP();
    const Mail_Option = {
        from: 'GET SKY BUY <getskybuy@gmail.com>',
        to: OTP_Mail,
        subject: 'GET-SKY-BUY | Email verification | OTP',
        html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>One-Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Creating GSB account.</h1><h2>Your OTP for creating GSB account is here.</h2><p>If you haven't created a <strong>GSB account</strong>, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`
    };
    Transporter.sendMail(Mail_Option, (error, info) => {
        if (error) {
            A = 2;
            console.error('Error:', error);
        } else {
            console.log('Email sent:', info.response);
            A1 = 3;
            
            
        }
    });

    setTimeout(() => {
        
        let Email_Sent_Q = "";
        if(A==3){
            Email_Sent_Q = "OTP sent successfully";
        }
        else{
            Email_Sent_Q = "Unable to send OTP. Please try again after some time.";
            
        }
        return {
            Final_OTP_1: Final_OTP,
            Email_Sent_Q_1: Email_Sent_Q
          };
    }, 5000);
}
module.exports = SENT_OTP;