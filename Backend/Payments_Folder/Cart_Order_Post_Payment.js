

const User_Auth = require("../User_Auth.js");
const { Product , Signup_Model, Orders} = require("../All_Models.js");

const Order_ID = require("./Order_ID.js");
const Offer_Per = require("../ShortCut/Offer_Per.js");
const NumToINR = require("../ShortCut/NumToINR.js");
 
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
            try{

                for (let D = 0; D < Auths.Addresses.Address.length; D++) {
                    const element = Auths.Addresses.Address[D];
                    if (element.ID == Auths.Addresses.Active_ID) {
                        KL = element;
                        break;
                        
                    }
                    
                }
            }catch{
                KL = "";
                console.log(KL);


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



            instance.orders.create(options, async function(err, order) {
                let Order = order;
                // console.log(order.notes);
                
                let Z = Order.id;
                if(Order.status == 'created' && Order.id && Order.amount){
                    

                    for (let PrePa = 0; PrePa < ALLLLL.length; PrePa++) {
                        let element = ALLLLL[PrePa];
                        element = {
                            Order_ID_Payment: Z,
                            User_ID: element.User_ID,
                            Order_ID: element.Order_ID,
                            Date: element.Date,
                            Address: element.Address,
                            Product_List: element.Product_List,
                            Payment_Method: element.Payment_Method,
                            Payment_Confirmed: element.Payment_Confirmed,
                            Order_Confirmed: element.Order_Confirmed,
                        }
                        
                        let xxxxxxx = new Orders(element);
                        await xxxxxxx.save();
                        
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
            res.status(200).redirect("http://192.168.0.44/login");
        }


        
    } else {
        res.status(200).redirect("http://192.168.0.44/login");
    }





    

    










}
module.exports = Cart_Order_Post_Payment;
