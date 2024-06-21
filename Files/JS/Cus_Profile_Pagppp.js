document.addEventListener("DOMContentLoaded", () => {
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
    ZiSSes1();




























});