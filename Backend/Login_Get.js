function Login_Get(req, res) {
    const User_Id_ = req.cookies.User_Id_;
    if (User_Id_ == undefined || User_Id_ == null || User_Id_ == "") {
        res.cookie("New_Login", "Yes",{
            httpOnly: true,
            path: "/login",
            expires: new Date(Date.now() + 86400000),
            secure: false
        });
        res.status(200).render("Login");
    }
    else{
        res.status(302).redirect("/");
    }
}
module.exports = Login_Get;