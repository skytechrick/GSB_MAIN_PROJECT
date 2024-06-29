
const User_Auth = require("../User_Auth.js");
const { Product , Signup_Model} = require("../All_Models.js");


const Cart_Delete = async(req, res)=>{
    
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let data = Auths.Cart;

        let DC = [];

        for (let xx = 0; xx < data.length; xx++) {
            const element = data[xx];
            if(element.Product_ID != req.body.ID){
                DC.push(element);
            }
            
        }

        await Signup_Model.updateOne({Email:Auths.Email},{
            Cart:DC
        }).then(()=>{
            res.status(200).json({Message:true})
        })
        
    }else{
        res.status(200).json({Message:false})
    }



}

module.exports = Cart_Delete;