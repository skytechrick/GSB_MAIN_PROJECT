const mongoose = require("mongoose");
const Profile_ID = require("./Profile_ID");
mongoose.connect('mongodb://127.0.0.1:27017/User_Data');
const db = mongoose.connection;
db.on('error',(error) => {
    console.log('MongoDB connection error:');
});

db.once('open',() => {
    console.log('Connected to MongoDB database.');
});

const Signup_Schema = new mongoose.Schema({
    Profile_Id:{
        type: Number
    },
    Profile_Log:{
        type: Object
    },
    First_Name:{
        type: String
    },
    Last_Name:{
        type: String
    },
    Mobile_Number:{
        type: Number
    },
    Email:{
        type: String
    },
    User_Password:{
        type: String
    },
    Verified:{
        type: String
    },
    Created_Account: {
        type: Date,
    },
    createdAt:{
        type: Date,
        expires: null
    },
    Authentication:{
        type: Object
    },
    Cart:{
        type:Object
        
    }
});


const New_Worker = new mongoose.Schema(
    {
        Profile_ID: {type: String},
        Acode:{type:String},
        Added_By:{type:String},
        First_Name:{type:String},
        Last_Name: {type:String},
        Mobile_Number: {type:String},
        Email: {type:String},
        Create_Password: {type:String},
        Country_Name: {type:String},
        State_Name: {type:String},
        District_Name: {type:String},
        Pin_Code: {type:String},
        City_Name: {type:String},
        Village_Name: {type:String},
        Locality_Road: {type:String},
        Language: {type:String}, 
        Your_Age: {type:String},
        Gender: {type:String},
        Bank_Name: {type:String},
        Account_Name: {type:String},
        Account_Number: {type:String},
        Ifsc_Code: {type:String},
        Upi_Number: {type:String},
        Created_Date:{type:Date},
        Verified:{type:String},
        Ban:{type:String},
        Assistant_Type:{type:String},
        Things_Done:{type: Object},
        LOG_AUTH:{type:String},
        
        
        
    }
    
);




const a = new mongoose.Schema({
    
    "Email": {type: String},
    "Sent": {type: String},
    "Date": {type: Date},
    "Done":{type: String},
    
})

const New_Product = new mongoose.Schema({
    Name: {type: String},
    Mobile_Number: {type: String},
    WhatsApp_Number: {type: String},
    Email: {type: String},
    State: {type: String},
    District: {type: String},
    PIN_Code: {type: String},
    City: {type: String},
    Town: {type: String},
    Locality: {type: String},
    Language: {type: String},
    Age: {type: String},
    Gender: {type: String},
    Bank_Name: {type: String},
    IFSC_Code: {type: String},
    UPI: {type: String},
    Shop_Name: {type: String},
    Shop_Type: {type: String},
    State_Shop: {type: String},
    Dist_Shop: {type: String},
    PINcode_Shop: {type: String},
    City_Shop: {type: String},
    Town_Shop: {type: String},
    Locality_Shop: {type: String},
    Done: {type: String},
    Created_Date: {type: Date},
    Profile_ID: {type: String},
    Product_List: {type: Object},
    Total_Sales: {
        Total_Products_Sales: {type: Number},
        Total_Product_Delivered: {type: Number},
        Total_Product_RTO: {type: Number},
        Total_Product_Pending: {type: Number},
        Sold_Product_Order_ID:{type: Object},

    },
    Total_Profite: {
        Total_Sales: {type: Number},
        Total_Profite: {type: Number},
        Total_RTO: {type: Number},
    },
    Amount:{
        Amount_Paid:{type:Number},
        Amount_Pending:{type:Number},
        Amount_Paid_Dates:{
            // {Date: {type: Date},Amount_Paid: {type: Number},Transcation_ID: {type: String}},
            type: Object,
        }
    },
    Ban:{Type:String},
        
});






const New_Worker_Mode = mongoose.model("Workers", New_Worker);

const New_Products_Mofule = mongoose.model("Seller", New_Product);
const a_ = mongoose.model("Assistants_Confirmation", a);

const Sign_Mol = mongoose.model("Main_User", Signup_Schema);

module.exports = {
    Signup_Model: Sign_Mol,
    New_Worker_Model: New_Worker_Mode,
    Assistant_Confirmation: a_,
    Seller : New_Products_Mofule,
};
