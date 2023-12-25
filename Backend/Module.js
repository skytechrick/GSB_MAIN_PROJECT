const mongoose = require("mongoose");
const Signup_Schema = new mongoose.Schema({
    First_Name:{
        type: String
    },
    Last_Name:{
        type: String
    },
    Mobile_Number:{
        type: Number
    },
    Email:{
        type: String
    }, 
    User_Password:{
        type: String
    },
    Verification:{
        type: String
    },
    Created_Account: {
        type: Date
    },
    Authentication:{
        type: Object
    }
});

const Signup_Model = mongoose.model("Main_User", Signup_Schema);