const {Product} = require("../All_Models.js");
Product_Assistant__Product_Update_Post = async(req, res) => {
    let Val = req.body.Stock;
    let ID = req.body.ID;
    await Product.updateOne({Product_ID:ID},{Quantity_Available:Val});
    res.status(200).json({Message:"Updated successfully"});


};

module.exports = Product_Assistant__Product_Update_Post;