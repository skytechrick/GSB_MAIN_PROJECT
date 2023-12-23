const express = require('express');
const cookieParser = require('cookie-parser');



function Signup_Get(req, res) {

    const User_Id_ = req.cookies.User_Id_;
    
    // res.cookie("User_Id_", "THIS IS GSB COOKIE");
    if (User_Id_ == undefined || User_Id_ == null || User_Id_ == "") {
        res.status(200).render("Signup");

        
    }
    else{
        res.status(200).redirect("/")
    }
    console.log(User_Id_);


}


module.exports = Signup_Get;