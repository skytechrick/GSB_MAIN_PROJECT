

const User_Auth = require("../User_Auth.js");
const Orders_Refunds = async (req, res) =>{

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {

        let dx = {
            
            Name: Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login: "",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,

        }
        res.status(200).render("Order", dx);

        
    } else {
        res.clearCookie("U_ID");
        res.status(200).redirect("http://localhost/login");
    }
    
    
    
    
    
    
    
    
}
module.exports = Orders_Refunds;