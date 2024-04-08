
function Logout_Post(req, res) {
    let a = req.body.Logout;
    if (a == "Yes") {
        res.clearCookie("U_ID");
        res.json({M: "Yes"});
    }else{
        
        res.json({Message: "Not allow"});
    }
    
}
module.exports = Logout_Post;