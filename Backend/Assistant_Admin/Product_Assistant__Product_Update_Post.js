const {Product, New_Worker_Model} = require("../All_Models.js");
Product_Assistant__Product_Update_Post = async(req, res) => {
    
    let cook = req.cookies;
    let cook_NO = cook.NOP;
    let cook_PID= cook.AS_PRO;

    let Val = req.body.Stock;
    let ID = req.body.ID;
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

                await Product.updateOne({Product_ID:ID},{Quantity_Available:Val});
                res.status(200).json({Message:"Updated successfully"});
            


            }else{
                res.clearCookie("PID",{"path":"/assistant/product"});
                res.clearCookie("NOP",{"path":"/assistant/product"});
                res.json({Message: "Connection Error"});
            }
        }else{
            res.clearCookie("PID",{"path":"/assistant/product"});
            res.clearCookie("NOP",{"path":"/assistant/product"});
            res.json({Message: "Connection Error"});
        }
    }else{
        res.clearCookie("PID",{"path":"/assistant/product"});
        res.clearCookie("NOP",{"path":"/assistant/product"});
        res.json({Message: "Connection Error"});
    }


};

module.exports = Product_Assistant__Product_Update_Post;