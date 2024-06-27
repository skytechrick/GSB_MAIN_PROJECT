const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");

const Cart_Button_Anywhere = async(req,res) =>{
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let cartr = Auths.Cart.length;

        let obj = [];
        if (Auths.Cart.length <1) {
            cartr++;
            obj.push({
                Product_ID: req.body.Product_ID,
                Time: Date(),
                Quantity: 1,
                
            });
        }else{

            let s = 2;
            for (let index = 0; index < Auths.Cart.length; index++) {
                const element = Auths.Cart[index];
                if(element.Product_ID == req.body.Product_ID){
                    obj.push({
                        Product_ID: req.body.Product_ID,
                        Time: element.Time,
                        Quantity: element.Quantity + 1,
                        
                    });
                    s=1;
                    
                    // break;
                }else{
                    // s=2;
                    obj.push(element);
                }
                
            }
            if(s == 2 ){
                cartr = cartr+1;
                obj.push({
                    Product_ID: req.body.Product_ID,
                    Time: Date(),
                    Quantity: 1,
                    
                });
            }

        }


        // console.log("Sddsd");


        await Signup_Model.updateOne({Email:Auths.Email},{$set:{Cart:obj}});
        res.status(200).json({Message:"Added Successfully.", Cart_No: cartr});
    }else{
        res.status(200).json({Message:"Unauthorised access."});
    }


}
module.exports = Cart_Button_Anywhere;