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

        let BODY = razorpay_order_id + "|" + razorpay_payment_id;

        let generated_signature = crypto.createHmac("sha256", key_secret).update(BODY.toString()).digest("hex");







        // console.log("Payment is successful");



        let Cl = [];
        let das = await Product.find({});
        if (generated_signature == razorpay_signature) {
            let Orders1 = await Orders.find({});
            for (let Z = 0; Z < Orders1.length; Z++) {
                const element = Orders1[Z];
                let ID = element.Order_ID_Payment;

                let ZX;
                for (let xc = 0; xc < das.length; xc++) {
                    prod = das[xc];
                    if (prod.Product_ID == element.Product_List.Product_ID) {
                        ZX = prod.Product_URL;

                        break;  
                    }
                    
                }
                if(ID == razorpay_order_id){
                    Cl.push(element);
                    await Orders.updateOne({Order_ID:element.Order_ID},{Payment_ID_Payment:razorpay_payment_id,Payment_Confirmed:"Yes"});
                    await Product.updateOne({Product_ID:ZX},{
                        Payment_ID_Payment:razorpay_payment_id,Payment_Confirmed:"Yes"
                    });

                    
                    await Product.updateOne({Product_ID:element.Product_ID},{
                        Quantity_Available: String(Number(ZX.Quantity_Available)-Number(element.Product_List.Quantity)),
                    })

                    const Mail_Option = {
                        from: 'New Order <getskybuy@gmail.com>',
                        to: `ricksarkar2005@gmail.com`,
                        subject: 'New Order - Take Fast Action | GET SKY BUY', 
                        html: `
                            <!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>
                            body{font-family: Arial, sans-serif;}.conatainer{margin: 5px auto;box-sizing: border-box;box-shadow: 0 0 10px #aaa;max-width: 650px;background-color: white;}.box {padding: 15px 20px;padding-top: 0;}.conatainer h2{margin: 0;padding: 20px;background-color: rgb(97, 165, 255);border-bottom: 1px solid #aaa;}table{width: 70%;margin: auto;}table tr td:nth-child(1){font-weight: bold;}table tr td{padding: 5px;}</style></head><body>    <div class="conatainer">        <h2>New Order - Take Action Fast within 5-8 minutes | GSB - Alert</h2>        <div class="box">            <p><strong>Congratulations,</strong></p>            <p>                You have a <strong>New Order</strong>, Please take Quick Action, Either Accept or Cancel the order.            </p>     <h4>Order Details are below:</h4> <table>
                            <tr>
                                <td>Order ID:</td>
                                <td>${element.Order_ID}</td>
                            </tr>
                            <tr>
                                <td>Product ID:</td>
                                <td>${element.Product_List.Product_ID}</td>
                            </tr>
                            <tr>
                                <td>Product URL:</td>
                                <td><a href="http://192.168.0.44/product/${ZX}">Link</a></td>
                            </tr>
                            <tr>
                                <td>Quantity:</td>
                                <td>${element.Product_List.Quantity}</td>
                            </tr>
                            <tr>
                                <td>Seller Mobile Number:</td>
                                <td><a href="tel:+918436431656">Link</a></td>
                            </tr>
                            <tr>
                                <td>Customer Mobile Number:</td>
                                <td><a href="tel:+91${element.Address.Mobile}">Link</a></td>
                            </tr>
                        </table>            <p>Please take quick action. You are requested to call the seller of the product and ask if the product is available or out of stock. If available, ask the seller not to sell the product and to keep it separate from the shop so that no other customer can purchase it. Then, log in to your account and confirm the order. This must be done within 5-8 minutes.</p> <p>If the seller is not answering your phone, keep trying every few minutes. Wait until the call gets connected within 30 minutes. After that, if you still cannot reach the seller, reject the order and write a short note explaining why the order was rejected.</p>      <p>Thank You</p><p>Rick Sarkar <br>CEO</p></div>    </div></body></html>
                                                    
                        
                        
                        `
                    };
                    await Transporter.sendMail(Mail_Option, (error, info) => { });
                }
                
            }

            




            
            await Signup_Model.updateOne({Email:Auths.Email},{
                Cart:[],
            });
            res.json({Message:1});

        }else{
            res.json({Message:2});

        }



        // var { validatePaymentVerification, validateWebhookSignature } = require('./dist/utils/razorpay-utils');

        // validatePaymentVerification({"order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, signature, secret);



        
    } else {
        res.clearCookie("U_ID");
        res.status(200).redirect("http://192.168.0.44/login");
    }


}


module.exports = cart_confirm_response;