const mongoose = require("mongoose");


const uri = 'mongodb+srv://skytechrick:1234Rick%40%23*@gsbdb.tyzbaqw.mongodb.net/User_Data?retryWrites=true&w=majority&ssl=true&tlsAllowInvalidCertificates=true';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    tlsAllowInvalidCertificates: true
});
// mongoose.connect('mongodb+srv://skytechrick:1234Rick%40%23*@gsbdb.tyzbaqw.mongodb.net/User_Data');

const db = mongoose.connection;
db.on('error',(error) => {
    console.log('MongoDB connection error:');
});

db.once('open',() => {
    console.log('Connected to MongoDB database.');
});




const CreateOrder = {
    User_ID:{type: String},
    Order_ID:{type: String},
    Date: {type: Date},
    Address:{type: Object},
    Product_List:{type: Object},
    Payment_Method:{type: String},
    Payment_Confirmed:{type: String},
    Order_Confirmed:{type: String},
    Order_ID_Payment:{type: String},
    Payment_ID_Payment:{type: String},

}





let PP = {
    Product_ID: { type: String },
    Verified: { type: String },
    Product_URL: { type: String },
    Title: { type: String },
    Type: { type: String },
    Quantity_Available: { type: String },
    Options: { type: Object },
    Brand_Name: { type: String },
    HashTags: { type: Object },
    Delivery_Charge:{type:Number},
    Prize: {
        MRP: { type: String },
        Cost_Price: { type: String },
        Sell_Price: { type: String },
        Our_Prize: { type: String },
        Our_Margin: { type: String },
    },
    Revenue: {
        Total_Sales: { type: String },
        Total_Delivered: { type: String },
        Total_Returned: { type: String },
        Total_Spend: { type: String },
        Overall_Profit: { type: String },
    },
    Description: { type: String },
    Table: { type: Object },
    Image_Locaitons: { type: Object },
    Review: { type: Object },
    QnA: { type: Object },
    Order: {
        Total_No_Of_Orders: { type: String },
        Total_Delivered: { type: String },
        Total_RTO: { type: String },
        Total_Pending: { type: String },
    },
    Orders_Date: { type: Object },
    Added_ID: { type: String },
    Seller_ID: { type: String },
    Request: { type: Object },

}









const Signup_Schema = new mongoose.Schema({
    Profile_Id: {
        type: Number
    },
    Profile_Log: {
        type: String
    },
    First_Name: {
        type: String
    },
    Last_Name: {
        type: String
    },
    Mobile_Number: {
        type: Number
    },
    Email: {
        type: String
    },
    Verified: {
        type: String
    },
    Cart: {
        type: Object
    },
    
    Addresses:{
        type:Object
    },
    Bank: {
        type:Object
    },
    Order_Ids:{
        type:Object
    },
    Favorite:{
        type:Object
    },
    Notification:{
        type:Object
    },
    SB_Coins:{
        type:Object
    },
    Created_Account: {
        type: Date,
    },
    User_Password: {
        type: String
    },
    createdAt: {
        type: Date,
        expires: null
    },
    Authentication: {
        type: Object
    },

});


const New_Worker = new mongoose.Schema(
    {
        Profile_ID: { type: String },
        Acode: { type: String },
        Added_By: { type: String },
        First_Name: { type: String },
        Last_Name: { type: String },
        Mobile_Number: { type: String },
        Email: { type: String },
        Create_Password: { type: String },
        Country_Name: { type: String },
        State_Name: { type: String },
        District_Name: { type: String },
        Pin_Code: { type: String },
        City_Name: { type: String },
        Village_Name: { type: String },
        Locality_Road: { type: String },
        Language: { type: String },
        Your_Age: { type: String },
        Gender: { type: String },
        Bank_Name: { type: String },
        Account_Name: { type: String },
        Account_Number: { type: String },
        Ifsc_Code: { type: String },
        Upi_Number: { type: String },
        Created_Date: { type: Date },
        Verified: { type: String },
        Ban: { type: String },
        Assistant_Type: { type: String },
        Things_Done: { type: Object },
        LOG_AUTH: { type: String },



    }

);




const New_ = new mongoose.Schema({
    Profile_ID: { type: String },
    Name: { type: String },
    Mobile_Number: { type: String },
    WhatsApp_Number: { type: String },
    Email: { type: String },
    Password:{type:String},
    State: { type: String },
    District: { type: String },
    PIN_Code: { type: String },
    City: { type: String },
    Town: { type: String },
    Locality: { type: String },
    Language: { type: String },
    Age: { type: String },
    Gender: { type: String },
    Bank_Name: { type: String },
    IFSC_Code: { type: String },
    UPI: { type: String },
    Shop_Name: { type: String },
    Shop_Type: { type: String },
    State_Shop: { type: String },
    Dist_Shop: { type: String },
    PINcode_Shop: { type: String },
    City_Shop: { type: String },
    Town_Shop: { type: String },
    Locality_Shop: { type: String },
    Done: { type: String },
    Created_Date: { type: Date },
    Product_List: { type: Object },
    Total_Sales: {
        Total_Products_Sales: { type: Number },
        Total_Product_Delivered: { type: Number },
        Total_Product_RTO: { type: Number },
        Total_Product_Pending: { type: Number },
        Sold_Product_Order_ID: { type: Object },

    },
    Total_Profite: {
        Total_Sales: { type: Number },
        Total_Profite: { type: Number },
        Total_RTO: { type: Number },
    },
    Amount: {
        Amount_Paid: { type: Number },
        Amount_Pending: { type: Number },
        Amount_Paid_Dates: {
            // {Date: {type: Date},Amount_Paid: {type: Number},Transcation_ID: {type: String}},
            type: Object,
        }
    },
    Ban: { Type: String },

});








const Product = mongoose.model("Products", PP);
const New_Worker_Mode = mongoose.model("Workers", New_Worker);
const New_Products_Mofule = mongoose.model("Seller", New_);
const Sign_Mol = mongoose.model("Main_User", Signup_Schema);
const CreateOrdera = mongoose.model("Orders", CreateOrder);

module.exports = {
    Signup_Model: Sign_Mol,
    New_Worker_Model: New_Worker_Mode,
    Seller: New_Products_Mofule,
    Product: Product,
    Orders: CreateOrdera,
};








