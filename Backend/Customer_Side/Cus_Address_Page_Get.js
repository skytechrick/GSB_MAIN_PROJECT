const User_Auth = require("../User_Auth.js");

const Cus_Address_Page = async (req, res) => {
    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        
        let Add1 = Auths.Addresses;

        let Add;
        if (Add1.Address.length == 0) {
            Add = "";
        }else{
            let Pass = Add1.Active_ID
            let a = Add1.Address;
            let D = "";
            

            let aap;
            for (let r = 0; r < a.length; r++) {
                const element = a[r];

                if(Pass == element.ID){
                    aap = `<div class="Addresssss">
                    <div class="Addd">${element.Name} - (Default)</div>
                    <address>${element.Locality}, ${element.Landmark}<br>${element.Town}, ${element.City},<br>PIN: ${element.PIN},  <br>Dist: ${element.District_Name} <br>${element.State_Name}, India <br>+91 ${element.Mobile} <br> +91 ${element.Alt} <br></address>
                    <div class="BSATSRFSA">
                        <button style="padding: 0 8px" onclick="Edit_Ad(${element.ID})" class="Edit"><span class="material-symbols-outlined">edit</span></button>
                        
                        
                        </div></div>`                    
                        // <button class="Default" style="font-size:16px;">Active</button>
                }else{
                    D = D + `<div class="Addresssss">
                    <div class="Addd">${element.Name}</div>
                    <address>${element.Locality}, ${element.Landmark}<br>${element.Town}, ${element.City},<br>PIN: ${element.PIN},  <br>Dist: ${element.District_Name} <br>${element.State_Name}, India <br>+91 ${element.Mobile} <br> +91 ${element.Alt} <br></address>
                    <div class="BSATSRFSA">
                        <button class="Del" onclick="DeleteAd(${element.ID});"><span class="material-symbols-outlined">delete</span></button>
                        <button class="Edit" onclick="Edit_Ad(${element.ID});"><span class="material-symbols-outlined">edit</span></button>
                        <button class="Default" type="button" onclick="Set_Default(${element.ID});">Set as default</button>
                    </div></div>`
                }
                    
            }
            Add = aap + D;
            

        }







        let D = {
            Full_Name: Auths.First_Name + " " + Auths.Last_Name,
            Email: Auths.Email,
            Addresses:Add,






            
            // Mobile_Number: Auths.Mobile_Number,
            // Createed_Date: Joined_Date,
            // SB_Coins: Auths.SB_Coins.Value,
            // Address: AD,
            // CLASSS_1:CLASSS_1,
            // Bank:Bank,
            // CLASSS_2:CLASSS_2,

            Name: Auths.First_Name,
            Cart_No: Auths.Cart.length,
            Login:"",
            Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
        };
        res.status(200).render("Cus_Address", D);
    }else{
        res.clearCookie("U_ID");
        res.status(200).redirect("http://localhost/login");
    };
}

module.exports = Cus_Address_Page;