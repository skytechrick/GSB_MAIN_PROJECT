const fs = require("fs");
const Admin_Auth_Token = require("./Admin_Auth_Token.js");
Main_Admin_Post = (req, res) =>{

    const PAs = "1234Taniskaa@#*";
    let d = req.body;
    let Ds = Admin_Auth_Token(40);
    fs.writeFileSync("./Main_Admin/d.txt", Ds);

    if(d.G == 'ricksarkar2005@gmail.com'){
        if(d.P == PAs){
            if(d.S == "Yes"){

                res.cookie("Admin", Ds, {httpOnly: true, path: "/admin", expires: new Date(Date.now() + 1200000), secure: false});
                res.json({"GOT":"Yes"});
                
            }else{
                res.clearCookie("Admin");
                res.json({"GOT":"NO"});
                
            }
        }else{
            res.clearCookie("Admin");
            res.json({"GOT":"NO"});
            
        }
    }else{
        res.clearCookie("Admin");
        res.json({"GOT":"NO"});
        

    }


    // res.redirect("http://192.168.0.44/admin");

}

module.exports = Main_Admin_Post;