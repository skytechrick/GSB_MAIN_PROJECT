const {New_Worker_Model} = require("../All_Models");
const Admin_Auth_Token = require("../Main_Admin/Admin_Auth_Token.js");

Product_Assistant_Login_Post = async (req, res) => {
    let COOK = req.cookies.AS_PRO;
    let NOP = req.cookies.NOP;
    if (!COOK && !NOP) {
        let d = req.body;
        let list = await New_Worker_Model.find({});
        let element;
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            if(d.G == element.Email && element.Assistant_Type == "Product Assistant leader"){
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(d.G == element.Email){
                if(d.P == element.Create_Password){
                    if(d.S == "Yes"){
                        let Ds = Admin_Auth_Token(40);
                        await New_Worker_Model.updateOne({Email: element.Email, Assistant_Type: "Product Assistant leader", Create_Password: element.Create_Password},{$set:{
                            LOG_AUTH: Ds,
                        }})
        
                        res.cookie("AS_PRO", Ds, {httpOnly: true, path: "/assistant/product", expires: new Date(Date.now() + 7200000), secure: false});
                        res.cookie("NOP", element.Mobile_Number, {httpOnly: true, path: "/assistant/product", expires: new Date(Date.now() + 7200000), secure: false});
                        res.json({"GOT":"Yes"});
                        
                    }else{
                        res.clearCookie("AS_PRO",{"path":"/assistant/product"});
                        res.clearCookie("NOP",{"path":"/assistant/product"});
                        res.json({"GOT":"NOP"});
                        
                    }
                }else{
                    res.clearCookie("AS_PRO",{"path":"/assistant/product"});
                    res.clearCookie("NOP",{"path":"/assistant/product"});
                    res.json({"GOT":"NOP"});
                    
                }
            }else{
                res.clearCookie("AS_PRO",{"path":"/assistant/product"});
                res.clearCookie("NOP",{"path":"/assistant/product"});
                res.json({"GOT":"NOP"});
                
        
            }


        }else{
            res.clearCookie("AS_PRO",{"path":"/assistant/product"});
            res.clearCookie("NOP",{"path":"/assistant/product"});
            res.status(200).json({GOT:"Yesfdsaf"});
        }
    }else{
        res.clearCookie("AS_PRO",{"path":"/assistant/product"});
        res.clearCookie("NOP",{"path":"/assistant/product"});
        res.status(200).redirect("http://192.168.0.44/assistant/product/login");
    }
}

module.exports = Product_Assistant_Login_Post;