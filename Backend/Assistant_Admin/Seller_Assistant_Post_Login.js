const {New_Worker_Model} = require("../All_Models");
const Admin_Auth_Token = require("../Main_Admin/Admin_Auth_Token.js");
Seller_Assistant_Post_Login = async (req, res) =>{
    let list = await New_Worker_Model.find({});
    let COOK = req.cookies.AS_SEL;
    let NO = req.cookies.NO;
    let d = req.body;
    let element;
    let MOB;
    if (!COOK && !NO) {
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            if(d.G == element.Email && element.Assistant_Type == "Sellers Assistant leader"){
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
                        await New_Worker_Model.updateOne({Email: element.Email, Assistant_Type: "Sellers Assistant leader", Create_Password: element.Create_Password},{$set:{
                            LOG_AUTH: Ds,
                        }})
        
                        res.cookie("AS_SEL", Ds, {httpOnly: true, path: "/assistant/seller", expires: new Date(Date.now() + 7200000), secure: false});
                        res.cookie("NO", element.Mobile_Number, {httpOnly: true, path: "/assistant/seller", expires: new Date(Date.now() + 7200000), secure: false});
                        res.json({"GOT":"Yes"});
                        
                    }else{
                        res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                        res.clearCookie("NO",{"path":"/assistant/seller"});
                        res.json({"GOT":"NO"});
                        
                    }
                }else{
                    res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                    res.clearCookie("NO",{"path":"/assistant/seller"});
                    res.json({"GOT":"NO"});
                    
                }
            }else{
                res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
                res.clearCookie("NO",{"path":"/assistant/seller"});
                res.json({"GOT":"NO"});
                
        
            }


        }else{
            res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
            res.clearCookie("NO",{"path":"/assistant/seller"});
            res.status(200).json({GOT:"Yesfdsaf"});
        }
    }else{
        res.clearCookie("AS_SEL",{"path":"/assistant/seller"});
        res.clearCookie("NO",{"path":"/assistant/seller"});
        res.status(200).redirect("http://192.168.0.44/assistant/seller/login");
    }
        
}

module.exports = Seller_Assistant_Post_Login;