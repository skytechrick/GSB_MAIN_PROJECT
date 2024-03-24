const Auth_Token = require("./Auth_Token.js");
const { Signup_Model } = require("./All_Models.js");
const Profile_ID = require("./Profile_ID.js");
const nodemailer = require("nodemailer");
const GET_OTP = require("./OTP_Generator.js");
const Pass_Hash = require("./Password_Hashing");

const { JWTC, JWTV } = require("./JWT_");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'getskybuy@gmail.com',
        pass: 'xziw iisq eddg boji'
    }
});


async function Login_Post(req, res) {

    let a = req.cookies.New_Login;
    if (a == "Yes") {
        let TP = req.body.TP;
        let Email = req.body.Email;
        let Password = req.body.Password;
        if (TP || Email || Password) {
            if (TP == "Yes") {
                function ch(Email, Password) {
                    let Jso = {}
                    if (Email == "" || Email == null) {
                        Jso["EMAIL"] = "EMPTY";
                    } else {
                        let TT = 0;
                        for (let index = 0; index < Email.length; index++) {
                            const element = Email[index];
                            if (element == " ") {
                                TT = 11;
                                break;
                            }
                            if (TT == 0) {
                                if (element === "@") {
                                    TT = 1
                                }
                            }
                            if (TT == 1) {
                                if (element === ".") {
                                    TT = 2
                                    break;
                                }
                            }
                        }
                        if (TT == 2) {
                            Jso["EMAIL"] = "GOT_IT";
                        }
                        else {
                            Jso["EMAIL"] = "NOT_VALID_MAIL";
                        }
                    }
                    if (Password == "" || Password == null) {
                        Jso["PASSWORD"] = "EMPTY";
                    } else if (Password.length < 8) {
                        Jso["PASSWORD"] = "PASSWORD_LESS";
                    } else {
                        Jso["PASSWORD"] = "GOT_IT";
                    }
                    return Jso;
                }
                let Jso = ch(Email, Password);

                if (Jso["EMAIL"] == "GOT_IT" & Jso["PASSWORD"] == "GOT_IT") {
                    let elem = {};
                    let SW = 4;
                    let DD = await Signup_Model.find({});
                    for (let x = 0; x < DD.length; x++) {
                        elem = DD[x];
                        if (elem.Email == Email) {
                            SW = 1;
                            break;
                        }
                        else {
                            SW = 4;
                        }
                    }
                    let D;
                    if (SW == 1) {
                        D = "Email Address Found.";
                        if (elem.Verified == "Yes") {
                            let Ps = Pass_Hash(Password, Email);
                            if (elem.User_Password === Ps) {
                                let ele = {};
                                let DD = await Signup_Model.find({});
                                for (let x = 0; x < DD.length; x++) {
                                    ele = DD[x];
                                    if (ele.Email == Email) {
                                        break;
                                    }
                                }
                                let Auth_Toke = Auth_Token(32);
                                function USER_ID() {
                                    let Name = ele.First_Name + ele.First_Name;
                                    const JS = {
                                        Name: Name,
                                        Profile_ID: ele.Profile_ID,
                                        Profile_Log: Auth_Toke,
                                        Verified: "Yes",
                                    };
                                    let JWTCa = JWTC(JS);
                                    console.log(JWTCa)
                                    return JWTCa;
                                };
                                let dc = Object.keys(ele.Profile_Log).length;
                                if (dc == 1) {
                                    await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": Auth_Toke, "Auth_2": "_" } } });
                                    res.cookie("U_ID", USER_ID(), {
                                        httpOnly: true,
                                        path: "/",
                                        expires: new Date(Date.now() + 1200000),
                                        secure: false
                                    });
                                    res.status(200).json({
                                        "Message": "Login Successful.",
                                    })

                                } else if (dc == 2) {
                                    await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": ele.Profile_Log.Auth_1, "Auth_2": Auth_Toke, "Auth_3": "_" } } });
                                    res.cookie("U_ID", USER_ID(), {
                                        httpOnly: true,
                                        path: "/",
                                        expires: new Date(Date.now() + 1200000),
                                        secure: false
                                    });
                                    res.status(200).json({
                                        "Message": "Login Successful.",
                                    })

                                } else if (dc == 3) {
                                    await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": ele.Profile_Log.Auth_1, "Auth_2": ele.Profile_Log.Auth_2, "Auth_3": Auth_Toke, "Auth_4": "_" } } });
                                    res.cookie("U_ID", USER_ID(), {
                                        httpOnly: true,
                                        path: "/",
                                        expires: new Date(Date.now() + 1200000),
                                        secure: false
                                    });
                                    res.status(200).json({
                                        "Message": "Login Successful.",
                                    })

                                } else if (dc == 4) {
                                    await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": ele.Profile_Log.Auth_1, "Auth_2": ele.Profile_Log.Auth_2, "Auth_3": ele.Profile_Log.Auth_3, "Auth_4": Auth_Toke, "Auth_5": "_" } } });
                                    res.cookie("U_ID", USER_ID(), {
                                        httpOnly: true,
                                        path: "/",
                                        expires: new Date(Date.now() + 1200000),
                                        secure: false
                                    });
                                    res.status(200).json({
                                        "Message": "Login Successful.",
                                    })

                                } else {
                                    res.status(200).json({
                                        "Message": "Reached maximum number of login",
                                    })
                                }

                            } else {
                                res.status(200).json({
                                    "Message": "Wrong Password",
                                })

                            }
                        } else {
                            let Ps = Pass_Hash(Password, Email);
                            if (elem.User_Password === Ps) {
                                function Set_Get_Auth() {
                                    let Get_Auth = Auth_Token(32);
                                    res.cookie("Temp_ID", Get_Auth, {
                                        httpOnly: true,
                                        path: "/login",
                                        expires: new Date(Date.now() + 600000),
                                        secure: false
                                    });
                                    return Get_Auth;
                                };

                                let Final_Auth = Set_Get_Auth();
                                let Final_OTP = GET_OTP();
                                let A = 0;

                                const Mail_Option = {
                                    from: 'GET SKY BUY <getskybuy@gmail.com>',
                                    to: Email,
                                    subject: 'GET-SKY-BUY | Email verification | OTP',
                                    html: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>One-Time Password</title><style>body {font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;}.container { width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);}h1 { border-bottom: 1px solid #aaa; } h2 { color: #333333; } p { color: #666666; } .otp { font-size: 26px; color: #4CAF50; margin: 20px 0; text-align: center; } .footer { margin-top: 20px; text-align: center; color: #999999; } .footer p { margin: 0px; } .footer p:nth-child(1) { margin-bottom: 10px; } .Links { font-size: 14px; }.Links span{ font-weight: bold; } .Links a{ font-weight: bold; color: rgb(0, 185, 0);}</style></head><body dir="ltr"><div class="container"><h1>GET SKY BUY | Email Verfication - Creating GSB account.</h1><h2>Your OTP for creating GSB account is here.</h2><p>If you haven't created a <strong>GSB account</strong>, please refrain from sharing this email or <strong>OTP</strong> with anyone, and kindly disregard it..</p><p>Your <strong>One Time Password</strong> is:</p><p title="OTP" class="otp"><span>${Final_OTP}</span></p><p>This password is valid for <strong>5 minutes</strong>. Do not share it with others.</p><div title="GET-SKY-BUY" class="Links"><span>Official Website: </span><a href="https://www.getskybuy.com">GET SKY BUY</a></div><hr><div class="footer"><p>Thank you for using our service!</p><p title="Team GSB">Team GSB!</p></div></div></body></html>`
                                };
                                Transporter.sendMail(Mail_Option, (error, info) => {
                                    if (error) {
                                        A = 2;
                                    } else {
                                        A = 3;
                                    }
                                });
                                setTimeout(async () => {
                                    let Email_Sent_Q = "";
                                    if (A == 3) {
                                        Email_Sent_Q = "OTP sent successfully";
                                    }
                                    else {
                                        Email_Sent_Q = "Unable to send OTP. Please try again after some time.";
                                    };

                                    if (Email_Sent_Q == "OTP sent successfully") {
                                        await Signup_Model.updateOne({ Email: Email }, { $set: { Authentication: { OTP_Auth: Final_Auth, OTP_Value: Final_OTP }, } });
                                        res.cookie("Temp_EM", Email, { httpOnly: true, path: "/", expires: new Date(Date.now() + 600000), secure: false });
                                        res.cookie("New_Login", "OTP", {
                                            httpOnly: true,
                                            path: "/login",
                                            expires: new Date(Date.now() + 600000),
                                            secure: false
                                        });
                                        res.json({ "Message": Email_Sent_Q });
                                    } else {
                                        res.json({ Message: "Unable to send OTP. Please try again after some time." })
                                    }
                                }, 4000);
                            } else {
                                res.status(200).json({
                                    "Message": "Wrong Password",
                                })
                            }
                        }
                    }
                    else {
                        res.status(200).json({
                            "Message": "You don't have account."
                        });

                    }
                }
                else {
                    console.log("ELSE");
                    res.status(200).json(Jso);
                }
            } else {
                res.status(401).json({ Unauthorized: "Unauthorized Access or missing data." });
            }

        } else {
            res.status(401).json({ Unauthorized: "Unauthorized Access or missing data." });
        }
    } else if (a == "OTP") {
        console.log("OTP");
        let b = req.cookies.Temp_ID;
        let c = req.cookies.Temp_EM;
        let OTTP = req.body.OT;
        console.log(c);
        console.log(req.body.OT_VA);
        console.log(req.cookies.Temp_ID);
        let element;
        let BF = 0;
        let Dta = await Signup_Model.find({});
        for (let i = 0; i < Dta.length; i++) {
            element = Dta[i];
            if (element.Email == c) {
                BF = 4; break;
            }
            else {
                BF = 1;
            }
        }
        if (req.body.OT_VA == "Yes") {
            if (BF == 4) {
                if (b == element.Authentication.OTP_Auth) {
                    if (OTTP == element.Authentication.OTP_Value) {
                        res.clearCookie("Temp_ID", { path: '/signup' });
                        res.clearCookie("Temp_Em", { path: '/signup' });
                        res.clearCookie("New_User", { path: '/signup' });
                        res.clearCookie("New_Login", { path: '/signup' });
                        res.clearCookie("Temp_ID", { path: '/login' });
                        res.clearCookie("Temp_Em", { path: '/login' });
                        res.clearCookie("New_User", { path: '/login' });
                        res.clearCookie("New_Login", { path: '/login' });
                        console.log("Login Successfully");
                        let G = element.Email;
                        let P_ID;
                        while (true) {
                            P_ID = Profile_ID();
                            let dat = await Signup_Model.find({ Profile_Id: { $eq: P_ID } });
                            if (dat.length === 0) {
                                break;

                            }
                        }
                        await Signup_Model.updateOne({ Email: G }, {
                            $set: {
                                Profile_Id: P_ID,
                                Verified: "Yes",
                                Authentication: {
                                    OTP_Auth: "_",
                                    OTP_Value: "_"
                                },
                            }
                        });
                        let ele = {};
                        let DD = await Signup_Model.find({});
                        for (let x = 0; x < DD.length; x++) {
                            ele = DD[x];
                            if (ele.Email == Email) {
                                break;
                            }
                        }
                        let Auth_Toke = Auth_Token(32);
                        function USER_ID() {

                            let Name = ele.First_Name + ele.First_Name;

                            const JS = {
                                Name: Name,
                                Profile_ID: ele.Profile_ID,
                                Profile_Log: Auth_Toke,
                                Verified: "Yes",
                            };
                            let JWTCa = JWTC(JS);
                            console.log(JWTCa)
                            return JWTCa;
                        };

                        let dc = Object.keys(ele.Profile_Log).length;

                        if (dc == 1) {
                            await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": Auth_Toke, "Auth_2": "_" } } });
                            res.cookie("U_ID", USER_ID(), {
                                httpOnly: true,
                                path: "/",
                                expires: new Date(Date.now() + 1200000),
                                secure: false
                            });
                            res.status(200).json({
                                "Message": "Login Successful.",
                            })

                        } else if (dc == 2) {
                            await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": ele.Profile_Log.Auth_1, "Auth_2": Auth_Toke, "Auth_3": "_" } } });
                            res.cookie("U_ID", USER_ID(), {
                                httpOnly: true,
                                path: "/",
                                expires: new Date(Date.now() + 1200000),
                                secure: false
                            });
                            res.status(200).json({
                                "Message": "Login Successful.",
                            })

                        } else if (dc == 3) {
                            await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": ele.Profile_Log.Auth_1, "Auth_2": ele.Profile_Log.Auth_2, "Auth_3": Auth_Toke, "Auth_4": "_" } } });
                            res.cookie("U_ID", USER_ID(), {
                                httpOnly: true,
                                path: "/",
                                expires: new Date(Date.now() + 1200000),
                                secure: false
                            });
                            res.status(200).json({
                                "Message": "Login Successful.",
                            })

                        } else if (dc == 4) {
                            await Signup_Model.updateOne({ Profile_ID: ele.Profile_ID }, { $set: { Profile_Log: { "Auth_1": ele.Profile_Log.Auth_1, "Auth_2": ele.Profile_Log.Auth_2, "Auth_3": ele.Profile_Log.Auth_3, "Auth_4": Auth_Toke, "Auth_5": "_" } } });
                            res.cookie("U_ID", USER_ID(), {
                                httpOnly: true,
                                path: "/",
                                expires: new Date(Date.now() + 1200000),
                                secure: false
                            });
                            res.status(200).json({
                                "Message": "Login Successful.",
                            })

                        } else {
                            res.status(200).json({
                                "Message": "Reached maximum number of login",
                            })
                        }
                        setTimeout(() => {
                            res.json({ Ver: "Login Successfully" });
                        }, 10);
                    } else {
                        res.json({ Ver: "Wrong OTP" });

                    }
                }
                else {
                    res.json({ Ver: "Wrong OTP" });
                }
            }
            else {
                res.json({ Ver: "NO" });
            }
        } else {
            res.status(401).json({ Unauthorized: "Unauthorized Access. You have to use any browser or app." });
        }

    } else {
        res.status(401).json({ Unauthorized: "Unauthorized Access. You have to use any browser or app." });
    }
}

module.exports = {
    Login_Post: Login_Post
};