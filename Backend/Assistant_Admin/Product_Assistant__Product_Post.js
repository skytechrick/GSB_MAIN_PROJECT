const {Product} = require("../All_Models.js");
Product_Assistant__Product_Post = async(req, res) => {


    let cook = req.cookies;
    let cook_NO = cook.NOP;
    let cook_PID= cook.AS_PRO;

    if(cook_NO && cook_PID){
        let list = await New_Worker_Model.find({});
        let element;
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            let a = element.Mobile_Number;
            if(a == cook_NO && element.Assistant_Type == "Product Assistant leader"){
                
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(element.LOG_AUTH == cook_PID){


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
                    res.json({
                        FOUND:"Yes",
                        URL:   element.Product_URL,
                        Title: element.Title,
                        Sell:  element.Prize.Sell_Price,
                        Stock: element.Quantity_Available
                    });
                }else{
                    // console.log("Found");
                    res.json({FOUND:"No Product Found"});
                }
            
            
            


            }else{
                res.clearCookie("PID",{"path":"/assistant/product"});
                res.clearCookie("NOP",{"path":"/assistant/product"});
                res.json({FOUND: "Connection Error"});
            }
        }else{
            res.clearCookie("PID",{"path":"/assistant/product"});
            res.clearCookie("NOP",{"path":"/assistant/product"});
            res.json({FOUND: "Connection Error"});
        }
    }else{
        res.clearCookie("PID",{"path":"/assistant/product"});
        res.clearCookie("NOP",{"path":"/assistant/product"});
        res.json({FOUND: "Connection Error"});
    }

}

module.exports = Product_Assistant__Product_Post;