const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const Product_URL_Generator = require("./product_url_generator.js");
const bodyParser = require("body-parser");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Products_Images/Product_2');
    },
    filename: (req, file, cb) => {
        let a = req.body.Title;
        let b = req.body.MRP;
        cb(null, a + "_" +file.fieldname + '-' + b + path.extname(file.originalname));
    }
});

const Photo_Upload = multer({ storage: storage });



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../Files/PUG_01"));
app.use('/files/css', express.static('../Files/CSS'));
app.use('/files/js', express.static('../Files/JS'));
app.use('/files/img', express.static('../Files/Img'));

app.use('/product/img', express.static('../Products_Images/Product_2'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Test_GSB', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on
(
    'error',
    (error) => {
        console.error('MongoDB connection error:', error);
    }
);
db.once
(
    'open',
    () => {
        console.log('Connected to MongoDB database.');
    }
);



const PRO_DAT = new mongoose.Schema({

    Title:{
        type:String
    },
    Description:{
        type:String
    },
    MRP:{
        type:String
    },
    SELLING:{
        type:String
    },
    Keywords:{
        type:String
    },
    About:{
        type:String
    },
    Table:{
        type:String
    }
});

const Signupa = new mongoose.Schema({

    First_Name:{
        type:String
    },
    Last_Name:{
        type:String
    },
    Mobile_Number:{
        type: Number
    },
    Email:{
        type:String
    },
    Confirm_Password:{
        type:String
    }
});



const Product_Add_Schema = new mongoose.Schema({
    
        Title:{
            type:String
        },
        Sub_Title:{
            type:String
        },
        MRP:{
            type:String
        },
        Selling_Price:{
            type:String
        },
        Quantity_Available:{
            type:String
        },
        Description:{
            type:String
        },
        PD1:{
            type:String
        },
        PD1V:{
            type:String
        },
        PD2:{
            type:String
        },
        PD2V:{
            type:String
        },
        PD3:{
            type:String
        },
        PD3V:{
            type:String
        },
        PD4:{
            type:String
        },
        PD4V:{
            type:String
        },
        PD5:{
            type:String
        },
        PD5V:{
            type:String
        },
        PD6:{
            type:String
        },
        PD6V:{
            type:String
        },
        Keywords:{
            type:String
        },
        Photo_File_1_URL: {
            type:String
        },
        Photo_File_2_URL: {
            type:String
        },
        Photo_File_3_URL: {
            type:String
        },
        Photo_File_4_URL: {
            type:String
        },
        Photo_File_5_URL: {
            type:String
        },
        Photo_File_6_URL: {
            type:String
        },
        Photo_File_7_URL: {
            type:String
        },
        Photo_File_8_URL: {
            type:String
        },
        Photo_File_9_URL: {
            type:String
        }

});

const Product_Model = mongoose.model("Products", Product_Add_Schema);




const Sign = mongoose.model("user", Signupa);
const Signup_model = mongoose.model('PRODUCTS_Details', PRO_DAT);

















app.get("/", async (req, res) => {
    // const data = await Signup_model.find();

    // res.json(data);
    res.status(200).render("Home");

});
app.get("/seller_signup", (req, res) => {
    res.status(200).render("Seller_Signup");
});
app.get("/seller_login", (req, res) => {
    res.status(200).render("Seller_Login");
});
app.get("/signup", (req, res) => {
    res.status(200).render("Signup");
});
app.get("/login", (req, res) => {
    res.status(200).render("Login");
});
app.get("/seller_profile", (req, res) => {
    res.status(200).render("Seller_Profile");
});

app.get("/product_page", (req, res) => {
    res.status(200).render("Product_Page");
});





app.get("/seller_add_product", (req, res) => {
    res.status(200).render("Seller_Add_Product")

})

































app.post("/seller_add_product",
    Photo_Upload.fields([
        { name: 'File_1', maxCount: 1 },
        { name: 'File_2', maxCount: 1 },
        { name: 'File_3', maxCount: 1 },
        { name: 'File_4', maxCount: 1 },
        { name: 'File_5', maxCount: 1 },
        { name: 'File_6', maxCount: 1 },
        { name: 'File_7', maxCount: 1 },
        { name: 'File_8', maxCount: 1 },
        { name: 'File_9', maxCount: 1 }
    ]),
    (req, res) => {
    const files = req.files;

    while (true) {
        let Url_1 = Product_URL_Generator();
        console.log(Url_1);
        let dataURL = Product_Model.find();
        
        console.log("dataURL");
        console.log(dataURL);
        break;

        // if (dataURL===null || dataURL == null || dataURL == ""){
        //     break;
        // }
    }



















    
    
    const data = {
        
        // Product_A_URL: Url_1,

        Title: req.body.Title,
        Sub_Title: req.body.Sub_Title,

        MRP: req.body.MRP,
        Selling_Price: req.body.Selling_Price,

        Quantity_Available: req.body.Quantity_Available,
        Description: req.body.Description,

        PD1: req.body.Product_Details_1,
        PD1V: req.body.Product_Details_1V,

        PD2: req.body.Product_Details_2,
        PD2V: req.body.Product_Details_2V,

        PD3: req.body.Product_Details_3,
        PD3V: req.body.Product_Details_3V,

        PD4: req.body.Product_Details_4,
        PD4V: req.body.Product_Details_4V,

        PD5: req.body.Product_Details_5,
        PD5V: req.body.Product_Details_5V,

        PD6: req.body.Product_Details_6,
        PD6V: req.body.Product_Details_6V,

        Keywords: req.body.Keywords
    }
    // console.log('Form Data:', formData);
    Object.keys(files).forEach(key => {
        const file = files[key][0];
        
        let a = req.body.Title;
        let b = req.body.MRP;
        let file_name = a + "_" +file.fieldname + '-' + b + path.extname(file.originalname);
        data[`Photo_${key}_URL`] = `/product/img/${file_name}`;
        console.log(`Received file ${file_name}, size: ${file.size} bytes`);
    });
    console.log('Form JSON:', data);


    let New_Enter = new Product_Model(data);
    New_Enter.save().then( ()=>{
        
        res.status(200).send("Product added successfully...");
    });
    
    
})




app.get("/a", (req, res) => {
    let a = Product_Model.findOne({});
    console.log(a);
    res.end(a);

})














app.post("/signup_user_create_account/gsb", (req, res) => {
    const Signup_Details ={
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Mobile_Number: req.body.Mobile_Number,
        Email: req.body.Email,
        Confirm_Password: req.body.Confirm_Password
    }


    

    console.log(Signup_Details);
    let New_Enter = new Sign(Signup_Details);
    New_Enter.save().then( ()=>{res.status(200).redirect("/login")});
    
});

app.listen(1111, () => {
    console.log("We are connected to server at port 1111");
    console.log("Link: http://127.0.0.1:1111");
})