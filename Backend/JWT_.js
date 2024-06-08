const jwt = require("jsonwebtoken");
 
const Signature = "84dsadsadasdsadsd ssadsadas sad sad ssa dasdas sasdsa dsdsa sad saasd-------___________36431df656RICKsasds@#424224242@$4$2242$22142adasdsa63454234436%#$^^^$^$^^$^^%^^^^%%$^$#$%@#%#%#$%#$%##*(&^&^d96fasd9(789Fd7fhsa7d9h(G97A( 97gcd9c9aw96ec99cea9ec7cbb%$^$$rkarINDIA_Bagdogra_HIghlightsads45344s!@#%&*#(^#(^*)^#)^*)###(^#(#(^&(#^#&^&#)&^#)&^)&#%#&))&V)#))BV#&%B#&B0b73)%&#)B70b737b#B&375b3075B#0&%*)&)*&)%3780B&%807B*&58B&5837)*dsf32fdsfsdf443dsf14@%^@##";

function JWTT(payload) {    
    const c = jwt.sign(payload, Signature);
    return c;
};
function JWTTT(token){
    try {
        const aa = jwt.verify(token,Signature)
        return aa;
    } catch (E) {
        return null;
        
    }
}
module.exports = {
    JWTC:JWTT,
    JWTV:JWTTT,
};