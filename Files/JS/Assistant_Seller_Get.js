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
        window.location.href = "http://192.168.0.44/assistant/seller/logout";

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
    document.getElementById("mess").innerHTML = A;
}


document.getElementById("Messageeeee").addEventListener('click',() => {
  
  
    document.getElementById("Messageeeee").style.animationName = "Adm2";
})

















































































































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



















