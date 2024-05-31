const {Product} = require("../All_Models.js");

Product_Page = async (req, res) =>{

    let URLL = req.params.Url_P;
    let data = await Product.find({});
    let element;
    let r = 1;
    for (let i = 0; i < data.length; i++) {
        element = data[i];
        if(element.Product_URL == URLL){
            r = 3;
            break;
        }else{
            r = 1;
        }
        
    }
    if(r == 3){
        let PG = element;

        
        let p = {
            Title: PG.Title,
            Store_Name:"GSB - Store",
            Selling_P:PG.Prize.Our_Prize,
            MRP:PG.Prize.MRP,
            Product_1: PG.Image_Locaitons[0],
            Product_2: PG.Image_Locaitons[1],
            Product_3: PG.Image_Locaitons[2],
            Product_4: PG.Image_Locaitons[4],
            Product_5: PG.Image_Locaitons[5],
            Product_6: PG.Image_Locaitons[6],
            Product_7: PG.Image_Locaitons[7],
            Product_8: PG.Image_Locaitons[8],
            Product_9: PG.Image_Locaitons[9],
            Product_10: PG.Image_Locaitons[10],

            Des: PG.Description,

            QNAA: `<P style="text-align: center;">No QnA</p>`,
            REVV: `<P style="text-align: center;">No review</p>`,


        };
        res.status(200).render("Product_Page",p);


    }else{
        res.send("Page not found");
    }
        
        
};
module.exports = Product_Page;