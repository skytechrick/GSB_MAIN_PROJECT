const {New_Worker_Model} = require("../All_Models")


Product_Assistant_Get = async (req, res) =>{

    let COOK = req.cookies.AS_PRO;
    let NOP = req.cookies.NOP;
    
    
    
    if (COOK && NOP) {
        let list = await New_Worker_Model.find({});
        let element;
        p = 0;
        for (let index = 0; index < list.length; index++) {
            element = list[index];
            let a = element.Mobile_Number;
            if(a == NOP && element.Assistant_Type == "Product Assistant leader"){
                
                p = 1;
                break;
            }else{
                p = 2;
            }
        };
        if (p == 1) {
            if(element.LOG_AUTH == COOK){
                let AdD = `${element.Village_Name}, ${element.Locality_Road}, <br> PIN: ${element.Pin_Code}<br>Dist: ${element.District_Name} <br> ${element.City_Name}, ${element.State_Name}`;
                
                let Data = {
                    Profile_IDDD: element.Profile_ID,
                    First_Name: `<input type="text" id="First_Name" value="${element.First_Name}" disabled>`,
                    Last_Name: element.Last_Name,
                    Email: element.Email,
                    Mobile_Number: element.Mobile_Number,
                    Address: AdD,
                    AGE: element.Your_Age,
                    GENDEER: element.Gender,
                    SALanguage: `<input type="text" id="Language" value="${element.Language}" disabled>`,
                    
                    BANK_N: `<input type="text" id="Bank_Name" value="${element.Bank_Name}" disabled>`,
                    
                    Account_Np: element.Account_Number,
                    Benificiary:`<input type="text" id="Account_Benificiary_Name" value="${element.Account_Name}" disabled>`,
                    
                    IFSC_Code: element.Ifsc_Code,

                    UPI_NO: element.Upi_Number,

                }
                res.status(200).render("Product_Assistant_Get", Data);
            }else{
                res.clearCookie("AS_PRO",{"path":"/assistant/product"});
                res.clearCookie("NOP",{"path":"/assistant/product"});
                res.redirect("http://localhost/assistant/product/login");
            }
            
        }else{
            res.clearCookie("AS_PRO",{"path":"/assistant/product"});
            res.clearCookie("NOP",{"path":"/assistant/product"});
            
            res.redirect("http://localhost/assistant/product/login");

        }
        
    }else{
        res.clearCookie("AS_PRO",{"path":"/assistant/product"});
        res.clearCookie("NOP",{"path":"/assistant/product"});
        res.status(200).redirect("http://localhost/assistant/product/login");
    }





    res.render("Product_Assistant_Get");


}

module.exports = Product_Assistant_Get;