const {New_Worker_Model} = require("../All_Models");
Product_Assistant_Login_Get = async (req, res) => {
    // let COOK = req.cookies.AS_PRO;
    // let NOPP = req.cookies.NOPP;
    // if (!COOK && !NOPP) {
    //     res.render("Product_Assis_Login");
    // }else{
    //     res.redirect("http://192.168.0.12/assistant/product");
    // }
    let COOK = req.cookies.AS_PRO;
    let NOP = req.cookies.NOP;
    
    
    if (COOK && NOP) {
        let list = await New_Worker_Model.find({});
        let element;
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            let a = element.Mobile_Number;
            if(a == NOP && element.Assistant_Type == "Product Assistant leader"){
                
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(element.LOG_AUTH == COOK){
                res.redirect("http://192.168.0.12/assistant/product");
            }else{
                res.clearCookie("AS_PRO",{"path":"/assistant/product"});
                res.clearCookie("NOP",{"path":"/assistant/product"});
                res.status(200).render("product_Assis_Login");
                

            }
            
        }else{
            res.clearCookie("AS_PRO",{"path":"/assistant/product"});
            res.clearCookie("NOP",{"path":"/assistant/product"});
            res.status(200).render("product_Assis_Login");

        }
        
    }else{
        res.clearCookie("AS_PRO",{"path":"/assistant/product"});
        res.clearCookie("NOP",{"path":"/assistant/product"});
        res.status(200).render("product_Assis_Login");
    }
}

module.exports = Product_Assistant_Login_Get;