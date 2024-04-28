
function Seller_Login_Post(req, res) {
    let {Mobile_Number, Password} = req.body;

    console.log(Mobile_Number);
    console.log(Password);

    res.json({Mob:Mobile_Number,Pass:Password});


    
}

module.exports = Seller_Login_Post;