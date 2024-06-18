const {Product, Signup_Model} = require("../All_Models.js");
const {JWTV} = require("../JWT_.js");
const Offer_Per = require("../ShortCut/Offer_Per.js")
Product_Page = async (req, res) =>{
    let URLL = req.params.Url_P;
    let data = await Product.find({});
    let element11;
    let r = 1;
    for (let i = 0; i < data.length; i++) {
        element11 = data[i];
        if(element11.Product_URL == URLL){
            r = 3;
            break;
        }else{
            r = 1;
        }
        
    }


    
    let U_ID = req.cookies.U_ID;


    // console.log(1);
    
    if(r == 3){
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
                            let PG = element11;

                            let FILES = ``;
                            let PO = PG.Image_Locaitons;
                            // console.log(PO);
                            for (let index = 0; index < PO.length; index++) {
                                const element = PO[index];
                                FILES += `  
                                <button class="dda" onclick="smImg(${index})" id="smImg${index}">
                                    <img class="ms_img" id="Image_Select${index}" src="${element}">
                                </button>`;
                            }



                        
                        
                            let p = {
                                Title: PG.Title,
                                Store_Name:"GSB - Store",
                                Selling_P:PG.Prize.Our_Prize,
                                MRP:PG.Prize.MRP,
                                IMAGES: FILES,

                                OFFFER: Offer_Per (PG.Prize.MRP, PG.Prize.Our_Prize),

                                Des: PG.Description,

                                QNAA: `<P style="text-align: center;">No QnA</p>`,
                                REVV: `<P style="text-align: center;">No review</p>`,

                                Name:elem.First_Name,
                                Cart_No: elem.Cart.length,
                                Login:"",
                                Logout1: `<a href="/logout" class="Profile_Options_Nav2">Logout</a>`,
                            };

                            res.status(200).render("Product_Page",p);









                            // res.status(200).render("Product_Page",p);
                            // console.log("T")
                        
                        }else{
                            let PG = element11;
                            let FILES = ``;
                            let PO = PG.Image_Locaitons;
                            // console.log(PO);
                            for (let index = 0; index < PO.length; index++) {
                                const element = PO[index];
                                FILES += `<button class="dda" onclick="smImg(${index})" id="smImg${index}">
                                                <img class="ms_img" id="Image_Select${index}" src="${element}">
                                            </button>`
                                
                            }


                            res.clearCookie("U_ID");

                            
                            let p = {
                                Title: PG.Title,
                                Store_Name:"GSB - Store",
                                Selling_P:PG.Prize.Our_Prize,
                                MRP:PG.Prize.MRP,
                                IMAGES: FILES,

                                OFFFER: Offer_Per (PG.Prize.MRP, PG.Prize.Our_Prize),

                                Des: PG.Description,

                                QNAA: `<P style="text-align: center;">No QnA</p>`,
                                REVV: `<P style="text-align: center;">No review</p>`,

                                Name: "Guest3",
                                Cart_No: 0,
                                Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                                Logout1: ``,
                            };

                            res.status(200).render("Product_Page",p);


                        }

                    }else{
                        let PG = element11;
                        let FILES = ``;
                        let PO = PG.Image_Locaitons;
                        // console.log(PO);
                        for (let index = 0; index < PO.length; index++) {
                            const element = PO[index];
                            FILES += `<button class="dda" onclick="smImg(${index})" id="smImg${index}">
                                            <img class="ms_img" id="Image_Select${index}" src="${element}">
                                        </button>`
                            
                        }

                        
                        res.clearCookie("U_ID");

                            
                        let p = {
                            Title: PG.Title,
                            Store_Name:"GSB - Store",
                            Selling_P:PG.Prize.Our_Prize,
                            MRP:PG.Prize.MRP,
                            IMAGES: FILES,

                            OFFFER: Offer_Per (PG.Prize.MRP, PG.Prize.Our_Prize),

                            Des: PG.Description,

                            QNAA: `<P style="text-align: center;">No QnA</p>`,
                            REVV: `<P style="text-align: center;">No review</p>`,


                            Name: "Guest3",
                            Cart_No: 0,
                            Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                            Logout1: ``,
                        };

                        res.status(200).render("Product_Page",p);
                    }


                }else{
                    let PG = element11;
                    let FILES = ``;
                    let PO = PG.Image_Locaitons;
                    // console.log(PO);
                    for (let index = 0; index < PO.length; index++) {
                        const element = PO[index];
                        FILES += `<button class="dda" onclick="smImg(${index})" id="smImg${index}">
                                        <img class="ms_img" id="Image_Select${index}" src="${element}">
                                    </button>`
                        
                    }

                    
                    res.clearCookie("U_ID");

                            
                    let p = {
                        Title: PG.Title,
                        Store_Name:"GSB - Store",
                        Selling_P:PG.Prize.Our_Prize,
                        MRP:PG.Prize.MRP,
                        IMAGES: FILES,

                        OFFFER: Offer_Per (PG.Prize.MRP, PG.Prize.Our_Prize),

                        Des: PG.Description,

                        QNAA: `<P style="text-align: center;">No QnA</p>`,
                        REVV: `<P style="text-align: center;">No review</p>`,


                        Name: "Guest3",
                        Cart_No: 0,
                        Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                        Logout1: ``,
                    };

                    res.status(200).render("Product_Page",p);
                }

            }
            
        }else{
            let PG = element11;
            let FILES = ``;
            let PO = PG.Image_Locaitons;
            // console.log(PO);
            for (let index = 0; index < PO.length; index++) {
                const element = PO[index];
                FILES += `<button class="dda" onclick="smImg(${index})" id="smImg${index}">
                                <img class="ms_img" id="Image_Select${index}" src="${element}">
                            </button>`
                
            }

            
            res.clearCookie("U_ID");

            let p = {
                Title: PG.Title,
                Store_Name:"GSB - Store",
                Selling_P:PG.Prize.Our_Prize,
                MRP:PG.Prize.MRP,
                IMAGES: FILES,

                OFFFER: Offer_Per (PG.Prize.MRP, PG.Prize.Our_Prize),

                Des: PG.Description,

                QNAA: `<P style="text-align: center;">No QnA</p>`,
                REVV: `<P style="text-align: center;">No review</p>`,

                Name: "Guest3",
                Cart_No: 0,
                Login: `<a href="/login" class="Profile_Options_Nav2">Login</a>`,
                Logout1: ``,
            };

            res.status(200).render("Product_Page",p);
        }
    
    }else{
        res.send("Page not found");
    }






        
        
};
module.exports = Product_Page;