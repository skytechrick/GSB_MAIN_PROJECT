const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const Product_URL_Generator = require("./product_url_generator.js");
const bodyParser = require("body-parser");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Products_Images/Product_2');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });



app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../Files/PUG_01"));
app.use('/files/css', express.static('../Files/CSS'));
app.use('/files/js', express.static('../Files/JS'));
app.use('/files/img', express.static('../Files/Img'));

app.use('/product/img', express.static('../Products_Images/Product_2'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/STR', {useNewUrlParser: true, useUnifiedTopology: true});

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
})

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
})


const Sign = mongoose.model("user", Signupa)


const Signup_model = mongoose.model('PRODUCTS_Details',PRO_DAT);

















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

































app.post("/seller_add_product",upload.single('fileToUpload'), (req, res) => {
    
    const data = {
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
    res.status(200).send(data);

})

// ../Products_Images/Product_2
// /product/img



















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
    ;
});

app.listen(1111, () => {
    console.log("We are connected to server at port 1111");
    console.log("Link: http://127.0.0.1:1111");
})