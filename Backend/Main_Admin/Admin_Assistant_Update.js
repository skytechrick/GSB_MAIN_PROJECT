const {New_Worker_Model} = require("../All_Models.js");
Admin_Assistant_Update = async (req, res) => {

    let Keya = req.body.Keya;
    let Value = req.body.Value;
    let Numbera = req.body.Num;
    let A_Type = req.body.A_Type;
    console.log(Keya);
    console.log(Numbera);
    console.log(Value);
    console.log(A_Type);
    let a;
    switch (Keya) {
        case "Acode":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Acode:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "First_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    First_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Last_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Last_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Mobile_Number":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Mobile_Number:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Email":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Email:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Create_Password":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Create_Password:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Country_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Country_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "State_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    State_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "District_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    District_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Pin_Code":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Pin_Code:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "City_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    City_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Village_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Village_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Locality_Road":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Locality_Road:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Language":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Language:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Your_Age":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Your_Age:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Gender":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Gender:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Bank_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Bank_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Account_Name":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Account_Name:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Account_Number":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Account_Number:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Ifsc_Code":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Ifsc_Code:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Upi_Number":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Upi_Number:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Created_Date":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Created_Date:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Verified":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Verified:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Ban":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Ban:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        case "Assistant_Type":
            a = "";

            try {
                await New_Worker_Model.updateOne({Mobile_Number:Numbera, Assistant_Type:A_Type},{$set:{
                    Assistant_Type:Value,
                }});
                console.log("Updated");
                res.json({Message:"Updated Successfully"});
                
            } catch (error) {
                console.log("Not Updated");
                res.json({Message:"Updated Failed"});
                
            }
            break;
        default:
            console.log("Default");
            res.json({Message:"Updated Failed"});
                
            break;
    }
    


};

module.exports = Admin_Assistant_Update;