const {New_Worker_Model} = require("../All_Models.js");
const fs = require("fs");
Admin_Assistant_Search = async (req, res) => {


    
    let Admin = req.cookies.Admin;

    let auth = fs.readFileSync("./Main_Admin/d.txt","utf8");
    if (Admin == auth) {
        
            

        let Search = req.body.Search_Man_I;

        let Search_Type = req.body.S_Type;
        // console.log(Search);
        // console.log(Search_Type);
        
        await New_Worker_Model.findOne({"Mobile_Number":Search,"Assistant_Type":Search_Type}).then(document => {
            if (document) {
                res.status(200).json(document);
                // console.log(document)
            } else {
                res.status(200).json({Message:"User not found"});
            }
        })
        .catch(error => {
            res.status(200).json({Message:"User not found"});
        });
        
    }else{
        res.clearCookie("Admin");
        res.redirect("/admin/login");
    }
        
    
};

module.exports = Admin_Assistant_Search;