const {Seller, New_Worker_Model} = require("../All_Models.js");


const Profile_ID_G = require("../Main_Admin/Profile_ID_G.js");

const nodemailer = require("nodemailer");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skybuy.ceo@gmail.com',
        pass: 'ucyj phsb oqyq zkox'
    }
});
    


Seller_Assistant_Post = async (req, res) => {

    
    let COOK = req.cookies.AS_SEL;
    let NO = req.cookies.NO;
    
    
    if (COOK && NO) {
        let list = await New_Worker_Model.find({});
        let element;
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            let a = element.Mobile_Number;
            if(a == NO && element.Assistant_Type == "Sellers Assistant leader"){
                
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(element.LOG_AUTH == COOK){
                let Body = req.body;

                // console.log(IDs);
                let Data = await Seller.find({});
                let IDs;
                while (true) {
                    let x = 1;
                    IDs = Profile_ID_G();
                    for (let i = 0; i < Data.length; i++) {
                        const element = Data[i];
                        if (element.Profile_ID == IDs) {
                            x = 2;
                            break;                                
                        }else{
                            x = 3;
                        }                    
                    };
                    if (x == 3) {
                        break;
                    }
                };
                
                let ID = IDs;
                // console.log(ID);
                
                let Md = {
                    
                    Profile_ID: String(ID),
                    // SubHead: element.Profile_ID,
                    Name: Body.Name,
                    Mobile_Number: Body.Mobile_Number,
                    WhatsApp_Number: Body.WhatsApp_Number,
                    Email: Body.Email,
                    Password:Body.Mobile_Number,
                    State: Body.State,
                    District: Body.District,
                    PIN_Code: Body.PIN_Code,
                    City: Body.City,
                    Town: Body.Town,
                    Locality: Body.Locality,
                    Language: Body.Language,
                    Age: Body.Age,
                    Gender: Body.Gender,
                    Bank_Name: Body.Bank_Name,
                    Account_NO:Body.Account_NO,
                    IFSC_Code: Body.IFSC_Code,
                    UPI: Body.UPI,
                    Shop_Name: Body.Shop_Name,
                    Shop_Type: Body.Shop_Type,
                    State_Shop: Body.State_Shop,
                    Dist_Shop: Body.Dist_Shop,
                    PINcode_Shop: Body.PINcode_Shop,
                    City_Shop: Body.City_Shop,
                    Town_Shop: Body.Town_Shop,
                    Locality_Shop: Body.Locality_Shop,
                    Done: "Yes",
                    Created_Date: Date(),
                    Product_List: [],
                    Total_Sales: {
                        Total_Products_Sales: 0,
                        Total_Product_Delivered: 0,
                        Total_Product_RTO: 0,
                        Total_Product_Pending: 0,
                        Sold_Product_Order_ID:[],
            
                    },
                    Total_Profite: {
                        Total_Sales: 0,
                        Total_Profite: 0,
                        Total_RTO: 0,
                    },
                    Amount:{
                        Amount_Paid:0,
                        Amount_Pending:0,
                        Amount_Paid_Dates:[],
                            // {Date: {type: Date},Amount_Paid: {type: Number},Transcation_ID: {type: String}},
                        
                    },
                    Ban: "No",
                };
                // console.log(Md);

                Md.Email
                
                let L = element.Things_Done.Sellers_ID;
                L.push(Md.Profile_ID);
                let DC = [];
                for (let index = 0; index < L.length; index++) {
                    const e = L[index];
                    if (e == undefined || e == null || e == ""){
                        
                    }else{
                        DC.push(e);
                    }
                }
                let SX = {
                    Sellers_ID: DC
                };
                await New_Worker_Model.updateOne({Mobile_Number:element.Number}, {$set: {Things_Done:SX}});




                const Mail_Option = {
                    from: 'Congratulations <skybuy.ceo@gmail.com>',
                    to: Md.Email,
                    subject: 'Congratulations, your Seller Account is Successfully created | GET SKY BUY', 
                    html: `
                        <div style="max-width:600px; width: 100%; margin:auto;">
                            <center><h1 style="font-family: Arial;">Congratulations, your Seller Account is Successfully created.</h1></center>
                            <p style="text-align: center;">We will provide you all the details and the required this which you must know.</p>
                            <hr>
                            <p style="padding:5px; border:1px solid #aaa; box-shadow: 0 0 5px #aaa; margin:5px; text-align: center;">Your Profile ID: ${Md.Profile_ID}</p>
                            <p style="padding:5px; border:1px solid #aaa; box-shadow: 0 0 5px #aaa; margin:5px; text-align: center;">Name: ${Md.Name}</p>
                            <p style="padding:5px; border:1px solid #aaa; box-shadow: 0 0 5px #aaa; margin:5px; text-align: center;">Mobile Number: ${Md.Mobile_Number}</p>
                            <p style="padding:5px; border:1px solid #aaa; box-shadow: 0 0 5px #aaa; margin:5px; text-align: center;">Email: ${Md.Email}</p>
                            <p style="padding:5px; border:1px solid #aaa; box-shadow: 0 0 5px #aaa; margin:5px; text-align: center;">Password: ${Md.Password}</p>
                            <hr>
                            <p style="text-align: center;">GET SKY BUY</p>
                        </div>
                    `};
                    
            
                let d = 2
                Transporter.sendMail(Mail_Option, (error, info) => {
                    if (error) {
                        d = 0;
                    } else {
                        d = 1;
                    }
                });


            
                let Save = new Seller(Md);
                Save.save().then(()=>{
                    res.json({Message:"Added successfully"});
                })
            
            }else{
                res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                res.clearCookie("NO",{"path":"/assistant/seller"});
                res.json({Message: "Unable to add."});
            }
            
        }else{
            res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
            res.clearCookie("NO",{"path":"/assistant/seller"});
            
            res.json({Message: "Unable to add."});

        }
        
    }else{
        res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
        res.clearCookie("NO",{"path":"/assistant/seller"});
        res.json({Message: "Unable to add."});
    }













}
module.exports = Seller_Assistant_Post;