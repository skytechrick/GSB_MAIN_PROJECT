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
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________

const Cus_Profile_Page = require("./Customer_Side/Cus_Profile_Page.js");
const Cus_Address_Page = require("./Customer_Side/Cus_Address_Page_Get.js");
const Cus_Address_Page_Post = require("./Customer_Side/Cus_Address_Page_Post.js");
const Cus_Address_Del_Post = require("./Customer_Side/Cus_Address_Del_Post.js");
const Cus_Address_Default_Post = require("./Customer_Side/Cus_Address_Default_Post.js");
const Cus_Address_Edit_Post = require("./Customer_Side/Cus_Address_Edit_Post.js");
const Cus_Address_Edit_Req_Post = require("./Customer_Side/Cus_Address_Edit_Req_Post.js");

// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________

const Cart_Page_Get = require("./Cart/Cart_Page_Get.js");
const Cart_Button_Anywhere = require("./Cart/Cart_Button_Anywhere.js");
const Cart_Delete = require("./Cart/Cart_Delete.js");
const Cart_Stock_Update = require("./Cart/Cart_Stock_Update.js");

const Cart_CheckOut_Post = require("./Cart/Cart_CheckOut_Post.js");
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________


const Cart_Order_Post = require("./OrderS/Cart_Order_Post.js");
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________

const Cart_Order_Post_Payment = require("./Payments_Folder/Cart_Order_Post_Payment.js");
const cart_confirm_response = require("./Payments_Folder/cart_confirm_response.js");
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________


const Order_Get = require("./Orders_Refunds/Orders_Refunds.js")
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________



const privacy_and_policy = require("./Company_Related/privacy_and_policy_Get.js");
const terms_and_conditions = require("./Company_Related/terms_and_conditions_Get.js");
const Contact_Us = require("./Company_Related/Contact_Us.js");
const Complaint_Us = require("./Company_Related/Complaint_Us.js");
const setting = require("./Customer_Side/setting.js");
const setting_post = require("./Customer_Side/setting_post.js");
const change_Password_PUT = require("./Customer_Side/change_Password_PUT.js");
const forgot_passworrd_GET = require("./Customer_Side/forgot_passworrd_GET.js");
const forgot_passworrd_PUT = require("./Customer_Side/forgot_passworrd_PUT.js");
const forgot_passworrd_PUT_OTP = require("./Customer_Side/forgot_passworrd_PUT_OTP.js");
const forgot_passworrd_PUT_Change = require("./Customer_Side/forgot_passworrd_PUT_Change.js");
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
// _______________________________________________________________________________________________________
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

const SMALL_PRO = require("./Product/SMALL_PRO.js");
const PRODUCT_ROW = require("./Product/PRODUCT_ROW.js");


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
app.post("/assistant/product/add",uploadMiddleware1,async (req, res) => {Product_Assistant_Add_Post(req, res)});



app.get("/assistant/product",async (req, res) => {Product_Assistant_Get(req, res)});
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

app.post("/product/smallsize", async (req, res) => {SMALL_PRO(req,res)});
app.post("/product/row", async (req, res) => {PRODUCT_ROW(req,res)});

app.post("/input_search", async (req, res) => {Product_Search(req,res)});




app.get('/profile', async (req, res) => {Cus_Profile_Page(req, res)});
app.get('/address', async (req, res) => {Cus_Address_Page(req, res)});
app.post('/address_add', async (req, res) => {Cus_Address_Page_Post(req, res)});
app.post('/address_del', async (req, res) => {Cus_Address_Del_Post(req, res)});
app.post('/address_edit', async (req, res) => {Cus_Address_Edit_Post(req, res)});
app.post('/address_edit_req', async (req, res) => {Cus_Address_Edit_Req_Post(req, res)});
app.post('/address_set_default', async (req, res) => {Cus_Address_Default_Post(req, res)});


app.get('/cart', async (req, res) => {Cart_Page_Get(req, res)});
app.post('/cart_add', async (req, res) => {Cart_Button_Anywhere(req, res)});
app.post('/cart_delete', async (req, res) => {Cart_Delete(req, res)});
app.post('/cart_update', async (req, res) => {Cart_Stock_Update(req, res)});

app.get('/cart/checkout', (req, res) => {res.status(301).redirect("http://192.168.0.44/cart")});

app.post('/cart/checkout', async (req, res) => {Cart_CheckOut_Post(req, res)});





app.post('/cart_confirm_Post', async (req, res) => {Cart_Order_Post(req, res)});
app.post("/cart_confirm_Post/payment", async (req, res) => {Cart_Order_Post_Payment(req,res)});
app.post("/cart_confirm_response", async (req, res) => {cart_confirm_response(req,res)});


app.get("/orders", async (req, res) => {Order_Get(req,res)});
app.get("/order", async (req, res) => {res.status(301).redirect("http://192.168.0.44/orders")});























app.get("/privacy_and_policy", privacy_and_policy);
app.get("/terms_and_conditions", terms_and_conditions);
app.get("/contact_us", Contact_Us);
app.get("/register_a_complaint", Complaint_Us);
app.get("/setting", setting);
app.put("/setting", setting_post);
app.put("/change_Password", change_Password_PUT);

app.get("/forgot_password", forgot_passworrd_GET);
app.put("/forgot_password", forgot_passworrd_PUT);
app.post("/forgot_password/otp", forgot_passworrd_PUT_OTP);
app.post("/forgot_password/change", forgot_passworrd_PUT_Change);

app.get("/favorite", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/notification", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/download_app", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/customer_care", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/help_center", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/sb_coins", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/improve_us", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});
app.get("/report_a_problem", (req, res)=>{res.send(`<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;"><div style="color: rgb(59, 59, 59); font-size: 30px; font-family: Arial; font-weight: bold; padding: 10px; border: 1px solid #aaa;">Coming soon</div></div>`)});

app.get('*', (req, res) => {
    res.status(404).send('<h1><center>Page Not Found</h1></center>');
});
let a = 80;
app.listen(a, () => {
    console.log("We are connected to server at port 80");
    console.log("Link: http://192.168.0.44/");
});

