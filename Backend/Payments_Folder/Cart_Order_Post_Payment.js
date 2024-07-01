

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
    
const Razorpay = require("razorpay");
const key_id = "rzp_test_DBekxO3l7UI6ie";
const key_secret = "v0ko7dxpbSxDHaPxSnv8CkJb";
let instance = new Razorpay({
    key_id: key_id,
    key_secret: key_secret,
});

// instance.payments.fetch(paymentId)

const Cart_Order_Post_Payment = async (req, res) => {
    
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {

        if(req.body.Payment == true){
            let KL;
            for (let D = 0; D < Auths.Addresses.Address.length; D++) {
                const element = Auths.Addresses.Address[D];
                if (element.ID == Auths.Addresses.Active_ID) {
                    KL = element;
                    break;
                    
                }
                
            }
            
            
            let CreateOrder;
            let ALLLLL = [];
            
            let pr = await Product.find({});
            let KLa = []
            for (let vb = 0; vb < Auths.Cart.length; vb++) {
                const element11 = Auths.Cart[vb];
                
                for (let xz = 0; xz < pr.length; xz++) {
                    const element = pr[xz];
                    if (element.Product_ID == element11.Product_ID) {

                        await Product.updateOne({Product_ID:element.Product_ID},{
                            Quantity_Available: String(Number(element.Quantity_Available)-Number(element11.Quantity)),
                        })
                        let ZZZ = await Orders.find({});
                        let cc = {
                            Product_ID: element.Product_ID,
                            Quantity:element11.Quantity,
                            Sell: element.Prize.Sell_Price,
                            Our: element.Prize.Our_Prize,
                            Total: String(Number(element.Prize.Our_Prize) * Number(element11.Quantity)+ 49*Number(element11.Quantity)),
                        }
                        KLa=cc;
                        let Order_ID1;
                        while(true){
                            Order_ID1 = Order_ID();
                            let a = 1;
                            for (let xz = 0; xz < ZZZ.length; xz++) {
                                const element = ZZZ[xz];
                                if (element.Order_ID == Order_ID1) {
                                    a = 2;
                                    break;
                                }
                                
                            }
                            if (a == 1) {
                                break;
                            }
                        }
                        
                        delete KL.ID;
                        CreateOrder = {
                            User_ID: Auths.Profile_Id,
                            Order_ID:Order_ID1,
                            Date: Date(),
                            Address: KL,
                            Product_List: KLa,
                            Payment_Method:"Online",
                            Payment_Confirmed:"No",
                            Order_Confirmed:"No",
                            Order_ID_Payment: "",
                        }
                        ALLLLL.push(CreateOrder);
                        break;
                    }
                    
                }
            }
            let Total_Payment = 0;
            let P;
            let cccv = [];
            for (let PrePa = 0; PrePa < ALLLLL.length; PrePa++) {
                P = ALLLLL[PrePa];
                Total_Payment += Number(P.Product_List.Total);
                cccv.push(P.Order_ID);

            }


            

            // console.log(Total_Payment);
            var options = {
                amount: Total_Payment*100,
                currency: "INR",
                receipt: `${P.Order_ID}`,
                notes: cccv,
            };



            instance.orders.create(options, function(err, order) {
                let Order = order;
                // console.log(order.notes);
                
                let Z = Order.id;
                if(Order.status == 'created' && Order.id && Order.amount){
                    

                    for (let PrePa = 0; PrePa < ALLLLL.length; PrePa++) {
                        let element = ALLLLL[PrePa];
                        element = {
                            User_ID: element.User_ID,
                            Order_ID: element.Order_ID,
                            Date: element.Date,
                            Address: element.Address,
                            Product_List: element.Product_List,
                            Payment_Method: element.Payment_Method,
                            Payment_Confirmed: element.Payment_Confirmed,
                            Order_Confirmed: element.Order_Confirmed,
                            Order_ID_Payment: Z,
                        }
                        
                        let xxxxxxx = new Orders(element);
                        xxxxxxx.save().then(async()=>{
                            let aa = await Product.find({});
                            let Prod;
                            for (let index = 0; index < aa.length; index++) {
                                Prod = aa[index];
                                if(Prod.Product_ID == element.Product_List.Product_ID){
                                    break;
                                }
                                
                            }
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
                                        <td><a href="http://192.168.0.12/product/${Prod.Product_URL}">Link</a></td>
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
                            Transporter.sendMail(Mail_Option, (error, info) => { });

                        })
                        
                    } 
                    let XX = {
                    
                        Message:true,
                        Amount:options.amount,
                        Name:KL.Name,
                        Des: `Total Orders: ${ALLLLL.length}`,
                        Or_ID:Z,
                        Email:Auths.Email,
                        Mobile:KL.Mobile,

                        // Name:Auths,

                    }
                    res.status(200).json(XX);
                }  
                
            });

        }else {
            res.status(200).redirect("http://192.168.0.12/login");
        }


        
    } else {
        res.status(200).redirect("http://192.168.0.12/login");
    }












    

    










}
module.exports = Cart_Order_Post_Payment;
