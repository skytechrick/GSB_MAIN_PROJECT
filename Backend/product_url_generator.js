function Product_URL_Generator() {
    const character = "qwertyuioplkjhgfdsazxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM";
    let name = "";
    let varrr = 0;
    let getRandom = 0;
    while (varrr <= 35){
        getRandom = Math.floor(Math.random() * 61);
        name = name + character[getRandom];
        varrr = varrr + 1;
    };
    return name;

};

module.exports = Product_URL_Generator;