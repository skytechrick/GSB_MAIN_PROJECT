const Pass_Hash = require("./Password_Hashing");
function Signup_Get(req, res) {
    const User_Id_ = req.cookies.User_Id_;
    // const Temp_ID = req.cookies.Temp_ID;
    
    if (User_Id_ == undefined || User_Id_ == null || User_Id_ == "") {
        // if (Temp_ID) {
        //     res.json({
        //         SUCCESS:"YES"
        //     })
        //     res.status(200).render("Signup");
        // }
        
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
    console.log(Pass_Hash('a','ricksarkar2005@gmail.com'));
    
}


module.exports = Signup_Get;