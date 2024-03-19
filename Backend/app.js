const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require('cookie-parser');
// _______________________________________________________________________________________________________
const Signup_Post = require("./Signup_Post");
const Signup_Get = require("./Signup_Get");
// _______________________________________________________________________________________________________
const {Login_Post} = require("./Login_Post.js");
const Login_Get = require("./Login_Get.js");
// _______________________________________________________________________________________________________
const Home = require("./Home")

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../Files/PUG_01"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/files/css', express.static('../Files/CSS'));
app.use('/files/js', express.static('../Files/JS'));
app.use('/files/img', express.static('../Files/Img'));

app.use('/product/img', express.static('../Products_Images/Product_2'));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../Products_Images/Product_2');
    },
    filename: (req, file, cb) => {
        let a = req.body.MRP;
        let b = req.body.Selling_Price;
        cb(null, a + "_" +file.fieldname + '-' + b + path.extname(file.originalname));
    }
});










app.get("/",async (req, res) => {Home(req, res)});




app.get("/signup", async (req, res) => {Signup_Get(req, res)});
app.post("/signup", async (req, res) => {Signup_Post(req, res)});
app.get("/login", async (req, res) => {Login_Get(req, res)});
app.post("/login", async (req, res) => {Login_Post(req, res)});















const Photo_Upload = multer({ storage: storage });


// const PRO_DAT = new mongoose.Schema({
    
//     Title:{
//         type:String
//     },
//     Description:{
//         type:String
//     },
//     MRP:{
//         type:String
//     },
//     SELLING:{
//         type:String
//     },
//     Keywords:{
//         type:String
//     },
//     About:{
//         type:String
//     },
//     Table:{
//         type:String
//     }
// });


// const Product_Add_Schema = new mongoose.Schema({
//     Product_A_URL:{
//         type:String
//     },
//     Title:{
//         type:String
//     },
//     Sub_Title:{
//         type:String
//     },
//     MRP:{
//         type:String
//     },
//     Selling_Price:{
//         type:String
//     },
//     Quantity_Available:{
//         type:String
//     },
//     Description:{
//         type:String
//     },
//     PD1:{
//         type:String
//     },
//     PD1V:{
//         type:String
//     },
//     PD2:{
//         type:String
//     },
//     PD2V:{
//         type:String
//     },
//     PD3:{
//         type:String
//     },
//     PD3V:{
//         type:String
//     },
//     PD4:{
//         type:String
//     },
//     PD4V:{
//         type:String
//     },
//     PD5:{
//         type:String
//     },
//     PD5V:{
//         type:String
//     },
//     PD6:{
//         type:String
//     },
//     PD6V:{
//         type:String
//     },
//     Keywords:{
//         type:String
//     },
//     Photo_File_1_URL: {
//         type:String
//     },
//     Photo_File_2_URL: {
//         type:String
//     },
//     Photo_File_3_URL: {
//         type:String
//     },
//     Photo_File_4_URL: {
//         type:String
//     },
//     Photo_File_5_URL: {
//         type:String
//     },
//     Photo_File_6_URL: {
//         type:String
//     },
//     Photo_File_7_URL: {
//         type:String
//     },
//     Photo_File_8_URL: {
//         type:String
//     },
//     Photo_File_9_URL: {
//         type:String
//     }

// });

// const Product_Model = mongoose.model("Products", Product_Add_Schema);
// const Signup_model = mongoose.model('PRODUCTS_Details', PRO_DAT);



// ___________________________________________________________
// ___________________________________________________________
// ___________________________________________________________
// ___________________________________________________________

// ___________________________________________________________
// ___________________________________________________________
// ___________________________________________________________
// ___________________________________________________________


// app.get("/", async (req, res) => {
//     // const data = await Signup_model.find();

//     // res.json(data);
//     res.status(200).render("Home");

// });
// app.get("/seller_signup", (req, res) => {
//     res.status(200).render("Seller_Signup");
// });
// app.get("/seller_login", (req, res) => {
//     res.status(200).render("Seller_Login");
// });

// app.get("/seller_profile", (req, res) => {
//     res.status(200).render("Seller_Profile");
// });

// app.get("/seller_add_product", (req, res) => {
//     res.status(200).render("Seller_Add_Product")

// })

// app.post("/seller_add_product",
//     Photo_Upload.fields([
//         { name: 'File_1', maxCount: 1 },
//         { name: 'File_2', maxCount: 1 },
//         { name: 'File_3', maxCount: 1 },
//         { name: 'File_4', maxCount: 1 },
//         { name: 'File_5', maxCount: 1 },
//         { name: 'File_6', maxCount: 1 },
//         { name: 'File_7', maxCount: 1 },
//         { name: 'File_8', maxCount: 1 },
//         { name: 'File_9', maxCount: 1 }
//     ]),
//     async (req, res) => {
//     const files = req.files;
//     let lp = 0;
//     let dataURL = await Product_Model.find();
//     function DF() {
//         let Url_1 = "TIME_PASS";
//         while (true) {
//             Url_1 = Product_URL_Generator();
//             for (let i = 0; i < dataURL.length; i++) {
//                 const ele = dataURL[i];
//                 let T = ele.Product_A_URL;
//                 if (T == Url_1){
//                     lp = 1;
//                     break;
//                 }
//             };
//             if (lp==0) {
//                 break;
//             }
//         }
//         return Url_1;
//     }
//     let Final_URL = DF();
//     const data = {
//         Product_A_URL: Final_URL,

