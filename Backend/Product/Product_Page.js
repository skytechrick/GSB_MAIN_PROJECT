

Product_Page = (req, res) =>{
    let p = {
        Title:"RICK IS GOOD BOY",
    };
    res.status(200).render("Product_Page",p);


};
module.exports = Product_Page;