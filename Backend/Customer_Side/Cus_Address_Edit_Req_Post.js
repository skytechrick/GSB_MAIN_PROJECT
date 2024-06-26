const User_Auth = require("../User_Auth.js");
const {Signup_Model} = require("../All_Models.js");


const Cus_Address_Edit_Req_Post = async (req, res) => {

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {
        let innder = `<div id="Edit_ADdddressssss_I1">
            <div class="boxxAddddd">
                <div class="boxxAddddd_Top">
                    <span>Edit</span>
                    <span id="Edit_CLOSE_ADDRESS" class="material-symbols-outlined">close</span>

                </div>
                <div class="MSDSADSASADSDSDSADSADD">
                    <div>
                        <input id="Edit_Name" placeholder="Name" type="text">
                        <input id="Edit_PIN" placeholder="PIN" autocomplete="off" spellcheck="false" type="text" maxlength="6">
                    </div>
                    <div>
                        <input id="Edit_Locality" placeholder="Locality" autocomplete="off" spellcheck="false" type="text">
                        <input id="Edit_Landmark" placeholder="Landmark/road" autocomplete="off" spellcheck="false" type="text">
                    </div>
                    <div>
                        <input id="Edit_Town" placeholder="Town" autocomplete="off" spellcheck="false" type="text">
                        <input id="Edit_City" placeholder="City" autocomplete="off" spellcheck="false" type="text">
                    </div>
                    <div>
                        <select name="Edit_State_Name" id="Edit_State_Name">
                            <option value="SelectState">Select State</option>
                            <option value="Andra Pradesh">Andra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madya Pradesh">Madya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Orissa">Orissa</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttaranchal">Uttaranchal</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                            <option disabled style="background-color:#aaa; color:#fff">UNION Territories</option>
                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                            <option value="Chandigarh">Chandigarh</option>
                            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                            <option value="Daman and Diu">Daman and Diu</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Lakshadweep">Lakshadweep</option>
                            <option value="Pondicherry">Pondicherry</option>
                                        
                            
                        </select>
                        <select name="District_Name" id="Edit_District_Name">
                            <option value="">Select District</option>

                        </select>
                        
                    </div>
                    <div>

                        <input id="Edit_Mobile" placeholder="Mobile Number" autocomplete="off" spellcheck="false" type="text" maxlength="10">
                        <input id="Edit_Alt" placeholder="Alt. Number" autocomplete="off" spellcheck="false" type="text" maxlength="10">
                    </div>
                    <div>
                        <center >
                            <button id="Edit_SBTNN" class="SBTNN" onclick="Edit_Address(${req.body.ID});">Add address</button>
                        </center>
                        
                        
                    </div>
                    <center id="Edit_Message" style="color:red; display: none; margin-bottom: 15px; font-size: 12px;">Enter valid details / Blanks cann't be empty.</center>
                </div>
            </div>
        </div>`;

        res.json({innder:innder});
    }else{
        
        res.clearCookie("U_ID");
        res.status(200).json({Message:"Unauthorised Access"});
    }

}


module.exports = Cus_Address_Edit_Req_Post;