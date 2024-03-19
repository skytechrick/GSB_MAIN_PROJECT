const {JWTV} = require("./JWT_");
function Login_Get(req, res) {
    
    const U_ID = req.cookies.U_ID;
    if (U_ID == undefined || U_ID == null || U_ID == "") {
        res.cookie("New_Login", "Yes",{
            httpOnly: true,
            path: "/login",
            expires: new Date(Date.now() + 86400000),
            secure: false
        });
        res.status(200).render("Login");
    }
    else{

        if(JWTV(U_ID)){
            res.status(302).redirect("/");
        }else{
            res.clearCookie("U_ID", { path:'/'});
            res.cookie("New_Login", "Yes",{
                httpOnly: true,
                path: "/login",
                expires: new Date(Date.now() + 86400000),
                secure: false
            });
            res.status(200).render("Login");
        };
        


        
    }
    // JWTT();
}
module.exports = Login_Get;