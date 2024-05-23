
const {New_Worker_Model} = require("./All_Models.js");

const Profile_ID_G = require("./Main_Admin/Profile_ID_G.js");
const fs = require("fs");
const nodemailer = require("nodemailer");

Admin_Assistant_Reg = async (req, res) => {
    
    
    
    const Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'skybuy.ceo@gmail.com',
            pass: 'ucyj phsb oqyq zkox'
        }
    });

    
    let Admin = req.cookies.Admin;

    let auth = fs.readFileSync("./Main_Admin/d.txt","utf8");
    
    
    if (Admin == auth) {
        // console.log(2);
        
        while (true) {
            let data = await New_Worker_Model.find({});
            let Profile_ID_ = Profile_ID_G();
            // console.log(3);
            // console.log(Profile_ID_);
            
            let d = 0;
        
            for (let index = 0; index < data.length; index++) {
                const element = data[index];
                if(element.Profile_ID == Profile_ID_){
                    d = 1;
                    break;
                }else{
                    d = 2;
                };
            }


            if (d == 2) {
                const {Acode, Added_By, First_Name, Last_Name, Mobile_Number, Email, Create_Password, Country_Name, State_Name, District_Name, Pin_Code, City_Name, Village_Name, Locality_Road, Language, Your_Age, Gender, Bank_Name, Account_Name, Account_Number, Ifsc_Code, Upi_Number, Assistant_Type} = req.body
                const se = {
                    "Profile_ID": Profile_ID_,
                    "Acode": Acode,
                    "Added_By": Added_By,
                    "First_Name": First_Name,
                    "Last_Name": Last_Name,
                    "Mobile_Number": Mobile_Number,
                    "Email": Email,
                    "Create_Password": Create_Password,
                    "Country_Name": Country_Name,
                    "State_Name": State_Name,
                    "District_Name": District_Name,
                    "Pin_Code": Pin_Code,
                    "City_Name": City_Name,
                    "Village_Name": Village_Name,
                    "Locality_Road": Locality_Road,
                    "Language": Language, 
                    "Your_Age": Your_Age,
                    "Gender": Gender,
                    "Bank_Name": Bank_Name,
                    "Account_Name": Account_Name,
                    "Account_Number": Account_Number,
                    "Ifsc_Code": Ifsc_Code,
                    "Upi_Number": Upi_Number,
                    "Created_Date": Date.now(),
                    "Verified":"Yes",
                    "Ban":"No",
                    "Assistant_Type":Assistant_Type,
                    "Things_Done":[],
                    "LOG_AUTH":"",

                };
                // console.log(11);

                const Mail_Option = {
                    from: 'GET SKY BUY <skybuy.ceo@gmail.com>',
                    // to: "ricksarkar2005@gmail.com",
                    to: Email,
                    subject: 'You are selected for GSB Assistant Leaders | GET SKY BUY', 
                    html: `
                            <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Assistant Welcome - GSB</title> <style> body{ margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; } .cEwnter { width: 100%; max-width: 600px; margin: auto; /* padding: 0 20px; */ } h1{ margin-top: 0px; padding-top: 20px; font-size: 28px; border-top: 1px solid #aaa; } header{ border-bottom: 1px solid #aaa; } p{ line-height: 22px; } .ds{ position: relative; top: -5px;  padding: 0 20px; padding-bottom: 20px; /* border: 1px solid #aaa; */ margin: auto; box-sizing: border-box; box-shadow: 0 0 5px #aaa; background-color: white; } .red{ color: red; } .cl, .a{ color: #525252; } .sd{ font-size: 15px; font-weight: bold; } .DS{ font-size: 12px; color: #525252; font-weight: normal; } .FONT{ font-size: 15px; } .cs{ width: 100%; } .SDSSD { width: 100%; } .DSADASD { display: inline-block; margin: 0; padding: 0; position: relative; top: -18px; font-size: 32px; color: #ff00f2; border: none; } .sda { padding-top: 15px; }.fdsfdf{ border-radius: 5px; padding: 6px 12px ; color: white; background-color: rgb(0, 102, 255); text-decoration: none; } .fdsfdf:hover{ transition-duration: 300ms; background-color: rgb(64, 141, 255); } </style> </head> <body> <div class="cEwnter">  <img class="cs" src="https://skytechrick.github.io/FILES_SHARE/EMAIL_IMAGE.jpeg" alt="Top_Image"> <div class="ds"> <header> <div class="sda"><img class="SDSSD" src="https://skytechrick.github.io/FILES_SHARE/TEM__THUMBNAILLLLLLLLL.png" alt="Logo">
                            </div> <h1>Congratulations | You are selected for GSB Assistant Leaders</h1> </header> <p> From,<br> <strong> GET SKY BUY - CEO </strong> <div> To, <br> <strong> ${se.First_Name} ${se.Last_Name} <br> </strong> ${se.Village_Name} ${se.Locality_Road} </div> </p> <p> Congratulation🥳️, ${se.First_Name} ${se.Last_Name} </p> <p> You have been selected for the <strong>${se.Assistant_Type}</strong> for Company <strong>GET SKY BUY.</strong> </p> <p> The work and the place of work, everthing will be explained to you via call or meeting personally with live demo. </p> <p> You will be provided a document which has all the list of the work which you have to do. The process, the problems, the issue, the conversation etc. While managing the customers/members/sellers you have to be polite and have to maintain a good reputation of our Company, also you are requested not to violate rules. </p> <div><a class="fdsfdf" style="color: white;" href="http://192.168.0.44/assistant/" target="_blank">Login here</a></div> <h3><u>Your details:</u></h3> <div class="a"> <strong class="cl">Name:</strong> ${se.First_Name} ${se.Last_Name}<br> <strong class="cl">Profile ID:</strong> ${se.Profile_ID} <br> <strong class="cl">Email:</strong> ${se.Email} <br> <strong class="cl">Mobile:</strong> ${se.Mobile_Number} <br> <strong class="cl">Username:</strong> ${se.Email} <br> <strong class="cl">Password:</strong> ${se.Create_Password} <br> </div> <p class="red">Change your Password Immediately, after login.</p> <p class="red">Don't share your password/mail with anyone otherwise you will be fired from our company.</p> <div> <h4> <u> Contact Details: </u> </h4> <p> <strong>WhatsApp number:</strong> +91 84364 31656 <br> <strong>Email:</strong> skybuy.ceo@gmail.com </p> </div> <hr> <div class="sd"> <center> Thank You <br> <span class="DS">Team GSB</span> <br> <span class="DS"> Do not reply to this mail, this is auto generated mail. </span> </center> </div> <div class="FONT"> <center> For any queary contact our me via Mail or Mobile number. </center> </div> </div> </div> </body> </html>
                    `,
                }
                let d = 111;
                
                Transporter.sendMail(Mail_Option, (error, info) => {
                    if (error) {
                        // console.log("A");
                        d = 0;
                    } else {
                        d = 1;
                        // console.log("B");
                    }
                });
                setTimeout( () => {
                    
                    if (d == 1) {
                        // console.log("C");
                        let New_Worker1 = new New_Worker_Model(se);
                        New_Worker1.save().then(() =>{
                            res.status(200).redirect("/admin/assistant/");
                        });
                        // break;
                    }else{
                        // console.log("D");
                        res.status(200).send(`<center style="font-family: Arial, sans-serif; font-size: 30px">Unable to send Mail <a href="/admin/assistant">GO TO HOME PAGE</a></center>`);
                        // break;
                    }
                }, 4100);
                break;
            }
        }
    }else{
        res.clearCookie("Admin");
        // res.json({
        //     Message:"",
        // })
        res.redirect("/admin/login");
    }
    

}
module.exports = Admin_Assistant_Reg;