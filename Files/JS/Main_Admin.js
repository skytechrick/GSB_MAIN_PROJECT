
document.addEventListener("DOMContentLoaded", function () {
    let Down_Btn = document.getElementById("Down_Btn");
    let Nav = document.getElementById("Nav");
    let Background_Blur = document.getElementById("Background_Blur");
    let wid = window.innerWidth;
    if (wid <= 450) {
        let navStyle = window.getComputedStyle(Nav)
        Down_Btn.addEventListener("click", () => {
            console.log(2);
            if (navStyle.display === "none") {
                Nav.style.display = "block";
                Background_Blur.style.display = "flex";
            } else {
                Background_Blur.style.display = "none";
                Nav.style.display = "none";
            };
        });
        Background_Blur.addEventListener("click", () => {
            Background_Blur.style.display = "none";
            if (Nav.style.display === "none") {
                Nav.style.display = "block";
            } else {
                Nav.style.display = "none";
            };
        });
    };
});

function Num_Com(aa) {
    aa = String(aa);
    if(aa.length <= 3){
        return aa;
    }else if(aa.length == 4){let d  = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 1) {d = d + "," + element}else{d = d + element}}
        return d;
    }else if(aa.length == 5){let d  = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 2) {d = d + "," + element}else{d = d + element}}
        return d;
    }else if(aa.length == 6){let d  = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 1 || i ==3) {d = d + "," + element}else{d = d + element;}}
        return d;
    }else if(aa.length == 7){let d  = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 2 || i == 5) {d = d + "," + element;}else{d = d + element;}}
        return d;
    }else if(aa.length == 8){let d  = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 1 || i == 3 || i == 5) {d = d + "," + element}else{d = d + element}}
        return d;
    }else if(aa.length == 9){let d  = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 2 || i == 4 || i == 6) {d = d + "," + element;}else{d = d + element;}}
        return d;
    }else if(aa.length == 10){let d = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 1 || i == 3 || i == 5 || i == 7) {d = d + "," + element;}else{d = d + element;}}
        return d;
    }else if(aa.length == 11){let d = "";for (let i = 0; i < aa.length; i++) {const element = aa[i];if (i == 2 || i == 4 || i == 6 || i == 7) {d = d + "," + element;}else{d = d + element;}}
        return d;
    }else{
        return aa;
    }
}

function Com_Num(aa) {
    aa = aa.trim();
    let a = aa.split(",");
    let sd = "";
    for (let index = 0; index < a.length; index++){sd += a[index];}
    return sd;
}



