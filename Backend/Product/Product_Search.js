const searchPhrases = require("./WORDS.js");

const Product = require("../All_Models.js");


Product_Search = async (req, res) => {
    
    // console.log(req.body.val);

    // console.log()
    
    // console.log()

    let trend = [
        "Kettle 1/2 liter, Under 600",
        "20watt Led buld bajaj",
        "3",
        "4",
        "5",
        "6",

    ];

    let Value = req.body.val;
    
    Value = Value.toLowerCase();
    
    
    if (Value == "" || Value == " " || Value == null) {
        Value = Value.toLowerCase();
        
        a = {
            A: trend[0],
            B: trend[1],
            C: trend[2],
            D: trend[3], 
            E: trend[4],
            F: trend[5],
        }
        res.status(200).json(a);
    }else{
        
        
        
        
        let Block = Value.split(" ");
        // console.log(Value);
        // console.log(Block);

        let Latest = [];
        let WORDSS = searchPhrases

        // console.log(Block);
        if (Block.length <2) {
            let FIRST = Block[0];

            for (let q = 0; q < FIRST.length; q++) {
                const F_VAL = FIRST[q];
                


                for (let k = 0; k < WORDSS.length; k++) {
                    let WORD = WORDSS[k];
                    WORD = WORD.toLowerCase().trim();

                    let W_VAL = WORD[q]
                    if (W_VAL == F_VAL) {
                        Latest.push(WORD);
                    }
                        
                    
                    
                }
                WORDSS = Latest;
                // console.log(Latest);
                Latest = [];

                
            }
            let a = {
                A: WORDSS[0],
                B: WORDSS[1],
                C: WORDSS[2],
                D: WORDSS[3],
                E: WORDSS[4],
                F: WORDSS[5],
            }
            
            res.status(200).json(a);
                            
        }else{
            
            let FIRST = Block[Block.length - 1];
            // console.log(FIRST);

            if (FIRST == "" || FIRST == " " || FIRST == null) {
                
            
                WORDSS = [];
            }else{
                
                for (let q = 0; q < FIRST.length; q++) {
                    const F_VAL = FIRST[q];
                    


                    for (let k = 0; k < WORDSS.length; k++) {
                        let WORD = WORDSS[k];
                        WORD = WORD.toLowerCase().trim();

                        let W_VAL = WORD[q]
                        if (W_VAL == F_VAL) {
                            Latest.push(WORD);
                        }
                            
                        
                        
                    }
                    WORDSS = Latest;
                    // console.log(Latest);
                    Latest = [];
                }
            }
            let element1 = "";
            for (let index = 0; index < Block.length-1; index++) {
                if (index != 0) {
                    element1 = element1 + " " + Block[index];
                }else{
                    element1 =Block[index];
                }
                
            }

            let a = {};
            
            if (WORDSS[0]) {
                a["A"] = element1 + " " + WORDSS[0];
            }else{

                a["A"] = element1 
            }
            if (WORDSS[1]) {
                a["B"] = element1 + " " + WORDSS[1];
            }

            if (WORDSS[2]) {
                a["C"] = element1 + " " + WORDSS[2];
            }

            if (WORDSS[3]) {
                a["D"] = element1 + " " + WORDSS[3];
            }
            if (WORDSS[4]) {
                a["E"] = element1 + " " + WORDSS[4];
            }
            if (WORDSS[5]) {
                a["F"] = element1 + " " + WORDSS[5];
            }



            
            res.status(200).json(a);

        }
    }





};

module.exports= Product_Search;