const e = require("express");
const {Seller} = require("../All_Models.js");
Product_Assistant__Search_Post = async (req, res) => {
    // console.log(req.body);
    let ID = req.body.ID;
    let Send = req.body.Send;

    // console.log(ID);
    if(ID && Send){
        let element;
        let data = await Seller.find({});
        // console.log(data);
        let k = 0;
        for (let i = 0; i < data.length; i++) {
            element = data[i];
            console.log(element);
            if (element.Profile_ID == ID) {
                k = 1;
                break;
            }
            
            
        }
        if(k == 1){
            if(element.Profile_ID == ID && element.Done == "Yes"){
                res.status(200).json({FOUND:"Yes"});
            }else{
                
                res.status(200).json({FOUND:"Not Verified or Banned"});
            }
        }else{
                
            res.status(200).json({FOUND:"User not Found"});

        }
    }else{
        
        res.status(200).json({FOUND:"User not Found"});
    }

}

module.exports = Product_Assistant__Search_Post;