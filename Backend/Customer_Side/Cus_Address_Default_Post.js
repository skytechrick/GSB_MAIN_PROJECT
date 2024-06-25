const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");


const Cus_Address_Default_Post = async(req, res) =>{

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {

        await Signup_Model.updateOne({Email:Auths.Email},{$set:{
            Addresses:{
                Active_ID:req.body.ID,
                Address:Auths.Addresses.Address,
            }
        }}).then(()=>{
            res.status(200).json({Message:"Default address selected."})
        })
        
        
        
        // res.status(200).json({Message:"Deleted successfully."})









        
    }else{
        res.clearCookie("U_ID");
        res.status(200).json({Message:"Unauthorised Access"});
    }

}

module.exports = Cus_Address_Default_Post;