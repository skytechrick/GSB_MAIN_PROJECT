const fs = require("fs");

Main_Admin_GET = (req, res) =>{
    let da = fs.readFileSync("./Main_Admin/d.txt", "utf8");
    // let Auth = Auth_Token(59);
    let Admin = req.cookies.Admin;
    
    if(Admin){
        if (Admin == da){
            res.redirect("/admin");
        }else{
            res.clearCookie("Admin");
            res.redirect("/admin/login");
            
            
        }        
    }else{ 
        res.render("h");

    }

    
    


}

module.exports = Main_Admin_GET;