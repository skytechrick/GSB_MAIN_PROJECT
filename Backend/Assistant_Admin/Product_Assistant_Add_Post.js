const {Product, New_Worker_Model, Seller} = require("../All_Models.js");
const Profile_ID_G = require("../Main_Admin/Profile_ID_G.js");
const Product_URL_Generator = require("../product_url_generator.js");

const fs = require("fs");

const path = require('path');
const nodemailer = require("nodemailer");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skybuy.ceo@gmail.com',
        pass: 'ucyj phsb oqyq zkox'
    }
});
    
const Product_Assistant_Add_Post = async (req, res) => {
    let cook = req.cookies;
    
    let cook_NO = cook.NOP;
    let cook_PID= cook.AS_PRO;


    // console.log(req.body);

    if(cook_NO && cook_PID){
        let list = await New_Worker_Model.find({});
        let element;
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            let a = element.Mobile_Number;
            if(a == cook_NO && element.Assistant_Type == "Product Assistant leader"){
                
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(element.LOG_AUTH == cook_PID){


                let Data = await Product.find({});
                let IDs;
                while (true) {
                    let x = 1;
                    IDs = Profile_ID_G();
                    for (let i = 0; i < Data.length; i++) {
                        const element = Data[i];
                        if (element.Product_ID == IDs) {
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
                
                let URLs;
                while (true) {
                    let x = 1;
                    URLs = Product_URL_Generator();
                    for (let i = 0; i < Data.length; i++) {
                        const element = Data[i];
                        if (element.Product_URL == URLs) {
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



                



                let {
                    Brand_Name,
                    Cost_Price,
                    Description,
                    MRP,
                    Quantity_Available,
                    Sell_Price,
                    Title,
                    Type,
                    HashTags,
                    Seller_ID,
                } = req.body;
            
                if(Brand_Name && Cost_Price && Description && MRP && Quantity_Available && Sell_Price && Title && Type && HashTags && Seller_ID){
                    if(Description.length > 1 && Title.length > 1  && Type.length > 1  && HashTags.length > 1){
                    // if(Brand_Name.length > 1  && Description.length > 1    && Title.length > 1  && Type.length > 1  && HashTags.length > 1  && Seller_ID.length > 1 ){


                        let DS = (String(HashTags).split(','));
                        let DF = [];
                        DS.forEach(element => {
                            element =  element.trim().toLowerCase();
                            DF.push(element);
                        });
                        
                        let OPTIONSSS = [];
                        for (let index = 0; index < 16; index++) {
                            let po = `Option${index + 1}`;
                            if (req.body[po] && req.body[po].length > 1) {
                                OPTIONSSS.push(req.body[po].trim());
                            }
                        }
                        let Table = [];
                        for (let index = 0; index < 30; index++) {
                            let xc = `Inp_Key_${index + 1}`;
                            let s = `Inp_Val_${index + 1}`;
                            if (req.body[xc] && req.body[xc].length > 1) {
                                Table.push(
                                    {
                                        Key: req.body[xc],
                                        Value: req.body[s]
                                    }
                                );
                            }
                        }

                        

                        let Added_ID = element.Profile_ID;
                        
                        let Options = OPTIONSSS;


                        let XCCC = Description.trim();
                        let FC = XCCC.split("+");
                        XCCC = FC.join("<br>");
                     
                        // XCCC = XCCC;




                        let ds = new Object(req.files);
                        let Image_Locaitons = []
                        for (let index = 0; index < 10; index++) {
                            let dsda = `File_${index + 1}`;
                            if (ds[dsda]) {
                                let data = ds[dsda][0].filename;
                                let final_FIle = "/product/img/" + data;
                                Image_Locaitons.push(final_FIle);
                            }
                        };
                        let PP = {
                            Added_ID: Added_ID,
                            Seller_ID:Seller_ID,
                            Product_ID: IDs, //-=--------
                            Verified:"No",
                            Product_URL: URLs,
                            Title: Title.trim(),
                            Type: Type.trim(),
                            Quantity_Available: Quantity_Available,
                            Options:Options,
                            Brand_Name: Brand_Name.trim(),
                            HashTags: DF,
                            Prize: {
                                MRP: MRP,
                                Cost_Price: Cost_Price,
                                Sell_Price: Sell_Price,
                                Our_Prize: "0",
                                Our_Margin: "0",
                            },
                            Revenue:{
                                Total_Sales:"454454",
                                Total_Delivered: "65767",
                                Total_Returned: "4474",
                                Total_Spend: "7756",
                                Overall_Profit:"44445",
                            },
                            Description: XCCC,
                            Table: Table,
                            Image_Locaitons: Image_Locaitons,
                            Review:[
                                {
                                    User_ID: "646444444",
                                    User_Name:"Rick Sarkar",
                                    Order_ID: "5454455454",
                                    Review_In_Short: "Good Product you must buy || Samsung Galaxy",
                                    Review_In_Brief: "Good Product you must buy || Samsung Galaxy camera s104 you are sad i know but i dont have anything to do with you but you are the membeer of amazon and i would like to describe nice to meet you and i hope we will meet again after few years, and I love my country India, Thank you your loving shake good to know Thank you | GET SKY BUY",
                                    Verified:"Yes",
                                    Images:[
                                        "sdfasdasdsa",
                                        "sadadasdsa asdsadas asd as",
                                        "sd adsa dsad sad asd"
                                    ],
                                    Date_Of:"16/19/2024 | 5:34pm",
                                    Rating:"5",
                                },
                            ],
                            QnA:[
                                {
                                    Q: "What is the charging time it takes",
                                    A: "1 hour",
                                }
                            ],
                            Order:{
                                Total_No_Of_Orders: "4",
                                Total_Delivered: "2",
                                Total_RTO:"1",
                                Total_Pending: "1",
                            },
                            Orders_Date: [
                                {
                                    Order_ID: "152452425",
                                    Date_Of_Orders: "16/19/2024 | 5:34pm",
                                    Delivered: "Yes",
                                },
                            ],
                            Request:[
                                {
                                    Req_NO:"0",
                                }
                            ]
                        }

                        


                        
                        let list = await Seller.findOne({Profile_ID: PP.Seller_ID});
                        
                        const Mail_Option = {
                            from: 'Notification <skybuy.ceo@gmail.com>',
                            to: list.Email,
                            subject: 'Congratulations, one product is added successfully to your Account | GET SKY BUY', 
                            html: `
                                <div style="max-width:600px; width: 100%; margin:auto;">
                                    <center><h1 style="font-family: Arial;">Congratulations, one product is added successfully to your Account</h1></center>
                                    <p style="text-align: center;">Product Details are:</p>
                                    <hr>
                                    <p style="padding:5px; margin:5px; text-align: center;">Product ID: ${PP.Product_ID}</p>
                                    <p style="padding:5px; margin:5px; text-align: center;">Product URL: http://localhost/product/${PP.Product_URL} . It will be visible after it is validate by the CEO or Senior.</p>
                                    <hr>
                                    <p style="text-align: center;">GET SKY BUY</p>
                                </div>
                            `};
                            
                    
                        let d = 2
                        Transporter.sendMail(Mail_Option, (error, info) => {
                            if (error) {
                                d = 0;
                                console.log("Error"+error);
                            } else {
                                d = 1;
                            }
                        });
                        setTimeout(() => {
                            
                            if(d == 1){
                                
                                let Ready = new Product(PP);
                                Ready.save().then(() =>{
                                    res.status(200).json({ Message: 'Successfully Added' });
                                });
                            }else{
                                let ds = new Object(req.files);

                                for (let index = 0; index < 10; index++) {
                                    let dsda = `File_${index + 1}`;
                                    if (ds[dsda]) {
                                        let data = ds[dsda][0].filename;
                                        let filePath = path.join(__dirname, '../../Served_Images_Product', data);
                                        
                                        fs.unlinkSync(filePath, (err) => {
                                            if (err) {
                                                console.error(`Error deleting file ${data}: ${err.message}`);
                                            } else {
                                                console.log(`File ${data} deleted successfully`);
                                            }
                                        });
                                    }
                                }
                                res.status(200).json({ Message: 'Unable to add/Send Confirmation Mail' });
                            }
                        }, 4200);
                    }else{
                        let ds = new Object(req.files);

                        for (let index = 0; index < 10; index++) {
                            let dsda = `File_${index + 1}`;
                            if (ds[dsda]) {
                                let data = ds[dsda][0].filename;
                                let filePath = path.join(__dirname, '../../Served_Images_Product', data);
                                
                                fs.unlinkSync(filePath, (err) => {
                                    if (err) {
                                        console.error(`Error deleting file ${data}: ${err.message}`);
                                    } else {
                                        console.log(`File ${data} deleted successfully`);
                                    }
                                });
                            }
                        }
                        res.status(200).json({ Message: 'Unable to add' });
                    }
                }else{
                    let ds = new Object(req.files);

                    for (let index = 0; index < 10; index++) {
                        let dsda = `File_${index + 1}`;
                        if (ds[dsda]) {
                            let data = ds[dsda][0].filename;
                            let filePath = path.join(__dirname, '../../Served_Images_Product', data);
                            
                            fs.unlinkSync(filePath, (err) => {
                                if (err) {
                                    console.error(`Error deleting file ${data}: ${err.message}`);
                                } else {
                                    console.log(`File ${data} deleted successfully`);
                                }
                            });
                        }
                    }
                    res.status(200).json({ Message: 'Unable to add' });
                }
            }else{
                res.clearCookie("PID",{"path":"/assistant/product"});
                res.clearCookie("NOP",{"path":"/assistant/product"});
                let ds = new Object(req.files);

                for (let index = 0; index < 10; index++) {
                    let dsda = `File_${index + 1}`;
                    if (ds[dsda]) {
                        let data = ds[dsda][0].filename;
                        let filePath = path.join(__dirname, '../../Served_Images_Product', data);
                        
                        fs.unlinkSync(filePath, (err) => {
                            if (err) {
                                console.error(`Error deleting file ${data}: ${err.message}`);
                            } else {
                                console.log(`File ${data} deleted successfully`);
                            }
                        });
                    }
                }
                
                res.status(200).json({ Message: 'Unable to add' });
            }
        }else{
            res.clearCookie("PID",{"path":"/assistant/product"});
            res.clearCookie("NOP",{"path":"/assistant/product"});
            let ds = new Object(req.files);

            for (let index = 0; index < 10; index++) {
                let dsda = `File_${index + 1}`;
                if (ds[dsda]) {
                    let data = ds[dsda][0].filename;
                    let filePath = path.join(__dirname, '../../Served_Images_Product', data);
                    
                    fs.unlinkSync(filePath, (err) => {
                        if (err) {
                            console.error(`Error deleting file ${data}: ${err.message}`);
                        } else {
                            console.log(`File ${data} deleted successfully`);
                        }
                    });
                }
            }
            res.status(200).json({ Message: 'Unable to add' });
        }
    }else{

        // Assuming req.files is provided
        let ds = new Object(req.files);

        for (let index = 0; index < 10; index++) {
            let dsda = `File_${index + 1}`;
            if (ds[dsda]) {
                let data = ds[dsda][0].filename;
                let filePath = path.join(__dirname, '../../Served_Images_Product', data);
                
                fs.unlinkSync(filePath, (err) => {
                    if (err) {
                        console.error(`Error deleting file ${data}: ${err.message}`);
                    } else {
                        console.log(`File ${data} deleted successfully`);
                    }
                });
            }
        }

        
        res.clearCookie("PID",{"path":"/assistant/product"});
        res.clearCookie("NOP",{"path":"/assistant/product"});
        res.status(200).json({ Message: 'Unable to add' });
    }
}
module.exports = Product_Assistant_Add_Post;