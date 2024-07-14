const User_Auth = require("../User_Auth.js");

const Pass_Hash = require("../Password_Hashing.js");


const {Signup_Model} = require("../All_Models.js");




const change_Password_PUT = async (req, res) =>{

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let Current_Change = req.body.Current_Change;
        let c = Pass_Hash(Current_Change, Auths.Email.trim().toLowerCase());
        let P = Auths.User_Password;
        if(c===P){
            let Create_Change = req.body.Create_Change;
            let Confirm_Change = req.body.Confirm_Change;
            if (Confirm_Change.length > 7) {
                if (Create_Change === Confirm_Change) {
                    let c = Pass_Hash(Confirm_Change, Auths.Email.trim().toLowerCase());
                    await Signup_Model.updateOne({Email: Auths.Email.trim().toLowerCase()},{
                        User_Password:c,
                    }).then(()=>{
                        res.status(200).json({Success:true, Message:"Password Changed successfully."});
                    })
                    

                    
                }else{
                    res.status(200).json({Success:false, Message:"Password don't match"});
                }
                
            }else{
                res.status(200).json({Success:false, Message:"Password must be at least 8 characters."});

            }

        }else{
            res.status(200).json({Success:false, Message:"Wrong Password"});
        }
    }else{
        res.clearCookie("U_ID");
        res.status(200).redirect("http://192.168.0.44/login");
    };
}
module.exports = change_Password_PUT;