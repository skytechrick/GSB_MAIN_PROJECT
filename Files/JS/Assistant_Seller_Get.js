
function Slide() {
    document.getElementById("Aside_Ham").style.left = "-295px";
    document.getElementById("Sec").style.width = "calc(100% - 5px)";   
}
function Slide_A() {
    document.getElementById("Sec").style.width = "calc(100% - 300px)";
    document.getElementById("Aside_Ham").style.left = "0px";
}
document.getElementById("Ham_Side").addEventListener("click",() =>{
    let As = window.getComputedStyle(document.getElementById("Aside_Ham")).left;
    if(As == "0px"){Slide()}
    else if(As== "-295px"){Slide_A()}
})


document.getElementById("Croxx").addEventListener("click",() => {
    document.getElementById("disss").style.display = "none";
    document.getElementById("Homieo").style.display = "block";
    Nav(1);
    List.forEach(element => {
        // console.log(element)
        if (element != "Homieo") {
            document.getElementById(element).style.display = "none";
            
        }
        
    });

})
document.getElementById("BankkA_CLo").addEventListener("click",() => {
    document.getElementById("BankkA").style.display = "none";
    document.getElementById("Homieo").style.display = "block";
    Nav(1);
    List.forEach(element => {
        // console.log(element)
        if (element != "Homieo") {
            document.getElementById(element).style.display = "none";
            
        }
        
    });

})
document.getElementById("BankkA_CLoa").addEventListener("click",() => {
    document.getElementById("Setting_A").style.display = "none";
    document.getElementById("Homieo").style.display = "block";
    Nav(1);
    List.forEach(element => {
        // console.log(element)
        if (element != "Homieo") {
            document.getElementById(element).style.display = "none";
            
        }
        
    });

})






const List = ["disss", "Homieo","BankkA","Setting_A"];



