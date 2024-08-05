const fs = require("fs");
const Admin_Auth_Token = require("./Admin_Auth_Token.js");

const nodemailer = require("nodemailer");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skybuy.ceo@gmail.com',
        pass: 'ucyj phsb oqyq zkox'
    }
});
    



Main_Admin_Post = (req, res) =>{

    const PAs = "1234Rick@#*";
    let d = req.body;
    let Ds = Admin_Auth_Token(40);
    fs.writeFileSync("./Main_Admin/d.txt", Ds);

    if(d.G == 'ricksarkar2005@gmail.com'){
        if(d.P == PAs){
            if(d.S == "Yes"){
                const Mail_Option = {
                    from: 'Success Alert - GSB <skybuy.ceo@gmail.com>',
                    to: "ricksarkar2005@gmail.com",
                    subject: 'Login successfully as Company CEO | GET SKY BUY', 
                    html: `
                        <center><h1 style="font-family: Arial;">Login Successfully at CEO Admin Pannel</h1></center>
                        <p style="text-align: center;">You have been loged in successfully, if it is not done by you then please inform to your CEO</p>
                        <p style="text-align: center;">AS - COMPANY CEO</p>
                    `};
                    
            
                let d = 2
                Transporter.sendMail(Mail_Option, (error, info) => {
                    if (error) {
                        d = 0;
                    } else {
                        d = 1;
                    }
                });
                res.cookie("Admin", Ds, {httpOnly: true, path: "/admin", expires: new Date(Date.now() + 1200000), secure: false});
                res.json({"GOT":"Yes"});
                
            }else{

                const Mail_Option = {
                    from: 'Fail Alert - GSB <skybuy.ceo@gmail.com>',
                    to: "ricksarkar2005@gmail.com",
                    subject: 'Login Attempt at CEO Admin Pannel | GET SKY BUY', 
                    html: `
                        <center><h1 style="font-family: Arial;">Login Attempt at CEO Admin Pannel</h1></center>
                        <p style="text-align: center;">You have tried for login, if this is not done by you, please be aware.</p>
                        <p style="text-align: center;">Check Your Pannel</p>
                        `
                };
                    
            
                let d = 2
                Transporter.sendMail(Mail_Option, (error, info) => {
                    if (error) {
                        d = 0;
                    } else {
                        d = 1;
                    }
                });
                res.clearCookie("Admin");
                res.json({"GOT":"NO"});
                
            }
        }else{
            const Mail_Option = {
                from: 'Fail Alert - GSB <skybuy.ceo@gmail.com>',
                to: "ricksarkar2005@gmail.com",
                subject: 'Login Attempt at CEO Admin Pannel | GET SKY BUY', 
                html: `
                    <center><h1 style="font-family: Arial;">Login Attempt at CEO Admin Pannel</h1></center>
                    <p style="text-align: center;">You have tried for login, if this is not done by you, please be aware.</p>
                    <p style="text-align: center;">Check Your Pannel</p>
                    `
            };
                
        
            let d = 2
            Transporter.sendMail(Mail_Option, (error, info) => {
                if (error) {
                    d = 0;
                } else {
                    d = 1;
                }
            });
            res.clearCookie("Admin");
            res.json({"GOT":"NO"});
            
        }
    }else{
        const Mail_Option = {
            from: 'Fail Alert - GSB <skybuy.ceo@gmail.com>',
            to: "ricksarkar2005@gmail.com",
            subject: 'Login Attempt at CEO Admin Pannel | GET SKY BUY', 
            html: `
                <center><h1 style="font-family: Arial;">Login Attempt at CEO Admin Pannel</h1></center>
                <p style="text-align: center;">You have tried for login, if this is not done by you, please be aware.</p>
                <p style="text-align: center;">Check Your Pannel</p>
                `
        };
            
    
        let d = 2
        Transporter.sendMail(Mail_Option, (error, info) => {
            if (error) {
                d = 0;
            } else {
                d = 1;
            }
        });
        res.clearCookie("Admin");
        res.json({"GOT":"NO"});
        

    }


    // res.redirect("http://localhost/admin");

}

module.exports = Main_Admin_Post;