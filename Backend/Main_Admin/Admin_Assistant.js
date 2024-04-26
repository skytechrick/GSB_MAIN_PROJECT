const {New_Worker_Model} = require("../All_Models.js");
Admin_Assistant = async (req, res) => {

    let a = "";

    let ss = await New_Worker_Model.find();
    for (let index = 0; index < ss.length; index++) {
        const element = ss[index];

        

        a = `<li><button onclick='Optiona("${element.Mobile_Number}","${element.Assistant_Type}");' type="button">${element.Mobile_Number} (${element.First_Name})</button></li>` + a;
        
    }

    res.status(200).render("Admin_Assistant",{ULL:a});
    
}

module.exports = Admin_Assistant;