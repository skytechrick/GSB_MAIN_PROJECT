
const User_Auth = require("../User_Auth.js");



const privacy_and_policy = async (req, res) => {

    
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        
        res.status(200).render("Privacy_Policy",{
            Name: Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login: "",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
        });

    }else{
        
        res.status(200).render("Privacy_Policy",{
            Name: "Guest",
            Cart_No: 0,
            Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
            Logout1: ``,
        });
    }



}

module.exports = privacy_and_policy;