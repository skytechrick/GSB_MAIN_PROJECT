const {Product} = require("../All_Models.js");
Product_Assistant__Product_Post = async(req, res) => {
    let ID = req.body.ID;
    let data = await Product.find({});
    let d = 0;
    let element;
    for (let index = 0; index < data.length; index++) {
        element = data[index];
        if (element.Product_ID == ID) {
            d = 1;
            break;
            
        }
        
    }
    if(d==1){
        // console.log("Found");
        res.json({FOUND:"Yes",URL:element.Product_URL,Title:element.Title,Sell: element.Prize.Sell_Price, Stock:element.Quantity_Available});
    }else{
        // console.log("Found");
        res.json({FOUND:"No Product Found"});
    }




}

module.exports = Product_Assistant__Product_Post;