const { Signup_Model } = require("./All_Models.js");
const {JWTV} = require("./JWT_.js")

Home = async(req, res) => {

    let U_ID = req.cookies.U_ID;


    // console.log(1);
    if (U_ID) {
        let chec = JWTV(U_ID);
        if (chec == null) {
            res.clearCookie("U_ID");
            res.status(200).render(`Home2`,{
                Name: "User",
                Cart_No: 0,
                Login: `<a href="/login" class="Profile_Options">Login</a>`,
            });
            // console.log(2);
        }
        else{
            let elem;
            let g = 1;
            let data = await Signup_Model.find({});
            
            for (let i = 0; i < data.length; i++) {
                elem = data[i];
                if(elem.Profile_Id == chec.Profile_ID){
                    g = 2;
                    break;
                };
                
            }
            // console.log(3);
            if (g == 1){  
                res.clearCookie("U_ID");
                res.status(200).render(`Home2`,{
                    Name: "Guest",
                    Cart_No: 0,
                    Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                    // Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
                    Logout1: ``,
                });
                // console.log(4);
            }
            else if(g == 2){
                if(chec.Verified=="Yes"){
                    // console.log(5);
                    // console.log(chec.Profile_Log);
                    // console.log('chec.Profile_Log');
                    // console.log(elem.Profile_Log);
                    if(chec.Profile_Log == elem.Profile_Log){
                        let s = elem.Cart.length;
                        // console.log(s)
                        res.status(200).render(`Home2`,{
                            Name:elem.First_Name,
                            Cart_No: s,
                            Login:"",
                            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
                        });
                        // console.log("T")
                   
                    }else{
                        res.clearCookie("U_ID");
                        res.status(200).render(`Home2`,{
                            Name: "Guest3",
                            Cart_No: 0,
                            Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                            Logout1: ``,
                        });
                        // console.log(7);
                    }

                }else{
                    // console.log(6);
                    res.clearCookie("U_ID");
                    res.status(200).render(`Home2`,{
                        Name: "Guest2",
                        Cart_No: 0,
                        Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                        // Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
                        Logout1: ``,
                    });
                }


            }

        }
        
    }else{
        res.status(200).render(`Home2`,{
            Name: "Guest1",
            Cart_No: 0,
            Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
            // Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
            Logout1: ``,
        });
    }

    






    let da = {};
    
}

module.exports = Home;