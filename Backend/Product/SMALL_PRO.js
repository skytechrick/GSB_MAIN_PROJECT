const {Product} = require("../All_Models");

const NumToINR = require("../ShortCut/NumToINR.js");
const Offer_Per = require("../ShortCut/Offer_Per.js");




SMALL_PRO = async (req, res)=> {


    let a = req.body.Product_ID;
    // console.log(a);
    let data = await Product.find({});
    let KI = 0;
    let Product1;
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element.Product_ID == a) {
            Product1 = element;
            KI = 5;
            break;
        }
    }
    if (KI == 5) {
        let Title = Product1.Title;
        let MRP = Product1.Prize.MRP;
        let SELL = Product1.Prize.Our_Prize;
        let OFFER_PER = Offer_Per(Number(MRP), Number(SELL));
        MRP = NumToINR(Number(MRP));
        SELL = NumToINR(Number(SELL));
        let URL = Product1.Product_URL;
        let PRO_ID = Product1.Product_ID;
        // let IMG = Image_Locaitons[0];
        let IMG = Product1.Image_Locaitons[0];

        let Product_Small = `
            <div class="Products_1">
                <div class="IMG_P">
                    <a target="__blank" href="/product/${URL}">
                        <img class="IMG_IMG" src="${IMG}">
                        <span class="OfferrrN">${OFFER_PER}</span>
                    </a>
                </div>
                <div class="Title_P">
                    <h5 class="Title_P_h5">
                        <a target="__blank" href="/product/${URL}">${Title}</a>
                    </h5>
                </div>
                <div class="Prize_P">
                    <span class="sym">&#8377;</span>
                    <span class="selP">${SELL}</span>
                    <button title="Add to Cart" class="CART_ADDDD" type="button" onclick="Cart_Add("${PRO_ID}");">
                        <span class="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                    <button title="Buy Now" class="CART_BUYYY" type="button" onclick="Cart_Buy("${PRO_ID}");">
                        <span class="material-symbols-outlined">shopping_bag</span>
                    </button>
                </div>
                <div class="Mark_P">
                    <span class="Mark_P_Sp">M.R.P: </span>
                    <span class="Mark_P_Sp_P">&#8377;${MRP}</span>
                </div>
                <div class="Msg_C">In stock</div>
                <div class="Veri_P">
                    <span>Verified Seller</span>
                </div>
            </div>
        `;

        // console.log(req.body.VERIFIED);
        res.status(200).json({
            INSERT: Product_Small,
        });
    }else{
        res.status(200).json({
            INSERT:"No Product Found",
        });

    }
};


module.exports = SMALL_PRO;
































































