//         Title: req.body.Title,
//         Sub_Title: req.body.Sub_Title,

//         MRP: req.body.MRP,
//         Selling_Price: req.body.Selling_Price,

//         Quantity_Available: req.body.Quantity_Available,
//         Description: req.body.Description,

//         PD1: req.body.Product_Details_1,
//         PD1V: req.body.Product_Details_1V,

//         PD2: req.body.Product_Details_2,
//         PD2V: req.body.Product_Details_2V,

//         PD3: req.body.Product_Details_3,
//         PD3V: req.body.Product_Details_3V,

//         PD4: req.body.Product_Details_4,
//         PD4V: req.body.Product_Details_4V,

//         PD5: req.body.Product_Details_5,
//         PD5V: req.body.Product_Details_5V,

//         PD6: req.body.Product_Details_6,
//         PD6V: req.body.Product_Details_6V,

//         Keywords: req.body.Keywords
//     }
//     Object.keys(files).forEach(key => {
//         const file = files[key][0];
//         let a = req.body.MRP;
//         let b = req.body.Selling_Price;
//         let file_name = a + "_" +file.fieldname + '-' + b + path.extname(file.originalname);
//         data[`Photo_${key}_URL`] = `/product/img/${file_name}`;
//         console.log(`Received file ${file_name}, size: ${file.size} bytes`);
//     });
//     console.log('Form JSON:', data);


//     let New_Enter = new Product_Model(data);
//     New_Enter.save().then( ()=>{
        
//         res.status(200).send("Product added successfully...");
//     });
    
// })

// app.get("/product/:product_url", async (req, res) => {
//     let req_url = req.params.product_url;
//     let dataURL = await Product_Model.find({});
//     let TP = "None";
//     let ele = "None";
//     let f = 0;
//     for (let i = 0; i < dataURL.length; i++) {
//         ele = dataURL[i];
//         let T = ele.Product_A_URL;
//         if (T == req_url) {
//             TP = ele.Title;
//             f = 0;
//             break;
//         }else{
//             ele = {};
//             f = 1;
//         }
//     };
//     let Photo_File_1_URL = ele.Photo_File_1_URL;
//     let Photo_File_4_URL = ele.Photo_File_4_URL;
//     let Photo_File_5_URL = ele.Photo_File_5_URL;

//     let Selling_Price_Get = ele.Selling_Price;
//     let MRP_Get = ele.MRP;


//     if (f ==0) {
        
//         res.status(200).render("Product_Page",{
//             Title: TP,
            
//             Product_Image1: `<img id="Product_longList-B-1" class="Product_longList-B" src="${Photo_File_1_URL}" alt="${ele.Title}">`,
//             Product_Image2: `<img id="Product_longList-B-2" class="Product_longList-B" src="${Photo_File_5_URL}" alt="${ele.Title}">`,
//             Product_Image3: `<img id="Product_longList-B-3" class="Product_longList-B" src="${Photo_File_1_URL}" alt="${ele.Title}">`,
//             Product_Image4: `<img id="Product_longList-B-4" class="Product_longList-B" src="${Photo_File_4_URL}" alt="${ele.Title}">`,
//             Product_Image5: `<img id="Product_longList-B-5" class="Product_longList-B" src="${Photo_File_5_URL}" alt="${ele.Title}">`,
//             Selling_Price: Selling_Price_Get,
//             MRP: MRP_Get

            
//         });
//     }
//     else{
//         res.status(404).send("Page not found");
//     }
//         // console.log(TP);
//         // res.send(TP);
        
// })


// // /product/XvfuEmHqU1iImuLRiGxI0LhAi
// // http://127.0.0.1:1111/product/XvfuEmHqU1iImuLRiGxI0LhAi

// app.get("/s", (req, res) => {
//     // const newFolderPath = `Product_Images`;
//     const newFolderPath = `../Products_Images/Product_44`;
//     fs.mkdir(newFolderPath, (err) => {
//       if (err) {
//         console.error('Error creating folder:', err);
//       } else {
//         console.log(`Folder created successfully inside`);
//       }
//     });
// });

// app.get("/product_page", (req, res) => {
//     res.status(200).render("Product_Page",{
//         Title:"This is Rick"
//     });
// });

app.listen(80, () => {
    console.log("We are connected to server at port 80");
    console.log("Link: http://192.168.0.44/signup");
});