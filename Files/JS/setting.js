document.addEventListener("DOMContentLoaded", () => {

    let d = window.innerWidth;
    
    function ZiSSes1() {

        let Lists = document.getElementById("Lists");
        let dLists = window.getComputedStyle(Lists);
        
        
        let List_SSss = document.getElementById("List_SS");
        let List_SSV = window.getComputedStyle(List_SSss);
        let WI = Number(dLists.width.split("px")[0]);
        let d = Number(List_SSV.width.split("px")[0]);
        
        let z = d - WI - 50;
        console.log(z);
        document.getElementById("ITEM").style.width = z + "px";
    }
    if (d>750) {
        ZiSSes1();
    }







});

function LIST_BTN(Z) {

    if (Z == "Notification") {
        window.location.replace("/notification");
        // window.location.href = "http://192.168.0.44/notification";
    } else if (Z == "Order") {
        window.location.replace("/order");
    } else if (Z == "Cart") {
        window.location.replace("/cart");
    } else if (Z == "Profile") {
        window.location.replace("/Profile");
    } else if (Z == "Favorite") {
        window.location.replace("/favorite");
    } else if (Z == "SB Coins") {
        window.location.replace("/sb_coins");
    } else if (Z == "Setting") {
        window.location.replace("/setting");
    } else if (Z == "Address") {
        window.location.replace("/address");
        
    }
    
}




function SaveEdit(n){
    if (n==1) {
        let Btnnssdsads = document.getElementById("Btnnssdsads");
        Btnnssdsads.innerHTML = `<button type="button" onclick="SaveEdit(2);">Save Changes</button>`
        let SDSDASDERSDS = document.getElementsByClassName("SDSDASDERSDS");
        for (let index = 0; index < SDSDASDERSDS.length; index++) {
            const element = SDSDASDERSDS[index];
            element.style.borderBottom = "1px solid #aaa";
            element.style.fontWeight = "normal";
            
        }
        document.getElementById("FNameA").disabled = false;
        document.getElementById("lNameA").disabled = false;
        document.getElementById("NameaA").disabled = false;
        document.getElementById("NameAAA").disabled = false;
        let A = document.getElementById("NameAAA").value;
        document.getElementById("NameAAA").value = A.split("+91 ")[1];
    }else if (n == 2) {
        let Btnnssdsads = document.getElementById("Btnnssdsads");
        Btnnssdsads.innerHTML = `<button type="button" onclick="SaveEdit(1);">Edit</button>`
        let SDSDASDERSDS = document.getElementsByClassName("SDSDASDERSDS");
        for (let index = 0; index < SDSDASDERSDS.length; index++) {
            const element = SDSDASDERSDS[index];
            element.style.fontWeight = "bold";
            element.style.borderBottom = "none";
        }
        document.getElementById("FNameA").disabled = true;
        document.getElementById("lNameA").disabled = true;
        document.getElementById("NameaA").disabled = true;
        document.getElementById("NameAAA").disabled = true;
        let A = document.getElementById("NameAAA").value;
        document.getElementById("NameAAA").value = "+91 "+A;
        
    }

}





