Li = (n) => {
    if (n == 1) {
        document.getElementById("disss").style.display = "block";
        // console.log(1)
        Nav(1);
        List.forEach(element => {
            // console.log(element)
            if (element != "disss") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
    } else if(n == 2){
        document.getElementById("BankkA").style.display = "block";
        // console.log(1)
        Nav(1);
        List.forEach(element => {
            // console.log(element)
            if (element != "BankkA") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
        
        
    } else if(n == 3){
        document.getElementById("Setting_A").style.display = "block";
        // console.log(1)
        Nav(1);
        List.forEach(element => {
            // console.log(element)
            if (element != "Setting_A") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
        
        
    } else if(n == 4){
        window.location.href = "http://localhost/assistant/seller/logout";

    } else if(n == 100){
        document.getElementById("Homieo").style.display = "block";
        // console.log(1)
        List.forEach(element => {
            // console.log(element)
            if (element != "Homieo") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
    }
}











let a = window.innerWidth
// console.log(a);
if (a<600){

    let As = window.getComputedStyle(document.getElementById("Aside_Ham")).left;
    document.getElementById("Boot").style.top = "100px";
    if(As == "0px"){Slide()}
    else if(As== "-295px"){Slide_A()}

}




const DD = ["TaskP","Stockss","Addss","Modi","Sellll","SellllSupport","QnAA"]



Nav = (n = 1) => {
    let a = `BTON_${n}`;
    let DS = `DDDD_${n}`;
    if (DS == "DDDD_1") {
        let DSSS = document.getElementById(DS);
        DSSS.style.display = "flex";
        
    }else{
        let DSSS = document.getElementById(DS);
        DSSS.style.display = "block";

    }
    
    document.getElementById(a).style.backgroundColor = "rgb(0, 121, 235)";
    document.getElementById(a).style.color = "white";
    for (let index = 1; index < 8; index++) {
        let DS = `DDDD_${index}`;
        let aa = `BTON_${index}`;
        if (index != n) {
            let DSSS = document.getElementById(DS);
            DSSS.style.display = "none";
            document.getElementById(aa).style.backgroundColor = "white";
            document.getElementById(aa).style.color = "black";
        }
        
        
    }
}

Message = (A = "Server Error") =>{
    document.getElementById("Messageeeee").style.animationName = "Adm1";
    document.getElementById("Messageeeee").style.display = 'block';
    document.getElementById("mess").innerHTML = A;
}


document.getElementById("Messageeeee").addEventListener('click',() => {
  
  
    document.getElementById("Messageeeee").style.animationName = "Adm2";
})
















































document.getElementById('SUBBBB').addEventListener('click', function() {
    var formData = new FormData();
    var inputs = document.getElementById('Addd_PROOROOR').elements;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].tagName === 'SELECT' || inputs[i].tagName === 'INPUT' || inputs[i].tagName === 'TEXTAREA') {
            formData[inputs[i].name] = inputs[i].value;
            formData.append(inputs[i].name, inputs[i].value)
        }
    }

    for (let isa = 0; isa < 10; isa++) {
        let FA = `File_${isa+1}`;
        let Img = `Image_${isa+1}`;

        let DG = document.getElementById(Img)
        let VC = DG.files[0];
        if (VC) {
            formData.append(FA, VC);
        }
    }

    let ID = document.getElementById("Seller_ID").value;
    
    formData.append("Seller_ID", ID);
    


    fetch('/assistant/product/add',{
        method: "POST",
        body: formData,
         
    }).then(response => {
        return response.json();
        
    })
    
    .then(data => {
        // document.getElementById("DISPLAY_HIDEEE").style.display = "block";
        Message(data.Message);
    }).catch(error =>{
        Message("Connection Error");
        
    })
    
});







function AddLine(n) {
    if (n < 31) {
        
        
        document.getElementById(`DIVVV${n}`).innerHTML = 
        `
        <div id="key${n}">
        <input type="text" name="Inp_Key_${n}" placeholder="Key" id="Inp_Key_${n}">
        </div>
        <div id="Value${n}">
        <input type="text" name="Inp_Val_${n}" placeholder="Value" id="Inp_Val_${n}">
        </div>
        <div id="Add_MORE_KEYDIV${n}">
        <button type="button" class="Add_MORE_KEY" onclick="AddLine(${n+1});">+ Add More</button>
        </div>
        
        `;
        document.getElementById(`Add_MORE_KEYDIV${n-1}`).innerHTML = "";
    }
    else{
        
        document.getElementById(`Add_MORE_KEYDIV30`).innerHTML = "";
    }
    
}













SELLE_SEARCH = () =>{
    
    let Search_ID = document.getElementById(`Seller_ID`).value;
    d = {ID: Search_ID,Send:"Yes"};
    fetch("/assistant/product/seller/Search",{
        method:"POST",
        body:JSON.stringify(d),
        headers:{"Content-Type":"application/json"},



    }).then(response =>{
        if (response) {
            return response.json();
        }

    }).then((data)=>{
        // console.log(data);
        if(data.FOUND == "Yes"){
            
            let a = document.getElementById("Seller_ID").value;
            
            let Title_Div = document.getElementById("Title_Div");
            
            
            let IND = `
                <label title="Seller_ID" for="Seller_ID">Seller ID:</label>
                <input value="${a}" title="Seller_ID" type="text" id="Seller_ID" placeholder="Seller ID" autocomplete="off" spellcheck="false" disabled>
                <button id="Seller_ID_BTN" type="button" disabled>Search</button>
                <div id="VER">Verified<span class="material-symbols-outlined">verified</span></div>
                
            `
            Title_Div.innerHTML = IND;
            document.getElementById("VER").style.display = "block"
            document.getElementById("FFOrmas").style.display = "block";
            Message("User found");
            
        }else{
            Message(data.FOUND);
        }
        
    }).catch(e =>{
        Message("Connection Error");
    })

}






function Product_ID_S () {
     
    let Search_ID = document.getElementById(`Product_DIID`).value;
    d = {ID: Search_ID,Send:"Yes"};
    // console.log(1)
    fetch("/assistant/product/product/search",{
        method:"POST",
        body:JSON.stringify(d),
        headers:{"Content-Type":"application/json"},



    }).then(response =>{
        if (response) {
            return response.json();
        }

    }).then((data)=>{
        // console.log(data);
        if(data.FOUND == "Yes"){
            
            let a = document.getElementById("Product_DIID").value;
            
            let Title_Div = document.getElementById("P_SSSS");
            
            
            let IND = `
            <label id="Product_DIIDL" for="Product_DIID">Product ID:</label>
            <input type="text" value="${a}" placeholder="Product ID" id="Product_DIID" autocomplete="off" spellcheck="false"disabled>
            <button id="Product_DIID_BTN" type="button" disabled>Search</button>
        
            `
            Title_Div.innerHTML = IND;
            document.getElementById("DISPLAY_HIDEEE").style.display = "block";
            Message("Product found");

            document.getElementById("SSSSS").innerHTML=`
                            <legend>Product details</legend>
                            <div class="Product_Title_T">
                                <div class="BLACKK">Product Title:</div>
                                <div class="BLACKKVAL"><i>${data.Title} <a href="/product/${data.URL}">Product Link</a></i></div>
                            </div>

                            <div class="Product_Title_T">
                                <div class="BLACKK">Product Prize:</div>
                                <div class="BLACKKVAL"><i>Rs. ${data.Sell}</i></div>
                            </div>
                            <div class="Product_Title_T">
                                <div class="BLACKK">Availability</div>
                                <div class="BLACKKVAL"><i>${data.Stock}</i></div>
                                
                                
                            </div>
            `
            
        }else{
            Message(data.FOUND);
        }
        
    }).catch(e =>{
        Message("Error while searching");
    })

}






function UPDATE(){


    let OSD = document.getElementById("OSD").value;
    let s = document.getElementById("Product_DIID").value;

    let D = {Stock: OSD,ID:s}; 

    fetch("/assistant/product/product/update",{
        body: JSON.stringify(D),
        headers:{"Content-Type":"application/json"},
        method:"POST",
    }).then(response=>{return response.json()})
    .then(data=>{
        // console.log(data);
        Message(data.Message);

    }).catch(e=>{
        Message("Error while updating");
    })
};






























const Box1 = ["Mobiles", "Tablets", "Laptops", "Cables", "Adaptors", "Men_Dress", "Women_Dress","Baby_Dress","Kitchen","Home_Appliances","Desktop", "Electronics"];



function opp(Box1) {
    let d1 = `<option value="">---- Select Option ----</option>`
    let dn ="";
    Box1.forEach(e => {
        dn = dn + `<option value="${e}">${e}</option>`;
        
    });

    d1 = d1 + dn;
    
    document.getElementById("Type1").innerHTML = d1;


}
opp(Box1);
























More_Option = (n) => {
    if (n < 17) {
        if (n != 16) {
            
            
            let aa = `Butnss${n-1}`;
            document.getElementById(aa).innerHTML = "";
            let dd = `    
            <input title="Option" name="Option${n}" type="text" id="Option_n_${n}" placeholder="Option" autocomplete="off" spellcheck="false">
            <div id="Butnss${n}" class="Bttnnss">
            <button class="Option__B" onclick="More_Option(${n+1});" type="button">+ More options</button>
            </div>
            `;
            let aaa = `Option__${n}`;
            document.getElementById(aaa).innerHTML = dd;
        }else{
            let aa = `Butnss${n-1}`;
            document.getElementById(aa).innerHTML = "";
            let dd = `    
            <input title="Option" name="Option${n}" type="text" id="Option_n_${n}" placeholder="Option" autocomplete="off" spellcheck="false">
            <div id="Butnss${n}" class="Bttnnss"></div>
            `;
            let aaa = `Option__${n}`;
            document.getElementById(aaa).innerHTML = dd;
            
        }
    }
}
    
    












Modi_Sub = () => {
    
}


































































