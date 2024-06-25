const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");

const Cus_Address_Del_Post = async (req, res) => {
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let Del_ID = req.body.ID;

        let dc = [];
        for (let q = 0; q < Auths.Addresses.Address.length; q++) {
            const element = Auths.Addresses.Address[q];
            if (element.ID != Del_ID) {
                dc.push(element);
            }


            
        }

        let OPP = dc;

        await Signup_Model.updateOne({Email:Auths.Email},{$set:{
            Addresses:{
                Active_ID:Auths.Addresses.Active_ID,
                Address:OPP,
            }
        }}).then(()=>{
            res.status(200).json({Message:"Deleted successfully."})
        })
        
        
        
        // res.status(200).json({Message:"Deleted successfully."})









        
    }else{
        res.clearCookie("U_ID");
        res.status(200).json({Message:"Unauthorised Access"});
    }


    
}

module.exports = Cus_Address_Del_Post;