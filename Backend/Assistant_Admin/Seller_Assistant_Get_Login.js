const {New_Worker_Model} = require("../All_Models");
Seller_Assistant_Get_Login = async (req, res) => {

    let list = await New_Worker_Model.find({});
    let COOK = req.cookies.AS_SEL;
    let NO = req.cookies.NO;
    let element;
    
    
    if (COOK && NO) {
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            let a = element.Mobile_Number;
            if(a == NO && element.Assistant_Type == "Sellers Assistant leader"){
                
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(element.LOG_AUTH == COOK){
                res.redirect("http://192.168.0.12/assistant/seller");
            }else{
                res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                res.clearCookie("NO",{"path":"/assistant/seller"});
                res.status(200).render("Seller_Assis_Login");
                

            }
            
        }else{
            res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
            res.clearCookie("NO",{"path":"/assistant/seller"});
            res.status(200).render("Seller_Assis_Login");

        }
        
    }else{
        res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
        res.clearCookie("NO",{"path":"/assistant/seller"});
        res.status(200).render("Seller_Assis_Login");
    }
        
}

module.exports = Seller_Assistant_Get_Login;