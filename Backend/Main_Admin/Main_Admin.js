const fs = require("fs");
const Auth_Token = require("../Auth_Token.js");


Main_Admin = (req, res) => {


    let da = fs.readFileSync("./Main_Admin/d.txt", "utf8");
    // let Auth = Auth_Token(59);
    console.log(da);
    // console.log(Auth);

    let Admin = req.cookies.Admin;

    if (Admin) {
        console.log(Admin)
        if (Admin == da) {
            
            res.render("Main_Admin");

            
        }else{

        }
    
    }else{
        // res.redirect("/admin/login");
    }
    
}


module.exports = Main_Admin;