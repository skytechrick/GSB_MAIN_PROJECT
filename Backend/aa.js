// const { Signup_Model } = require("./All_Models.js");
// const GET_OTP = require("./OTP_Generator.js");
// const Pass_Hash = require("./Password_Hashing");
// const { Transporter } = require("./Login_Post.js");




// async function Login_Post(req, res) {

//     let a = res.cookies.New_Login;
//     if (a == "Yes") {
//         let TP = res.body.TP;
//         let Email = res.body.Email;
//         let Password = res.body.Password;
//         if (TP || Email || Password) {
//             if (TP == "Yes") {
//                 function ch(Email, Password) {
//                     let Jso = {};

//                     if (Email == "" || Email == null) {
//                         Jso["EMAIL"] = "EMPTY";
//                     } else {
//                         let TT = 0;
//                         for (let index = 0; index < Email.length; index++) {
//                             const element = Email[index];
//                             if (element == " ") {
//                                 TT = 11;
//                                 break;
//                             }
//                             if (TT == 0) {
//                                 if (element === "@") {
//                                     TT = 1;
//                                 }
//                             }
//                             if (TT == 1) {
//                                 if (element === ".") {
//                                     TT = 2;
//                                     break;
//                                 }
//                             }
//                         }
//                         if (TT == 2) {
//                             Jso["EMAIL"] = "GOT_IT";
//                         }
//                         else {
//                             Jso["EMAIL"] = "NOT_VALID_MAIL";

//                         }

//                     }

//                     if (Password == "" || Password == null) {
//                         Jso["PASSWORD"] = "EMPTY";

//                     } else if (Password.length < 8) {
//                         Jso["PASSWORD"] = "PASSWORD_LESS";

//                     } else {
//                         Jso["PASSWORD"] = "GOT_IT";

//                     }
//                     return Jso;
//                 }

//                 let Jso = ch(Email, Password);

//                 if (Jso[Email] == "GOT_IT" & Jso[Password] == "GOT_IT") {

//                     let elem = {};
//                     let SW = 4;
//                     let DD = await Signup_Model.find({});
//                     for (let x = 0; x < DD.length; x++) {
//                         elem = DD[x];
//                         if (elem.Email == Email) {
//                             SW = 1;
//                             break;
//                         }
//                         else {
//                             SW = 4;
//                         }
//                     }

//                     let D;
//                     if (SW == 1) {
//                         D = "Email Address Found.";
//                         if (elem.Verified == "Yes") {

//                             let Ps = Pass_Hash(Password, Email);
//                             if (elem.User_Password === Ps) {
//                                 res.status(200).json({
//                                     "Message": "Login Successful.",
//                                 });

//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                                 // ______________________________________________________________
//                             } else {
//                                 res.status(200).json({
//                                     "Message": "Wrong Password",
//                                 });

//                             }










//                         } else {
//                             let Final_Auth = Set_Get_Auth();
//                             let Final_OTP = GET_OTP();
//                             let A = 0;

//                             const Mail_Option = {
//                                 from: 'GET SKY BUY <getskybuy@gmail.com>',
//                                 to: s4,
//                                 subject: 'GET-SKY-BUY | Email verification | OTP',
//                                 html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>One-Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Creating GSB account.</h1><h2>Your OTP for creating GSB account is here.</h2><p>If you haven't created a <strong>GSB account</strong>, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`
//                             };
//                             Transporter.sendMail(Mail_Option, (error, info) => {
//                                 if (error) {
//                                     A = 2;
//                                 } else {
//                                     A = 3;
//                                 }
//                             });
//                             setTimeout(() => {
//                                 let Email_Sent_Q = "";
//                                 if (A == 3) {
//                                     Email_Sent_Q = "OTP sent successfully";
//                                 }
//                                 else {
//                                     Email_Sent_Q = "Unable to send OTP. Please try again after some time.";
//                                 };

//                                 if (Email_Sent_Q == "OTP sent successfully") {

//                                     let OTP_Mail = Signup_Details.Email;
//                                     // let New_User_Signup = new Signup_Model(Signup_Details);
//                                     Signup_Model;

//                                     await Signup_Model.updateOne({ Email: element.Email }, { $set: { Authentication: { OTP_Auth: Final_Auth, OTP_Value: Final_OTP }, } });


//                                     New_User_Signup.save().then(() => {
//                                         res.cookie("Temp_Em", OTP_Mail, { httpOnly: true, path: "/", expires: new Date(Date.now() + 600000), secure: false });
//                                         res.json({ "Message": Email_Sent_Q });

//                                     });



//                                 } else {
//                                     // console.log("155555")
//                                     res.json({ Message: "Unable to send OTP. Please try again after some time." });
//                                 }
//                             }, 4000);













































































//                         }
//                     }
//                     else {
//                         // D = "Email Address not Found.";
//                         json({
//                             "Message": "You don't have account."
//                         });

//                     }

















//                 }
//                 else {
//                     res.status(200).json(Jso);
//                 }


















//             } else {
//                 res.status(401).json({ Unauthorized: "Unauthorized Access or missing data." });
//             }

//         } else {
//             res.status(401).json({ Unauthorized: "Unauthorized Access or missing data." });
//         }


//     } else if (a == "No") {
//     } else if (a == "OTP") {
//     } else {
//         res.status(401).json({ Unauthorized: "Unauthorized Access. You have to use any browser or app." });
//     }




// }
// exports.Login_Post = Login_Post;
