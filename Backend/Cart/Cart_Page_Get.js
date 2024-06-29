
const User_Auth = require("../User_Auth.js");
const { Product , Signup_Model} = require("../All_Models.js");

const Offer_Per = require("../ShortCut/Offer_Per.js");
const NumToINR = require("../ShortCut/NumToINR.js");

const Cart_Page_Get = async (req, res) => {

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let zz = Auths.Cart;
        let All = await Product.find({});
        let l;
        let SubTotal = 0;
        let TotalProducts = zz.length;
        let TotalQuantity = 0;
        if(zz.length < 1){
            l = `<center style="margin:20px; text-align:center; display:block;">Your cart is empty.</center>`
        }else{
            let daaa = "";

            for (let x = 0; x < zz.length; x++) {
                const element = zz[x];
                // console.log(element.Quantity);
                let cc;
                let id = element.Product_ID;
                for (let e = 0; e < All.length; e++) {
                    cc = All[e];
                    if(cc.Product_ID == id){
                        break;
                    }
                    
                }
                
                let Offer = Offer_Per(cc.Prize.MRP,cc.Prize.Our_Prize);
                TotalQuantity +=element.Quantity; 


                SubTotal += (Number(element.Quantity)*cc.Prize.Our_Prize)

                let ds = `
                    <div id="Productstart${x}" class="Productstart">
                        <div class="Product_Sdsdf">
                            <div class="Imgsgs">
                                <a href="/product/${cc.Product_URL}">
                                    <img src="${cc.Image_Locaitons[0]}" alt="Product_Img">
                                </a>
                            </div>
                            <div class="P_Title">
                                <div class="Title--a">
                                    <a href="/product/${cc.Product_URL}">${cc.Title}</a>
                                </div>
                                <div class="prisss">
                                    <span class="rupe_symb">₹</span>
                                    <span class="Prizessd">${NumToINR(cc.Prize.Our_Prize)}</span><br>
                                    <span class="MRSPS">M.R.P: ₹${NumToINR(cc.Prize.MRP)}</span>
                                    <span class="OFFERRER">${Offer}</span><br>
                                    <span class="Stock">In stock: ${cc.Quantity_Available}</span>
                                    <span class="Stock_Quantity">
                                        <strong><u>Selected Quantity:</u></strong> 
                                        <span id="Selecteds${x}">${element.Quantity}</span><button class="ChangeBTN" type="button" onclick="Change_Quantity(${x})"><span class="material-symbols-outlined tn_edit" style="font-size: 20px;">edit</span>Change</button>
                                    </span>
                                </div>
                                <div class="Bottomm">
                                    <div class="Deliveryefe">Delivery within 5-10 days after placing order</div>
                                    <div class="Note_cart"><strong>NOTE: </strong>You will receive an order confirmation mail, after placing your order Within 5-10 minutes.</div>
                                </div>
                            </div>
                        </div>
                        <div class="QuantityTT">
                            <div id="Quantity${x}" class="Quantity1">
                                <div class="quantity">
                                    <button onclick="Minus(${x});" class="minus" aria-label="Decrease">&minus;</button>
                                    <input id="A${id}" type="number" class="input-box" value="${element.Quantity}" min="1" max="${cc.Quantity_Available}">
                                    <button onclick="Plus(${x});" class="plus" aria-label="Increase">&plus;</button>
                                </div>
                                <div class="Submit_Qua">
                                    <button id="Updatebtn${x}" onclick="Update_Stock('${id}', ${x});">Update</button>
                                </div>
                            </div>
                            <div id="Quantity00${x}" class="Quantity2">
                                <button id="Delete_Cart${x}" onclick="Delete_Cart(${id},${x});"><span class="material-symbols-outlined">delete</span>Remove</button>
                            </div>
                        </div>
                    </div>`;
                    daaa+=ds;
            }

            l = daaa;
        }







        let d = {
            Products:l,
            TotalQuantity:TotalQuantity,
            TotalProducts:TotalProducts,
            SubTotal:NumToINR(SubTotal),
            Name: Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login: "",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,

        }

        res.status(200).render("Cus_Cart_Page", d);

    } else {
        res.status(200).redirect("192.168.0.12/login");
    }


}

module.exports = Cart_Page_Get;