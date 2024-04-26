

function fd() {

    document.getElementById("I_UP_DOWN_l").addEventListener("click",() =>{
        let MSSS = getComputedStyle(document.getElementById("MSSS"));
        let imgg = getComputedStyle(document.getElementById("imgg"));
        let hei = MSSS.height.split("px")[0];
        let topp = MSSS.top.split("px")[0];
        let dis = imgg.height.split("px")[0];
        let a = document.getElementById("MSSS");
        let sd = Number(dis - hei) - 32;
        if ( sd <= Number(topp)) {
            a.style.top = String(Number(topp) - 18) + "px";
        };
    });
    document.getElementById("I_UP_DOWN_m").addEventListener("click",() =>{
        let MSSS = getComputedStyle(document.getElementById("MSSS"));
        let topp = MSSS.top.split("px")[0];
        let a = document.getElementById("MSSS");
        if (Number(topp) <= -1) {
            a.style.top = String(Number(topp) + 18) + "px";
        };
    });
}
fd();
document.getElementById("BIG_I").src = document.getElementById("Image_Select01").src;

smImg = (Nu) =>{
    let db = `Image_Select0${Nu}`;
    let ss = document.getElementById(db).src;
    document.getElementById("BIG_I").src = ss;
}