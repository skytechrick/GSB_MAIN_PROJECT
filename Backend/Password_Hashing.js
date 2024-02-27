function Pass_Hash(Pass, Email){
    let Passs = new String(Pass);
    let Emaill = new String(Email);
    let New_Pass = "";
    for (let i = 0; i < Passs.length; i++) {
        const I = Passs[i];
        let DD = I.charCodeAt(0);
        New_Pass = New_Pass + DD;
    }

    return New_Pass;
    
}

module.exports = Pass_Hash;