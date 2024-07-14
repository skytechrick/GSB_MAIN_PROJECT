
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
    

const Cart_Order_Post = async (req, res) => {
    
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        if (req.body.Payment == true) {
            
            
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
                        // console.log(String(Number(element.Quantity_Available)-Number(element11.Quantity)));
                        // console.log("SS");
                        let ZZZ = await Orders.find({});
                        let cc = {
                            Product_ID: element.Product_ID,
                            Quantity:element11.Quantity,
                            Sell: element.Prize.Sell_Price,
                            Our: element.Prize.Our_Prize,
                            Total: String(Number(element.Prize.Our_Prize) * Number(element11.Quantity)),
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
                            Payment_Method:"COD",
                            Payment_Confirmed:"Yes",
                            Order_Confirmed:"No",
                            
                        }
                        ALLLLL.push(CreateOrder);
                        break;
                    }
                    
                }
            }

            
            // console.log(CreateOrder);

            

            let xd;
            for (let PrePa = 0; PrePa < ALLLLL.length; PrePa++) {
                const element = ALLLLL[PrePa];
                
                let zx = new Orders(element);
                await zx.save().then(async()=>{
                    // console.log(element);
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
                                <td><a href="http://192.168.0.44/product/${Prod.Product_URL}">Link</a></td>
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
                    xd = 1;
                }).catch(error => {
                    xd = 2;
                    
                });
            }
            
            if(xd == 1){
                await Signup_Model.updateOne({Email:Auths.Email},{
                    Cart:[],
                });
                res.status(200).json({Message:true});
                // setTimeout(() => {
                //     console.log(2143243452);
                // }, 5000);
            }else if(xd == 2){

                res.status(200).json({Message:false});
                
            }else {
                res.status(200).json({Message:false});
            }
        }else{
            res.status(200).redirect("http://192.168.0.44/login");
        }
    } else {
        res.status(200).redirect("http://192.168.0.44/login");
    }
}


module.exports = Cart_Order_Post;