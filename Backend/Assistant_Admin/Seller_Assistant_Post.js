const {Seller, New_Worker_Model} = require("../All_Models.js");


const Profile_ID_G = require("../Main_Admin/Profile_ID_G.js");


Seller_Assistant_Post = async (req, res) => {

    
    let list = await New_Worker_Model.find({});
    let COOK = req.cookies.AS_SEL;
    let NO = req.cookies.NO;
    let element;
    
    
    if (COOK && NO) {
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

                let IDs = Profile_ID_G();
                console.log(IDs);
                let Data = await Seller.find({});
                while (true) {
                    let x = 1;
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
                console.log(ID);
                let Md = {
                    SubHead: element.Profile_ID,
                    Name: Body.Name,
                    Mobile_Number: Body.Mobile_Number,
                    WhatsApp_Number: Body.WhatsApp_Number,
                    Email: Body.Email,
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
                    Profile_ID: String(ID),
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
                console.log(Md);
            
            
            
            
            
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