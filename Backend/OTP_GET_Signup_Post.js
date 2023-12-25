function OTP_GET_Signup_Post(req, res) {
    let d = req.cookies.Temp_ID;
    if(d == undefined || d == null || d == ""){
        res.status(401).send("You don't have direct access to this page. Signup first to enter OTP. Or your verification time is over and Re-create you account.");
    }else{
        
        res.status(200).render("OTP_Veri_Signup");
    };
};

module.exports = OTP_GET_Signup_Post;