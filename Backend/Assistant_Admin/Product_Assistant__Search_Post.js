const {Seller,New_Worker_Model} = require("../All_Models.js");
Product_Assistant__Search_Post = async (req, res) => {

    let ID = req.body.ID;
    let Send = req.body.Send;

    let cook = req.cookies;
    let cook_NO = cook.NOP;
    let cook_PID= cook.AS_PRO;

    // console.log(req.body);

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


                if(ID && Send){
                    let element;
                    let data = await Seller.find({});
                    // console.log(data);
                    let k = 0;
                    for (let i = 0; i < data.length; i++) {
                        element = data[i];
                        console.log(element);
                        if (element.Profile_ID == ID) {
                            k = 1;
                            break;
                        }
                        
                        
                    }
                    if(k == 1){
                        if(element.Profile_ID == ID && element.Done == "Yes"){
                            res.status(200).json({FOUND:"Yes"});
                        }else{
                            
                            res.status(200).json({FOUND:"Not Verified or Banned"});
                        }
                    }else{
                            
                        res.status(200).json({FOUND:"User not Found"});
            
                    }
                }else{
                    
                    res.status(200).json({FOUND:"User not Found"});
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

module.exports = Product_Assistant__Search_Post;