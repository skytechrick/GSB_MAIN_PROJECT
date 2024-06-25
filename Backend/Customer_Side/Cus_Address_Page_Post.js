const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");

const Cus_Address_Page_Post = async (req, res) => {
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {

        let Name = req.body.Name;
        let PIN = req.body.PIN;
        let Locality = req.body.Locality;
        let Landmark = req.body.Landmark;
        let Town = req.body.Town;
        let City = req.body.City;
        let Mobile = req.body.Mobile;
        let Alt = req.body.Alt;
        let District_Name = req.body.District_Name;
        let State_Name = req.body.State_Name;
        let ID = String(Date.now());
        
        if(Name == "" ||
        Name == null ||
        Name == " " ||
        Name.length < 3 ||
        PIN == "" ||
        PIN == null ||
        PIN == " " ||
        PIN.length != 6 ||
        Locality == "" ||
        Locality == null ||
        Locality == " " ||
        Locality.length < 3 ||
        Landmark == "" ||
        Landmark == null ||
        Landmark == " " ||
        Landmark.length < 3 ||
        Town == "" ||
        Town == null ||
        Town == " " ||
        Town.length < 3 ||
        City == "" ||
        City == null ||
        City == " " ||
        City.length < 3 ||
        State_Name == "" ||
        State_Name == null ||
        State_Name == " " ||
        State_Name.length < 3 ||
        District_Name == "" ||
        District_Name == null ||
        District_Name == " " ||
        District_Name.length < 3 ||
        Mobile == "" ||
        Mobile == null ||
        Mobile == " " ||
        Mobile.length != 10 ||
        Alt == "" ||
        Alt == null ||
        Alt == " " ||
        Alt.length != 10){
            console.log(req.body);
            res.status(200).json({Message:"Empty"});
            
        }else{


            let New = {
                ID:ID,
                Name:Name,
                PIN:PIN,
                Locality:Locality,
                Landmark:Landmark,
                Town:Town,
                City:City,
                Mobile:Mobile,
                Alt:Alt,
                District_Name:District_Name,
                State_Name:State_Name,
            }
            let all = Auths.Addresses.Address;
            
            if(all.length < 1){
                let Ob = [];
                Ob.push(New);
                await Signup_Model.updateOne({Email: Auths.Email},{
                    $set:{
                        Addresses:{
                            Active_ID:`${New.ID}`,
                            Address: Ob
                        }
                        
                    }
                }).then(() =>{
                    
                    res.status(200).json({Message:"Added"});
                });
                // console.log(q);
                
                
            }else{
                

                

                let Ob = Auths.Addresses.Address;
                Ob.push(New);
                await Signup_Model.updateOne({Email: Auths.Email},{
                    $set:{
                        Addresses:{
                            Active_ID:`${New.ID}`,
                            Address: Ob
                        }
                        
                    }
                }).then(() =>{

                    res.status(200).json({Message:"Added"});
                });
            }
                                // Addresses:{
                                //     Active_ID:"",
                                //     Address:[]
                                // }

        }

        
        
    }else{
        res.clearCookie("U_ID");
        
        res.status(200).json({Message:"Unauthorised Access"});
    };
}


module.exports = Cus_Address_Page_Post;