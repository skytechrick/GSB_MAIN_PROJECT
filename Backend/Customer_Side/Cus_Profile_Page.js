
// const {Signup_Model} = require("../All_Models.js");
// const {JWTV} = require("../JWT_.js");

const User_Auth = require("../User_Auth.js");

Cus_Profile_Page = async (req, res) => {
    let COOK = req.cookies.U_ID;

    Auths = await User_Auth(COOK);


    if (Auths != null) {
        
        let D = {

            Name:Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login:"",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
        }
        res.status(200).render("Cus_Profile_Page", D);
    }else{
        res.clearCookie("U_ID");

        res.status(200).redirect("http://192.168.0.44/login");
    }
        

}


module.exports = Cus_Profile_Page;