
Product_Assistant_Login_Get = (req, res) => {
    let COOK = req.cookies.AS_PRO;
    let NOP = req.cookies.NOP;
    if (!COOK && !NOP) {
        res.render("Product_Assis_Login");
    }else{
        res.redirect("http://192.168.0.44/assistant/product");
    }
}

module.exports = Product_Assistant_Login_Get;