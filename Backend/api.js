const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require('cookie-parser');



// _______________________________________________________________________________________________________
const Signup_Post = require("./Signup_Post.js");
const Signup_Get = require("./Signup_Get.js");
// _______________________________________________________________________________________________________
const {Login_Post} = require("./Login_Post.js");
const Login_Get = require("./Login_Get.js");
// _______________________________________________________________________________________________________
const Logout_Get = require("./Logout_Get.js");
const Logout_Post = require("./Logout_Post.js");
// _______________________________________________________________________________________________________





const Home = require("./Home.js");

// _______________________________________________________________________________________________________
const Main_Admin = require("./Main_Admin/Main_Admin.js");
const Main_Admin_Post = require("./Main_Admin/Main_Admin_Post.js");
const Main_Admin_GET = require("./Main_Admin/Main_Admin_GET.js");
const Admin_Assistant = require("./Main_Admin/Admin_Assistant.js");



const Admin_Assistant_Reg = require("./Admin_Assistant_Reg.js");


const Admin_Assistant_Search = require("./Main_Admin/Admin_Assistant_Search.js");
const Admin_Assistant_Update = require("./Main_Admin/Admin_Assistant_Update.js");

const Product_Assistant_Get = require("./Assistant_Admin/Product_Assistant_Get.js");

const Seller_Assistant_Get = require("./Assistant_Admin/Seller_Assistant_Get.js");
const Seller_Assistant_Post = require("./Assistant_Admin/Seller_Assistant_Post.js");

const Seller_Assistant_Get_Login = require("./Assistant_Admin/Seller_Assistant_Get_Login.js");
const Seller_Assistant_Post_Login = require("./Assistant_Admin/Seller_Assistant_Post_Login.js");

const Product_Assistant_Login_Get = require("./Assistant_Admin/Product_Assistant_Login_Get.js");
const Product_Assistant_Login_Post = require("./Assistant_Admin/Product_Assistant_Login_Post.js");


const Product_Assistant_Add_Post = require("./Assistant_Admin/Product_Assistant_Add_Post.js");
const Product_Assistant__Search_Post = require("./Assistant_Admin/Product_Assistant__Search_Post.js");
const Product_Assistant__Product_Post = require("./Assistant_Admin/Product_Assistant__Product_Post.js");

const Product_Assistant__Product_Update_Post = require("./Assistant_Admin/Product_Assistant__Product_Update_Post.js");



const Admin_Analytics = require("./Main_Admin/Admin_Analytics.js");

const Seller_Login_Get = require("./SELLER/Seller_Login_Get.js");
const Seller_Login_Post = require("./SELLER/Seller_Login_Post.js");
const Seller_Seller_Get = require("./SELLER/Seller_Signup_Get.js");
const Seller_Seller_Post = require("./SELLER/Seller_Signup_Post.js");

const Seller_Home = require("./Seller/Seller_Home.js");






const Product_Page = require("./Product/Product_Page.js");
const Product_Search = require("./Product/Product_Search.js");





const Send_Ver = require("./Assistant_Mail/Send_Ver.js");
const Send_Ass = require("./Assistant_Mail/Send_Ass.js");




app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../Files/PUG_01"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/files/css', express.static('../Files/CSS'));
app.use('/files/js', express.static('../Files/JS'));
app.use('/files/img', express.static('../Files/Img'));
app.use('/gsb/documents/', express.static('../Files/Documents'));
app.use('/product/img', express.static('../Served_Images_Product'));



var cors = require('cors')
app.use(cors())


app.use('/z');























app.get("/a", (req, res) => {
    res.status(200).send(`<center>Unable to send Mail <a href="/admin/assistant">GO TO HOME PAGE</a></center>`);
});


// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

app.get("/admin/login", (req, res) => {Main_Admin_GET(req, res)});
app.post("/admin/login",async (req, res) => {Main_Admin_Post(req, res)});

app.get("/admin",async (req, res) => {Main_Admin(req, res)});

app.get("/admin/assistant",async (req, res) => {Admin_Assistant(req, res)});
app.post("/admin/assistant/registration",async (req, res) => {Admin_Assistant_Reg(req, res)});
app.post("/admin/assistant/search",async (req, res) => {Admin_Assistant_Search(req, res)});
app.post("/admin/assistant/update",async (req, res) => {Admin_Assistant_Update(req, res)});

app.get("/admin/Analytics",async (req, res) => {Admin_Analytics(req, res)});


// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------





const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../Served_Images_Product'));
    },
    filename: (req, file, cb) => {
        cb(null,  Date.now() +  "_" + file.fieldname + '_'  + file.originalname);
    }
});


