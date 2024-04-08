const { render } = require("pug");

function Seller_Login_Post(req, res) {
    let {Mobile_Number, Password} = req.body;

    console.log(Mobile_Number);
    console.log(Password);

    res.render("Seller_Signup");


    
}

module.exports = Seller_Login_Post;