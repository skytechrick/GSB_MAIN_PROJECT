const nodemailer = require("nodemailer");

const {Assistant_Confirmation} = require("../All_Models.js");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skybuy.ceo@gmail.com',
        pass: 'adny ybcj psfx vsql'
    }
});




Send_Ass = async (req, res) => {
    let Update = req.body.Update;
    console.log(req.body);
    
    
    
    if(Update == "No"){
        let Email = req.body.Em;
        let Name = req.body.Name;

        const Mail_Option = {
            from: 'GET SKY BUY <skybuy.ceo@gmail.com>',
            to: Email,
            subject: 'You have been selected for the Assistant Leader | GET SKY BUY', 
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>You have been selected for the Assistant Leader | GET SKY BUY</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <div class="ma">
                    <h2>Your account has been successfully created - GET SKY BUY</h2>
                    <hr>
                    <div class="G">
                        <p>
                            Hello, <strong>${Name}</strong><br>
                            Congratulations! 😍🥳 You have been selected as the Seller Assistant Leader of our company.
                            Your GSB Assistant account will be created shortly based on the form you have submitted to us.
                        </p>
                        <p>
                            Your main job is to manage the needs that will be provided to you. We will explain you everything what, when and how you need to do.
                        </p>
                        <p>
                            Your work related details will be shared with you via email and WhatsApp. Your WhatsApp contact number is: +91 8436431656 (<em>Call me for emergency problems or click the button for WhatsApp contact</em>)
                            
                            <a class="DF" target="_blank" href="https://wa.me/8436431656">Click Here</a>
                        </p>
                        <p>
                           If you have read through the entire email, please click the button below and send the auto-generated message for confirmation. Otherwise, you will not be permitted to work with our company.<a class="DF" target="_blank" href="https://wa.me/8436431656?text=*Hello,+Sir*%0aMy+name+is:+*${Name}*%0a_I+have+received+the+email+successfully._%0a*Thank+You*">Click Here</a>
                        </p>
            
                        <div style="font-size: 16px;">
                            Home: <a style="position: relative; top: -1px;" href="http://192.168.0.44/">Home</a>
                            Assistant: <a style="position: relative; top: -1px;" href="http://192.168.0.44/assistant">Assistant Pannel</a>
                        </div>
            
                        <p>
                            <span class="ds"><strong>NOTE:</strong></span><span><em>If you are using a laptop or desktop, please click the link first. It will prompt you to open that number in desktop WhatsApp. If the auto-generated message is not set, click on the button again without closing the chat, and the message will be set.</em></span>
                        </p>
                    </div>
            
                    <div class="foot">
                        
                        <div><i>Rick Sarkar</i> - CEO</div>
                        <div>GET SKY BUY</div>
                        <hr><center>Thank You</center>
                        <div class="cc">
            
                            <ul>
                                <li><a href="http://192.168.0.44/">Home</a></li>
                                <li><a href="https://wa.me/8436431656">Contact us</a></li>
                            </ul>
            
                        </div>
                    </div>
            
                </div>
            
                
            </body>
            </html>
            
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
        setTimeout(() => {
            console.log(d)
            if (d==0) {
                res.json({Message:"Cannot sent OTP, retry."})            
            }else if (d==1) {
                let Assistant_Confirmationa = new Assistant_Confirmation({"Email":Email,"Sent":"Yes",Date: Date(),Done:"No"})
                Assistant_Confirmationa.save().then(() => {
                    res.json({Message:"OTP sent successfully"})
                })
            }
        }, 4200);
    

            


    }else if(Update == "Yes"){

    }



}

module.exports = Send_Ass;