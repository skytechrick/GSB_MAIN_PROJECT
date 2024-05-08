function Admin_Auth_Token(len) {
    const character = "qwertyuioplkjhgfdsazxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM:#_-";
    let name = "";
    let varrr = 0;
    let getRandom = 0;
    while (varrr <= len){
        getRandom = Math.floor(Math.random() * (character.length-1));
        name = name + character[getRandom];
        varrr = varrr + 1;
    };
    return name;

};

module.exports = Admin_Auth_Token;