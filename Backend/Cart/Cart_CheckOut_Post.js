
const User_Auth = require("../User_Auth.js");
const { Product , Signup_Model} = require("../All_Models.js");

const Offer_Per = require("../ShortCut/Offer_Per.js");
const NumToINR = require("../ShortCut/NumToINR.js");


const Cart_CheckOut_Post = async (req, res) => {
    
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let len = Auths.Cart.length;
        if(len > 0){
            let D = req.body.Verified;
            if(D == "Yes"){
                let Address_IDDD = Auths.Addresses.Active_ID;

                let Address1;

                if (Auths.Addresses.Address.length >0) {
                    
                    for (let bb = 0; bb < Auths.Addresses.Address.length; bb++) {
                        const element = Auths.Addresses.Address[bb];
                        if (element.ID == Address_IDDD) {
                            Address1 = element;
                            break;                    
                        }
                        
                    }

                    
                    let data = await Product.find({});

                    let xxxx = Auths.Cart;
                    let pppp = "";
                    let Sub = 0;
                    let Quantitiii = 0;
                    let MRPP = 0;
                    for (let a = 0; a < xxxx.length; a++) {
                        const element = xxxx[a];
                        let ID = element.Product_ID;
                        for (let za = 0; za < data.length; za++) {
                            const Pro = data[za];
                            if(ID == Pro.Product_ID){
                                pppp += `<tr class="Products">
                                            <td>${Pro.Title}</td>
                                            <td>Rs.${NumToINR(Pro.Prize.Our_Prize)}</td>
                                            <td>×${element.Quantity}</td>
                                            <td>Rs.${NumToINR((Pro.Prize.Our_Prize)*element.Quantity)}</td>
                                        </tr>`

                                        Quantitiii += Number(element.Quantity);
                                        Sub += Number(Pro.Prize.Our_Prize) * Number(element.Quantity);
                                        MRPP += Number(Pro.Prize.MRP) * Number(element.Quantity);

                                break;
                            }
                            
                        }



                        
                    }


                    let Subtotal = Sub; 
                    let ADDRESS = `<address>${Address1.Name}, <br> ${Address1.Locality}, ${Address1.Landmark}<br>${Address1.Town}, ${Address1.City},<br>PIN: ${Address1.PIN},  <br>Dist: ${Address1.District_Name}, <br>${Address1.State_Name}, India <br>+91 ${Address1.Mobile} <br> +91 ${Address1.Alt} <br></address>`;

                    let x = {
                        ADDRESS:ADDRESS,
                        Products:pppp,
                        Subtotal:NumToINR(Subtotal),
                        Quantitiii:Quantitiii,
                        MRPP:NumToINR(MRPP),
                        Off:Offer_Per(MRPP,Subtotal),
                        discountMrp: NumToINR(MRPP-Subtotal),

                        Deli: NumToINR(49*Quantitiii),
                        Grand_Total: NumToINR(49*Quantitiii + Subtotal),


                        BBB: `<button id="SDSFSAFSFFSFAS" onclick="Confirm_Payment(1);" type="button">Confirm Order</button>`,

                        
                        Name: Auths.First_Name,
                        Cart_No: Auths.Cart.length,
                        Login: "",
                        Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,

                    }
                    res.status(200).render("Cart_CheckOut_Post", x);
                }else{
                    
                    
                    let data = await Product.find({});

                    let xxxx = Auths.Cart;
                    let pppp = "";
                    let Sub = 0;
                    let Quantitiii = 0;
                    let MRPP = 0;
                    for (let a = 0; a < xxxx.length; a++) {
                        const element = xxxx[a];
                        let ID = element.Product_ID;
                        for (let za = 0; za < data.length; za++) {
                            const Pro = data[za];
                            if(ID == Pro.Product_ID){
                                pppp += `<tr class="Products">
                                            <td>${Pro.Title}</td>
                                            <td>Rs.${NumToINR(Pro.Prize.Our_Prize)}</td>
                                            <td>×${element.Quantity}</td>
                                            <td>Rs.${NumToINR((Pro.Prize.Our_Prize)*element.Quantity)}</td>
                                        </tr>`

                                        Quantitiii += Number(element.Quantity);
                                        Sub += Number(Pro.Prize.Our_Prize) * Number(element.Quantity);
                                        MRPP += Number(Pro.Prize.MRP) * Number(element.Quantity);

                                break;
                            }
                            
                        }



                        
                    }


                    let Subtotal = Sub; 
                    let ADDRESS = `<a href=/address>Add Address</a>`;

                    let x = {
                        ADDRESS:ADDRESS,
                        Products:pppp,
                        Subtotal:NumToINR(Subtotal),
                        Quantitiii:Quantitiii,
                        MRPP:NumToINR(MRPP),
                        Off:Offer_Per(MRPP,Subtotal),
                        discountMrp: NumToINR(MRPP-Subtotal),

                        Deli: NumToINR(49*Quantitiii),
                        Grand_Total: NumToINR(49*Quantitiii + Subtotal),


                        

                        BBB: ``,
                        
                        Name: Auths.First_Name,
                        Cart_No: Auths.Cart.length,
                        Login: "",
                        Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,

                    }
                    res.status(200).render("Cart_CheckOut_Post", x);

                }


            }else{
                res.status(200).redirect("http://192.168.0.12/cart");
            }
        }else{
            res.status(200).redirect("http://192.168.0.12/cart");
        }


    } else {
        res.clearCookie("U_ID");
        res.status(200).redirect("http://192.168.0.12/login");
    }

}
module.exports = Cart_CheckOut_Post;