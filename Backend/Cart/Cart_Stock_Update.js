
const User_Auth = require("../User_Auth.js");
const { Product , Signup_Model} = require("../All_Models.js");


const Cart_Stock_Update = async (req, res) => {

    let COOK = req.cookies.U_ID;
    Auths = await User_Auth(COOK);
    if (Auths != null) {

        let A = await Product.find({});

        let data = Auths.Cart;

        let pp = 0;
        let bv;
        for (let aqq = 0; aqq < A.length; aqq++) {
            const element = A[aqq];
            let ID = element.Product_ID;
            // console.log(ID + "  "+req.body.ID)
            if(ID == req.body.ID){

                // console.log(Number(element.Quantity_Available) +"  "+ Number(req.body.Quantity));
                if (Number(element.Quantity_Available) >= Number(req.body.Quantity) && Number(req.body.Quantity) >=1) {
                    pp = 1;
                    // console.log("element1");
                    break;
                }else if(Number(req.body.Quantity)<1){
                    pp=0;
                    bv = 1;
                    break;

                }else{
                    // console.log("element2");
                    pp=0;
                    bv = element.Quantity_Available;
                    break;
                };
                // break;
                
            }
            
        }
        if (pp == 1) {


                

            let DC = [];

            for (let xx = 0; xx < data.length; xx++) {
                const element = data[xx];
                if(element.Product_ID == req.body.ID){
                    let Quantity = req.body.Quantity;
                    DC.push({
                        Product_ID:element.Product_ID,
                        Time: element.Time,
                        Quantity:Quantity,
                    });
                }else{
                    DC.push(element);

                }
                
            }
            let A = req.body.Quantity;

            await Signup_Model.updateOne({Email:Auths.Email},{
                Cart:DC
            }).then(()=>{
                res.status(200).json({Message:true,Num:A})
            })

            
        }else{


            let DC = [];

            // console.log(bv)

            for (let xx = 0; xx < data.length; xx++) {
                const element = data[xx];
                if(element.Product_ID == req.body.ID){
                    // let Quantity = req.body.Quantity;
                    DC.push({
                        Product_ID:element.Product_ID,
                        Time: element.Time,
                        Quantity:bv,
                    });
                }else{
                    DC.push(element);

                }
                
            }
            // let A = req.body.Quantity;

            await Signup_Model.updateOne({Email:Auths.Email},{
                Cart:DC
            }).then(()=>{
                res.status(200).json({Message:true,Num:bv})
            })

            
            
            // res.status(200).json({Message:false})

        }

    }else{
        res.status(200).json({Message:false})
    }
}

module.exports = Cart_Stock_Update;