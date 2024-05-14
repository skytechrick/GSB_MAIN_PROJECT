function Profile_ID_G() {
    const character = "1234567890";
    let name = "";
    let varrr = 1;
    let getRandom = 0;
    while (varrr <= 12){
        getRandom = Math.floor(Math.random() * (character.length-1));
        name = name + character[getRandom];
        varrr = varrr + 1;
    };
    return name;
};

module.exports = Profile_ID_G;