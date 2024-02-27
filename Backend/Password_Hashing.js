function binn(decimal){
    if (decimal === 0) {
        return '0'.padStart(12, '0');
    }
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    const paddingLength = Math.max(0, 12 - binary.length);
    binary = '0'.repeat(paddingLength) + binary;
    return "1" + binary;
};

function Pass_Hash(Pass, Email){
    let Passs = new String(Pass);
    let Emaill = new String(Email);
    let New_Pass = "";
    for (let i = 0; i < Passs.length; i++) {
        const I = Passs[i];
        let DD = I.charCodeAt(0);
        DD = binn(DD);
        // console.log(DD)
        DD = ((eval(DD)*17 + 99)*2);
        let F = new String(DD);
        New_Pass = New_Pass + F;
    }

    let New_Pass1 = "";
    for (let i = 0; i < Emaill.length; i++) {
        const I = Emaill[i];
        let DD = I.charCodeAt(0);
        DD = binn(DD);
        // console.log(DD)
        DD = ((eval(DD)*17 + 99)*2);
        let F = new String(DD);
        New_Pass1 = New_Pass1 + F;
    }

    return New_Pass + New_Pass1;
    
}

module.exports = Pass_Hash;