const Photo_Upload = multer({ storage: storage });

const uploadMiddleware1 = Photo_Upload.fields([
    { name: 'File_1', maxCount: 1 },
    { name: 'File_2', maxCount: 1 },
    { name: 'File_3', maxCount: 1 },
    { name: 'File_4', maxCount: 1 },
    { name: 'File_5', maxCount: 1 },
    { name: 'File_6', maxCount: 1 },
    { name: 'File_7', maxCount: 1 },
    { name: 'File_8', maxCount: 1 },
    { name: 'File_9', maxCount: 1 },
    { name: 'File_10', maxCount: 1 }
]);

app.get("/assistant/product",async (req, res) => {Product_Assistant_Get(req, res)});
app.post("/assistant/product/add",uploadMiddleware1,async (req, res) => {Product_Assistant_Add_Post(req, res)});
app.post("/assistant/product/seller/search",async (req, res) => {Product_Assistant__Search_Post(req, res)});
app.post("/assistant/product/product/search",async (req, res) => {Product_Assistant__Product_Post(req, res)});

app.post("/assistant/product/product/update",async (req, res) => {Product_Assistant__Product_Update_Post (req, res)});





app.get("/assistant/product/login",async (req, res) => {Product_Assistant_Login_Get(req, res)});
app.post("/assistant/product/login",async (req, res) => {Product_Assistant_Login_Post(req, res)});


app.get("/assistant/seller",async (req, res) => {Seller_Assistant_Get(req, res)});
app.post("/assistant/seller",async (req, res) => {Seller_Assistant_Post(req, res)});
app.get("/assistant/seller/login",async (req, res) => {Seller_Assistant_Get_Login(req, res)});
app.post("/assistant/seller/login",async (req, res) => {Seller_Assistant_Post_Login(req, res)});

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

app.get("/admin/assistant/new/user",async (req, res) => {Send_Ver(req, res)});
app.post("/admin/assistant/new/user",async (req, res) => {Send_Ass(req, res)});


// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------




app.get("/",async (req, res) => {Home(req, res)});
app.get("/s",async (req, res) => {
    res.status(200).render("Home");
}    
);



app.get("/signup", async (req, res) => {Signup_Get(req, res)});
app.post("/signup", async (req, res) => {Signup_Post(req, res)});

app.get("/login", async (req, res) => {Login_Get(req, res)});
app.post("/login", async (req, res) => {Login_Post(req, res)});

app.get("/logout", async (req, res) => {Logout_Get(req, res)});
app.post("/logout", async (req, res) => {Logout_Post(req, res)});


app.get("/seller/login", async (req, res) => {Seller_Login_Get(req, res)});
app.post("/seller/login", async (req, res) => {Seller_Login_Post(req, res)});

app.get("/seller/signup", async (req, res) => {Seller_Signup_Get(req, res)});
app.post("/seller/signup", async (req, res) => {Seller_Signup_Post(req, res)});




app.get("/product/:Url_P", async (req, res) => {Product_Page(req,res)});


app.post("/input_search", async (req, res) => {Product_Search(req,res)});



// app.get("/product/:product_url", async (req, res) => {
//     let req_url = req.params.product_url;























// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, '../Products_Images/Product_2');
//     },
//     filename: (req, file, cb) => {
//         let a = req.body.MRP;
//         let b = req.body.Selling_Price;
//         cb(null, a + "_" +file.fieldname + '-' + b + path.extname(file.originalname));
//     }
// });


// const Photo_Upload = multer({ storage: storage });





// app.post("/seller_add_product",
    // Photo_Upload.fields([
    //     { name: 'File_1', maxCount: 1 },
    //     { name: 'File_2', maxCount: 1 },
    //     { name: 'File_3', maxCount: 1 },
    //     { name: 'File_4', maxCount: 1 },
    //     { name: 'File_5', maxCount: 1 },
    //     { name: 'File_6', maxCount: 1 },
    //     { name: 'File_7', maxCount: 1 },
    //     { name: 'File_8', maxCount: 1 },
    //     { name: 'File_9', maxCount: 1 }
    // ]),
    // async (req, res) => {
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
// let req_url = req.params.product_url;

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

app.get('*', (req, res) => {
    res.status(404).send('<h1><center>Page Not Found</h1></center>');
});

let a = process.env.PORT || 80;
app.listen(a, () => {
    console.log("We are connected to server at port 80");
    console.log("Link: http://192.168.0.44/signup");
});


// module.exports.handler = serverless(app);