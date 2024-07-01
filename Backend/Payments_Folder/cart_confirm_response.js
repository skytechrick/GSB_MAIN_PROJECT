const User_Auth = require("../User_Auth.js");
const { Product , Signup_Model, Orders} = require("../All_Models.js");

const Order_ID = require("./Order_ID.js");
const Offer_Per = require("../ShortCut/Offer_Per.js");
const NumToINR = require("../ShortCut/NumToINR.js");

const nodemailer = require("nodemailer");

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skybuy.ceo@gmail.com',
        pass: 'ucyj phsb oqyq zkox'
    }
});
    
const crypto = require('crypto');

const data = 'Hello, World!';  // Data to be hashed
const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log(hash);







const Razorpay = require("razorpay");
const key_id = "rzp_test_DBekxO3l7UI6ie";
const key_secret = "v0ko7dxpbSxDHaPxSnv8CkJb";
let instance = new Razorpay({
    key_id: key_id,
    key_secret: key_secret,
});


const cart_confirm_response = async(req, res) => {
    
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        


        let razorpay_order_id = req.body.razorpay_order_id;
        let razorpay_payment_id = req.body.razorpay_payment_id;
        let razorpay_signature = req.body.razorpay_signature;
        console.log(razorpay_order_id);
        console.log(razorpay_payment_id);
        console.log(razorpay_signature);





        var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');

        validatePaymentVerification({"order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, signature, secret);








        let generated_signature = hmac_sha256(razorpay_order_id + "|" + razorpay_payment_id, key_secret);

        if (generated_signature == razorpay_signature) {
            console.log("Payment is successful");
            res.json({Message:1});
        }else{
            res.json({Message:2});

        }
        

        
    } else {
        res.clearCookie("U_ID");
        res.status(200).redirect("http://192.168.0.12/login");
    }


}


module.exports = cart_confirm_response;