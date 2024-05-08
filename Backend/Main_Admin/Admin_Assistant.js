const {New_Worker_Model} = require("../All_Models.js");
const fs = require("fs");
Admin_Assistant = async (req, res) => {



    let Admin = req.cookies.Admin;

    let auth = fs.readFileSync("./Main_Admin/d.txt","utf8");
    if (Admin == auth) {
        
        
        let ss = await New_Worker_Model.find();
        let a = "";
        for (let index = 0; index < ss.length; index++) {
            const element = ss[index];
            
            
            
            a = `<li><button onclick='Optiona("${element.Mobile_Number}","${element.Assistant_Type}");' type="button">${element.Mobile_Number} (${element.First_Name})</button></li>` + a;
            
        }
        
        res.status(200).render("Admin_Assistant",{ULL:a});
    }else{
        res.clearCookie("Admin");
        res.redirect("/admin/login");
    }
        
}

module.exports = Admin_Assistant;