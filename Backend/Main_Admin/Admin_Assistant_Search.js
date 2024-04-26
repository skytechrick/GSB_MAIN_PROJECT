const {New_Worker_Model} = require("../All_Models.js");
Admin_Assistant_Search = async (req, res) => {

    let Search = req.body.Search_Man_I;

    let Search_Type = req.body.S_Type;
    console.log(Search);
    console.log(Search_Type);
    
    await New_Worker_Model.findOne({"Mobile_Number":Search,"Assistant_Type":Search_Type}).then(document => {
        if (document) {
            res.status(200).json(document);
            console.log(document)
        } else {
            res.status(200).json({Message:"User not found"});
        }
    })
    .catch(error => {
        res.status(200).json({Message:"User not found"});
    });
    
};

module.exports = Admin_Assistant_Search;