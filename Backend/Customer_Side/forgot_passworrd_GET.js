

const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");



const forgot_passworrd_GET = async(req, res) =>{
    
    res.cookie("For", "Forget", {
        httpOnly: true,
        path: "/", 
        expires: new Date(Date.now() + 600000),
        secure: false,
    });
                                



        
    res.status(200).render("forgot_passworrd_GET");

}
module.exports = forgot_passworrd_GET;