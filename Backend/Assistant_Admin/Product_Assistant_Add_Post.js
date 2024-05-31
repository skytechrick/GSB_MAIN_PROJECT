const {Product, New_Worker_Model} = require("../All_Models.js");
Product_Assistant_Add_Post = async (req, res) => {
    let cook = req.cookies;
    let cook_NO = cook.NOP;
    let cook_PID= cook.PID;

    console.log(req.body);

    let {
        Brand_Name,
        Cost_Price,
        Description,
        MRP,
        Quantity_Available,
        Sell_Price,
        Title,
        Type,
        HashTags,
        Seller_ID,
    } = req.body;

    if(Brand_Name && Cost_Price && Description && MRP && Quantity_Available && Sell_Price && Title && Type && HashTags && Seller_ID){
        if(Description.length > 1    && Title.length > 1  && Type.length > 1  && HashTags.length > 1){
        // if(Brand_Name.length > 1  && Description.length > 1    && Title.length > 1  && Type.length > 1  && HashTags.length > 1  && Seller_ID.length > 1 ){


            let DS = (String(HashTags).split(','));
            let DF = [];
            DS.forEach(element => {
                element =  element.trim().toLowerCase();
                DF.push(element);
            });
            
            let OPTIONSSS = [];
            for (let index = 0; index < 16; index++) {
                let po = `Option${index + 1}`;
                if (req.body[po] && req.body[po].length > 1) {
                    OPTIONSSS.push(req.body[po].trim());
                }
            }
            let Table = [];
            for (let index = 0; index < 30; index++) {
                let xc = `Inp_Key_${index + 1}`;
                let s = `Inp_Val_${index + 1}`;
                if (req.body[xc] && req.body[xc].length > 1) {
                    Table.push(
                        {
                            Key: req.body[xc],
                            Value: req.body[s]
                        }
                    );
                }
            }
            let Added_ID = "6464649644646";
            let Options = OPTIONSSS;
            let Description1 = Description;
            let ds = new Object(req.files);
            let Image_Locaitons = []
            for (let index = 0; index < 10; index++) {
                let dsda = `File_${index + 1}`;
                if (ds[dsda]) {
                    let data = ds[dsda][0].filename;
                    let final_FIle = "/product/img/" + data;
                    Image_Locaitons.push(final_FIle);
                }
            };
            let PP = {
                Product_ID: "4424545454",
                Verified:"No",
                Product_URL:"adsadosjadasdsada",
                Title: Title.trim(),
                Type: Type.trim(),
                Quantity_Available: Quantity_Available,
                Options:Options,
                Brand_Name: Brand_Name.trim(),
                HashTags: DF,
                Prize: {
                    MRP: MRP,
                    Cost_Price: Cost_Price,
                    Sell_Price: Sell_Price,
                    Our_Prize: "0",
                    Our_Margin: "0",
                },
                Revenue:{
                    Total_Sales:"454454",
                    Total_Delivered: "65767",
                    Total_Returned: "4474",
                    Total_Spend: "7756",
                    Overall_Profit:"44445",
                },
                Description: Description1.trim(),
                Table: Table,
                Image_Locaitons: Image_Locaitons,
                Review:[
                    {
                        User_ID: "646444444",
                        User_Name:"Rick Sarkar",
                        Order_ID: "5454455454",
                        Review_In_Short: "Good Product you must buy || Samsung Galaxy",
                        Review_In_Brief: "Good Product you must buy || Samsung Galaxy camera s104 you are sad i know but i dont have anything to do with you but you are the membeer of amazon and i would like to describe nice to meet you and i hope we will meet again after few years, and I love my country India, Thank you your loving shake good to know Thank you | GET SKY BUY",
                        Verified:"Yes",
                        Images:[
                            "sdfasdasdsa",
                            "sadadasdsa asdsadas asd as",
                            "sd adsa dsad sad asd"
                        ],
                        Date_Of:"16/19/2024 | 5:34pm",
                        Rating:"5",
                    },
                ],
                QnA:[
                    {
                        Q: "What is the charging time it takes",
                        A: "1 hour",
                    }
                ],
                Order:{
                    Total_No_Of_Orders: "4",
                    Total_Delivered: "2",
                    Total_RTO:"1",
                    Total_Pending: "1",
                },
                Orders_Date: [
                    {
                        Order_ID: "152452425",
                        Date_Of_Orders: "16/19/2024 | 5:34pm",
                        Delivered: "Yes",
                    },
                ],
                Added_ID: Added_ID,
                Seller_ID:Seller_ID,
                Request:[
                    {
                        Req_NO:"0",
                    }
                ]
            }
            // console.log(PP);

            let Ready = new Product(PP);
            Ready.save().then(() =>{
                res.status(200).json({ Message: 'Successfully Added' });
            });


            
        
        }else{
            res.status(200).json({ Message: 'Unable to add2' });

        }
        
    }else{
        res.status(200).json({ Message: 'Unable to add1' });

    }





    

















}
module.exports = Product_Assistant_Add_Post;