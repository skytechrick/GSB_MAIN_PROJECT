const {Product} = require("../All_Models");

const NumToINR = require("../ShortCut/NumToINR.js");
const Offer_Per = require("../ShortCut/Offer_Per.js");


PRODUCT_ROW = async (req, res) => {
    // let a = req.body.Product_ID;

    // const A = async (a) => {
        
    //     // console.log(a);
    //     let KI = 0;
    //     let Product1;
    //     let data = await Product.find({});
    //     for (let index = 0; index < data.length; index++) {
    //         const element = data[index];
    //         if (element.Product_ID == a) {
    //             Product1 = element;
    //             KI = 5;
    //             break;
    //         }
    //     }
    //     if (KI == 5) {
    //         let Title = Product1.Title;
    //         let MRP = Product1.Prize.MRP;
    //         let SELL = Product1.Prize.Our_Prize;
    //         let OFFER_PER = Offer_Per(Number(MRP), Number(SELL));
    //         MRP = NumToINR(Number(MRP));
    //         SELL = NumToINR(Number(SELL));
    //         let URL = Product1.Product_URL;
    //         let PRO_ID = Product1.Product_ID;
    //         // let IMG = Image_Locaitons[0];
    //         let IMG = Product1.Image_Locaitons[0];
            
    //         let Product_Small = `
    //         <div class="Products_1">
    //         <div class="IMG_P">
    //         <a href="/product/${URL}">
    //         <img class="IMG_IMG" src="${IMG}">
    //         <span class="OfferrrN">${OFFER_PER}</span>
    //         </a>
    //         </div>
    //         <div class="Title_P">
    //         <h5 class="Title_P_h5">
    //         <a href="/product/${URL}">${Title}</a>
    //         </h5>
    //         </div>
    //         <div class="Prize_P">
    //         <span class="sym">&#8377;</span>
    //         <span class="selP">${SELL}</span>
    //         <button title="Add to Cart" class="CART_ADDDD" type="button" onclick="Cart_Add("${PRO_ID}");">
    //         <span class="material-symbols-outlined">add_shopping_cart</span>
    //         </button>
    //         <button title="Buy Now" class="CART_BUYYY" type="button" onclick="Cart_Buy("${PRO_ID}");">
    //         <span class="material-symbols-outlined">shopping_bag</span>
    //         </button>
    //         </div>
    //         <div class="Mark_P">
    //         <span class="Mark_P_Sp">M.R.P: </span>
    //         <span class="Mark_P_Sp_P">&#8377;${MRP}</span>
    //         </div>
    //         <div class="Msg_C">In stock</div>
    //         <div class="Veri_P">
    //         <span>Verified Seller</span>
    //         </div>
    //         </div>
    //         `;
            
    //         // console.log(req.body.VERIFIED);
    //         // res.status(200).json({
    //         //     INSERT: Product_Small,
    //         // });
    //         return {Found:true, Product1: Product_Small, Product_ID: Product1.Product_ID};
    //     }else{
    //         return {Found:false};
            
    //     }
        
    // }

    
    // console.log(req.body);
    
    let Width = req.body.Width;
    let count;
    if(Width > 1050){
        // count = Width/285;
        count = Width/185;
        count = Math.floor(count);
    }else{
        count = Width/140;
        count = Math.floor(count);
    }

    let Type = req.body.Type;
    let Already_Present = req.body.Already_Present;
    
    
    
    
    
    function getRandomInt(a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    
    
    function GH(count, data) {
        let Product_LIST = [];
        let OP = [];
        let P=0;
        let k=0;
        while (P < count || ( OP.length <  data.length && k < count)) {
            let s = getRandomInt(0, data.length-1);
            
            
            
            // console.log(s);
            let element = data[s];
            // console.log("element.Product_ID");
            
            
            let KL = 0
            OP.forEach(Aelement => {
                if (Aelement == element.Product_ID) {
                    KL = 1;
                }   
                
            });
            
            if (KL != 1) {
                k = k+1;
                // if()data.length-1
                Product_LIST.push(element);
                OP.push(element.Product_ID);
            }
            P++;
        }
        return {IDs: OP, List: Product_LIST};
    }
    
    
    let DAT = await Product.find({}); 
    // console.log(count);
    let DATA = GH(count, DAT);
    // console.log(DATA.IDs);

    
    let XD = DATA.IDs;
    // console.log(XD);
    let XC = DATA.List;
    // console.log(XC);
    let FINAL_D;
    if(XD.length < count){
        let DATA2 = GH(count - XD.length, DAT);
        FINAL_D = {IDs: XD.concat(DATA2.IDs), List: XC.concat(DATA2.List)};
    }else{
        FINAL_D = DATA;
    }

    // console.log("ssds");


    function BCB(a, data){
        let Final_Send;
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


            Final_Send = `<div class="Products_1">
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
            </div>`;
        }
        return Final_Send;
    }

    let LEM = FINAL_D.IDs;
    

    let VV = "";
    let XX = await Product.find({});
    for (let index = 0; index < LEM.length; index++) {
        const element = LEM[index];
        // console.log(BCB(element));
        VV = VV + BCB(element,XX);
    }
    // console.log(VV);
    res.json({ INSERT: VV, IDs: LEM });

    // Already_Present.forEach(element => {
    //     let c = 1;
    //     for (let index = 0; index < data.length; index++) {
    //         const element1 = data[index];
    //         if (element1.Product_ID == element) {
    //             c = 2;
    //         }
            
    //     }
    // });

    

}
    

module.exports = PRODUCT_ROW;