const User_Auth = require("../User_Auth.js");

const Cus_Profile_Page = async (req, res) => {
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let Createed_Date = new Date(Auths.Created_Account);
        let N = Number(Createed_Date.getMonth()+1);
        let Month_List = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let Joined_Date = Createed_Date.getDate()+ " " + `${Month_List[N]}` + ", "+ Createed_Date.getFullYear();
        let AD;
        let CLASSS_1;
        if(Auths.Addresses.Address.length == 0){
            AD = `<a href="/address">Add your address</a>`;
            CLASSS_1 = "XDXDXD";
        }else{

            let d = "";
            let Ass = Auths.Addresses.Active_ID;

            for (let index = 0; index < Auths.Addresses.Address.length; index++) {
                const element = Auths.Addresses.Address[index];
                if (Ass == element.ID) {

                    d = d+`<address>${element.Locality}, ${element.Landmark}<br>${element.Town}, ${element.City},<br>PIN: ${element.PIN},  <br>Dist: ${element.District_Name} <br>${element.State_Name}, India </address>`
                    break;

                    
                }else{
                    d = "";
                }
                
            }




            AD = d;
            CLASSS_1 = "";
        };
        let Bank;
        let CLASSS_2;
        if(Auths.Bank.length == 0){
            Bank = `<a href="/setting">Add your Bank Account</a>`;
            CLASSS_2 = "CFCF";
        }else{
            Bank = `<div class="BAN_D">State Bank of India <br>Rick Sarkar <br>42094200655 <br>SBIN0007148</div>`;
            CLASSS_2 = "";
            
        };
        let D = {
            Full_Name: Auths.First_Name + " "+ Auths.Last_Name,
            Email: Auths.Email,
            Mobile_Number: Auths.Mobile_Number,
            Createed_Date: Joined_Date,
            SB_Coins: Auths.SB_Coins.Value,
            Address: AD,
            CLASSS_1:CLASSS_1,
            Bank:Bank,
            CLASSS_2:CLASSS_2,

            Name: Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login:"",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
        };
        res.status(200).render("Cus_Profile_Page", D);
    }else{
        res.clearCookie("U_ID");
        res.status(200).redirect("http://localhost/login");
    };
}

module.exports = Cus_Profile_Page;