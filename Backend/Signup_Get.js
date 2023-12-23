const express = require('express');
const cookieParser = require('cookie-parser');



function Signup_Get(req, res) {
    const User_Id_ = req.cookies.User_Id_;
    if (User_Id_ == undefined || User_Id_ == null || User_Id_ == "") {
        
        res.cookie("New_User", "Yes",{
            httpOnly: true,
            path: "/signup",
            expires: new Date(Date.now() + 86400000),
            secure: false
        });
        res.status(200).render("Signup");
    }
    else{
        res.status(302).redirect("/");
    }
}


module.exports = Signup_Get;