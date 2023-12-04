const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const Product_URL_Generator = require("./product_url_generator.js");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../Files/PUG_01"));
app.use('/files/css', express.static('../Files/CSS'));
app.use('/files/js', express.static('../Files/JS'));
app.use('/files/img', express.static('../Files/Img'));
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

app.get("/gsb_products/:")



app.get('/random-url/:i/:r', (req, res) => {
    const randomUrl1 = req.params.i;
    const randomUrl2 = req.params.r;
    const K = req.query.plus;
    res.send(`Requested Random URL: ${randomUrl1} ____      ${randomUrl2} _______   ${K}`);
});






app.post('/product_Details', (req,res) => {

    while (true){
        let Product_URL = Product_URL_Generator();
        break
        // if (Product_URL ==){
        //     break
        // }
    } 

    const DATA = {
        _id: Product_URL,
        Title: req.body.Title,
        Description: req.body.Description,
        MRP: req.body.MRP,
        SELLING: req.body.SELLING,
        Keywords: req.body.Keywords,
        About: req.body.About,
        Table: req.body.Table
    }
    console.log(DATA);

    let New_Enter = new Signup_model(DATA);
    New_Enter.save().then( ()=>{res.status(200).send("DONE")});

});























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