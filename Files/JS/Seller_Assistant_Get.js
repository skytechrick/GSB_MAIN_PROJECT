
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
        console.log(element)
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
        console.log(element)
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
        console.log(element)
        if (element != "Homieo") {
            document.getElementById(element).style.display = "none";
            
        }
        
    });

})






const List = ["disss", "Homieo","BankkA","Setting_A"];



Li = (n) => {
    if (n == 1) {
        document.getElementById("disss").style.display = "block";
        console.log(1)
        Nav(1);
        List.forEach(element => {
            console.log(element)
            if (element != "disss") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
    } else if(n == 2){
        document.getElementById("BankkA").style.display = "block";
        console.log(1)
        Nav(1);
        List.forEach(element => {
            console.log(element)
            if (element != "BankkA") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
        
        
    } else if(n == 3){
        document.getElementById("Setting_A").style.display = "block";
        console.log(1)
        Nav(1);
        List.forEach(element => {
            console.log(element)
            if (element != "Setting_A") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
        
        
    } else if(n == 4){
        window.location.href = "http://192.168.0.12/assistant/seller/logout";

    } else if(n == 100){
        document.getElementById("Homieo").style.display = "block";
        console.log(1)
        List.forEach(element => {
            console.log(element)
            if (element != "Homieo") {
                document.getElementById(element).style.display = "none";
                
            }
            
        });
    }
}











let a = window.innerWidth
console.log(a);
if (a<600){

    let As = window.getComputedStyle(document.getElementById("Aside_Ham")).left;
    document.getElementById("Boot").style.top = "100px";
    if(As == "0px"){Slide()}
    else if(As== "-295px"){Slide_A()}

}

const DD = ["TaskP","Stockss","Addss","Modi","Sellll","ModificationP","QnAA"]

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
    for (let index = 1; index < 5; index++) {
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
    document.getElementById("Messageeeee").style.display = "block";
    document.getElementById("Messageeeee").style.animationName = "Adm1";
    document.getElementById("mess").innerHTML = A;
}


document.getElementById("Messageeeee").addEventListener('click',() => {
  
  
    document.getElementById("Messageeeee").style.animationName = "Adm2";
})











document.getElementById('SUDUSAD').addEventListener('click', function() {
    var formData = {};
    var inputs = document.getElementById('INOPPT').elements;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].tagName === 'INPUT' || inputs[i].tagName === 'TEXTAREA') {
            formData[inputs[i].name] = inputs[i].value;
        }
    }

    
    let Sen = {};
    Sen["Name"] = formData.Name;
    Sen["Mobile_Number"] = formData.Mobile_Number;
    Sen["WhatsApp_Number"] = formData.WP_No;
    Sen["Email"] = formData.Email;
    Sen["State"] = formData.State;
    Sen["District"] = formData.Dist;
    Sen["PIN_Code"] = formData.PINcode;
    Sen["City"] = formData.City;
    Sen["Town"] = formData.Town;
    Sen["Locality"] = formData.Locality;
    Sen["Language"] = formData.Language;
    Sen["Age"] = formData.Age;
    Sen["Gender"] = formData.Gender;
    Sen["Bank_Name"] = formData.Bank_Name;
    Sen["IFSC_Code"] = formData.IFSC;
    Sen["UPI"] = formData.UPI;
    Sen["Shop_Name"] = formData.Name_of_Shop;
    Sen["Shop_Type"] = formData.Type_of_Shop;
    Sen["Shop_Type"] = formData.Type_of_Shop;
    Sen["State_Shop"] = formData.State_Shop;
    Sen["Dist_Shop"] = formData.Dist_Shop;
    Sen["PINcode_Shop"] = formData.PINcode_Shop;
    Sen["City_Shop"] = formData.City_Shop;
    Sen["Town_Shop"] = formData.Town_Shop;
    Sen["Locality_Shop"] = formData.Locality_Shop;
    Sen["Done"] = "Yes";
    console.log(Sen);
    fetch("/assistant/seller",{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(Sen),
    }).then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        // Handle response data
        console.log(data);
        if(data.Message == "Unable to add."){
            Message(data.Message);
            setTimeout(() => {
                window.location.href = "http://192.168.0.12/assistant/seller/login";
            }, 2000);
            
        }else{
            Message(data.Message);
        }

    }).catch(error => {
        // Handle errors
        Message("Enable to connect with server 1...");
    });
});


















