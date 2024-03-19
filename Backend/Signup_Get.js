const {JWTV} = require("./JWT_");
function Signup_Get(req, res) {
    const U_ID = req.cookies.U_ID;
    
    if (U_ID == undefined || U_ID == null || U_ID == "") {
        res.cookie("New_User", "Yes",{
            httpOnly: true,
            path: "/signup",
            expires: new Date(Date.now() + 86400000),
            secure: false
        });
        res.status(200).render("Signup");
    }
    else{
        if(JWTV(U_ID)){
            res.status(302).redirect("/");
        }else{
            res.clearCookie("U_ID", { path:'/'});
            res.cookie("New_User", "Yes",{
                httpOnly: true,
                path: "/signup",
                expires: new Date(Date.now() + 86400000),
                secure: false
            });
            res.status(200).render("Signup");
        };
        // res.status(302).redirect("/");
    }
}


module.exports = Signup_Get;