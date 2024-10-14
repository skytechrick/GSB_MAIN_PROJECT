const {New_Worker_Model} = require("../All_Models");
const Admin_Auth_Token = require("../Main_Admin/Admin_Auth_Token.js");



const nodemailer = require("nodemailer");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skybuy.ceo@gmail.com',
        pass: 'ucyj phsb oqyq zkox'
    }
});
    











Seller_Assistant_Post_Login = async (req, res) =>{
    let list = await New_Worker_Model.find({});
    let COOK = req.cookies.AS_SEL;
    let NO = req.cookies.NO;
    let d = req.body;
    let element;
    if (!COOK && !NO) {
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            if(d.G == element.Email && element.Assistant_Type == "Sellers Assistant leader"){
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(d.G == element.Email){
                if(d.P == element.Create_Password){
                    if(d.S == "Yes"){
                        let Ds = Admin_Auth_Token(40);
                        await New_Worker_Model.updateOne({Email: element.Email, Assistant_Type: "Sellers Assistant leader", Create_Password: element.Create_Password},{$set:{
                            LOG_AUTH: Ds,
                        }})
        
                        res.cookie("AS_SEL", Ds, {httpOnly: true, path: "/assistant/seller", expires: new Date(Date.now() + 7200000), secure: false});
                        res.cookie("NO", element.Mobile_Number, {httpOnly: true, path: "/assistant/seller", expires: new Date(Date.now() + 7200000), secure: false});
                        const Mail_Option = {
                            from: 'Assistant - GSB <skybuy.ceo@gmail.com>',
                            to: element.Email,
                            subject: 'Login successfully as Seller Assistant Leader | GET SKY BUY', 
                            html: `
                                <center><h1 style="font-family: Arial;">Login successfully as Seller Assistant Leader Pannel</h1></center>
                                <p style="text-align: center;">You have been loged in successfully, if it is not done by you then please inform to your CEO</p>
                                <p style="text-align: center;">Don't ignore is it is not done by you inform to you senior or Direct to CEO.</p>
                            `};
                            
                    
                        let d = 2
                        Transporter.sendMail(Mail_Option, (error, info) => {
                            if (error) {
                                d = 0;
                            } else {
                                d = 1;
                            }
                        });
                        res.json({"GOT":"Yes"});
                        
                    }else{
                        const Mail_Option = {
                            from: 'Assistant - GSB <skybuy.ceo@gmail.com>',
                            to: element.Email,
                            subject: 'Login Attempt failed as Seller Assistant Leader | GET SKY BUY', 
                            html: `
                                <center><h1 style="font-family: Arial;">Login Attempt failed as Seller Assistant Leader | GET SKY BUY</h1></center>
                                <p style="text-align: center;">Login Attempt failed as Seller Assistant Leader, if it is not done by you then please inform to your CEO</p>
                                <p style="text-align: center;">Don't ignore is it is not done by you inform to you senior or direct to CEO.</p>
                            `};
                            
                    
                        let d = 2
                        Transporter.sendMail(Mail_Option, (error, info) => {
                            if (error) {
                                d = 0;
                            } else {
                                d = 1;
                            }
                        });
                        res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                        res.clearCookie("NO",{"path":"/assistant/seller"});
                        res.json({"GOT":"NO"});
                        
                    }
                }else{
                    const Mail_Option = {
                        from: 'Assistant - GSB <skybuy.ceo@gmail.com>',
                        to: element.Email,
                        subject: 'Login Attempt failed as Seller Assistant Leader | GET SKY BUY', 
                        html: `
                            <center><h1 style="font-family: Arial;">Login Attempt failed as Seller Assistant Leader | GET SKY BUY</h1></center>
                            <p style="text-align: center;">Login Attempt failed as Seller Assistant Leader, if it is not done by you then please inform to your CEO</p>
                            <p style="text-align: center;">Don't ignore is it is not done by you inform to you senior or direct to CEO.</p>
                        `};
                        
                
                    let d = 2
                    Transporter.sendMail(Mail_Option, (error, info) => {
                        if (error) {
                            d = 0;
                        } else {
                            d = 1;
                        }
                    });
                    res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                    res.clearCookie("NO",{"path":"/assistant/seller"});
                    res.json({"GOT":"NO"});
                    
                }
            }else{
                const Mail_Option = {
                    from: 'Assistant - GSB <skybuy.ceo@gmail.com>',
                    to: element.Email,
                    subject: 'Login Attempt failed as Seller Assistant Leader | GET SKY BUY', 
                    html: `
                        <center><h1 style="font-family: Arial;">Login Attempt failed as Seller Assistant Leader | GET SKY BUY</h1></center>
                        <p style="text-align: center;">Login Attempt failed as Seller Assistant Leader, if it is not done by you then please inform to your CEO</p>
                        <p style="text-align: center;">Don't ignore is it is not done by you inform to you senior or direct to CEO.</p>
                    `};
                    
            
                let d = 2
                Transporter.sendMail(Mail_Option, (error, info) => {
                    if (error) {
                        d = 0;
                    } else {
                        d = 1;
                    }
                });
                res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                res.clearCookie("NO",{"path":"/assistant/seller"});
                res.json({"GOT":"NO"});
                
        
            }


        }else{
            const Mail_Option = {
                from: 'Assistant - GSB <skybuy.ceo@gmail.com>',
                to: element.Email,
                subject: 'Login Attempt failed as Seller Assistant Leader | GET SKY BUY', 
                html: `
                    <center><h1 style="font-family: Arial;">Login Attempt failed as Seller Assistant Leader | GET SKY BUY</h1></center>
                    <p style="text-align: center;">Login Attempt failed as Seller Assistant Leader, if it is not done by you then please inform to your CEO</p>
                    <p style="text-align: center;">Don't ignore is it is not done by you inform to you senior or direct to CEO.</p>
                `};
                
        
            let d = 2
            Transporter.sendMail(Mail_Option, (error, info) => {
                if (error) {
                    d = 0;
                } else {
                    d = 1;
                }
            });
            res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
            res.clearCookie("NO",{"path":"/assistant/seller"});
            res.status(200).json({GOT:"Yesfdsaf"});
        }
    }else{
        const Mail_Option = {
            from: 'Assistant - GSB <skybuy.ceo@gmail.com>',
            to: element.Email,
            subject: 'Login Attempt failed as Seller Assistant Leader | GET SKY BUY', 
            html: `
                <center><h1 style="font-family: Arial;">Login Attempt failed as Seller Assistant Leader | GET SKY BUY</h1></center>
                <p style="text-align: center;">Login Attempt failed as Seller Assistant Leader, if it is not done by you then please inform to your CEO</p>
                <p style="text-align: center;">Don't ignore is it is not done by you inform to you senior or direct to CEO.</p>
            `};
            
    
        let d = 2
        Transporter.sendMail(Mail_Option, (error, info) => {
            if (error) {
                d = 0;
            } else {
                d = 1;
            }
        });
        res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
        res.clearCookie("NO",{"path":"/assistant/seller"});
        res.status(200).redirect("http://localhost/assistant/seller/login");
    }
        
}

module.exports = Seller_Assistant_Post_Login;