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