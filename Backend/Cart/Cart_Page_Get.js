
const User_Auth = require("../User_Auth.js");


const Cart_Page_Get = async (req, res) => {

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {






        
        let d = {
            
            Name:Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login:"",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
        
        } 

        res.status(200).render("Cus_Cart_Page",d);

    }else{
        res.status(200).redirect("192.168.0.44/login");
    }

    
}

module.exports = Cart_Page_Get;