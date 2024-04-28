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




AddToCart = () => {


}

BuyNow = () => {

}


function Arrow_Left(d,f) {
    let Arrow_Left = document.getElementsByClassName("Arrow_Left")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    Arrow_Left.addEventListener("click", ()=> {
        
        if(parseFloat(window.getComputedStyle(Row_Slide).left) >= 0){
            console.log("A");
        }else{
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b + 60)}px`;
            console.log(c);
            Row_Slide.style.left = c;
        }
    })
}
function Arrow_Right(d,f) {
    let Arrow_Right = document.getElementsByClassName("Arrow_Right")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    let Row_1 = document.getElementsByClassName("Row_1")[0];
    Arrow_Right.addEventListener("click", ()=> {
        let wid =  parseFloat(window.getComputedStyle(Row_1).width);
        let aaa = 2130-wid;
        console.log(aaa);
        if(parseFloat(window.getComputedStyle(Row_Slide).left) <= -aaa){
            console.log("U");
        }else{
            Row_Slide.classList.add('move');
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b - 60)}px`;
            console.log(c);
            Row_Slide.style.left = c;
        }
    })
}
Arrow_Left(0,0)
Arrow_Right(0,0);
Arrow_Left(1,1)
Arrow_Right(1,1);
Arrow_Left(2,2)
Arrow_Right(2,2);
Arrow_Left(3,3)
Arrow_Right(3,3);

