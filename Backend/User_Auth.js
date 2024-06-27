
const {Signup_Model} = require("./All_Models.js");
const {JWTV} = require("./JWT_.js");




const User_Auth = async (Auths) => {

    let COOK = Auths;

    let Ver = JWTV(COOK);

    if (Ver == null) {
        return null;
    }else{
        // console.log(Ver);
        
        let ID = 1;
        let Profilee;
        let data = await Signup_Model.find({});
        for (let kll = 0; kll < data.length; kll++) {
            const V1 = data[kll];

            if(V1.Profile_Id == Ver.Profile_ID && Ver.Verified == "Yes" && Ver.Profile_Log == V1.Profile_Log){
                ID = 2;
                Profilee = V1;
                break;
            };
            
        }
        if (ID == 2) {
            return Profilee;        
        }else{
            return null;
        }
    }
}

module.exports = User_Auth;