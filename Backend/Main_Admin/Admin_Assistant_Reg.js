const {New_Worker_Model} = require("../All_Models.js");

const fs = require("fs");
Admin_Assistant_Reg = (req, res) =>{


    
    let Admin = req.cookies.Admin;

    let auth = fs.readFileSync("./Main_Admin/d.txt","utf8");
    if (Admin == auth) {
        const {Acode, Added_By, First_Name, Last_Name, Mobile_Number, Email, Create_Password, Country_Name, State_Name, District_Name, Pin_Code, City_Name, Village_Name, Locality_Road, Language, Your_Age, Gender, Bank_Name, Account_Name, Account_Number, Ifsc_Code, Upi_Number, Assistant_Type} = req.body
        const se = {
            "Acode": Acode,
            "Added_By": Added_By,
            "First_Name": First_Name,
            "Last_Name": Last_Name,
            "Mobile_Number": Mobile_Number,
            "Email": Email,
            "Create_Password": Create_Password,
            "Country_Name": Country_Name,
            "State_Name": State_Name,
            "District_Name": District_Name,
            "Pin_Code": Pin_Code,
            "City_Name": City_Name,
            "Village_Name": Village_Name,
            "Locality_Road": Locality_Road,
            "Language": Language, 
            "Your_Age": Your_Age,
            "Gender": Gender,
            "Bank_Name": Bank_Name,
            "Account_Name": Account_Name,
            "Account_Number": Account_Number,
            "Ifsc_Code": Ifsc_Code,
            "Upi_Number": Upi_Number,
            "Created_Date": Date.now(),
            "Verified":"Yes",
            "Ban":"No",
            "Assistant_Type":Assistant_Type,
        };
        
        
        let New_Worker1 = new New_Worker_Model(se);
        New_Worker1.save().then(() =>{
            console.log("Saved to database....:");
        });
        res.status(200).redirect("/admin/assistant/");
    }else{
        res.clearCookie("Admin");
        res.redirect("/admin/login");
    }

}
module.exports = Admin_Assistant_Reg;