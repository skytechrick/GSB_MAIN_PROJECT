function fd() {

    document.getElementById("I_UP_DOWN_l").addEventListener("click", () => {
        let MSSS = getComputedStyle(document.getElementById("MSSS"));
        let imgg = getComputedStyle(document.getElementById("imgg"));
        let hei = MSSS.height.split("px")[0];
        let topp = MSSS.top.split("px")[0];
        let dis = imgg.height.split("px")[0];
        let a = document.getElementById("MSSS");
        let sd = Number(dis - hei) - 32;
        if (sd <= Number(topp)) {
            a.style.top = String(Number(topp) - 18) + "px";
        };
    });
    document.getElementById("I_UP_DOWN_m").addEventListener("click", () => {
        let MSSS = getComputedStyle(document.getElementById("MSSS"));
        let topp = MSSS.top.split("px")[0];
        let a = document.getElementById("MSSS");
        if (Number(topp) <= -1) {
            a.style.top = String(Number(topp) + 18) + "px";
        };
    });
}
fd();
document.getElementById("BIG_I").src = document.getElementById("Image_Select0").src;

smImg = (Nu) => {
    let db = `Image_Select${Nu}`;
    let ss = document.getElementById(db).src;
    document.getElementById("BIG_I").src = ss;
}




AddToCart = () => {


}

BuyNow = () => {

}


function Arrow_Left(d, f) {
    let Arrow_Left = document.getElementsByClassName("Arrow_Left")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    Arrow_Left.addEventListener("click", () => {

        if (parseFloat(window.getComputedStyle(Row_Slide).left) >= 0) {
            // console.log("A");
        } else {
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b + 60)}px`;
            // console.log(c);
            Row_Slide.style.left = c;
        }
    })
}


function Arrow_Right(d, f) {
    let Arrow_Right = document.getElementsByClassName("Arrow_Right")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    let Row_1 = document.getElementsByClassName("Row_1")[0];
    Arrow_Right.addEventListener("click", () => {
        let wid = parseFloat(window.getComputedStyle(Row_1).width);
        let aaa = (window.innerWidth + 500) - wid;
        // console.log(aaa);
        if (parseFloat(window.getComputedStyle(Row_Slide).left) <= -aaa) {
            // console.log("U");
        } else {
            Row_Slide.classList.add('move');
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b - 60)}px`;
            // console.log(c);
            Row_Slide.style.left = c;
        }
    })
}
Arrow_Left(0, 0)
Arrow_Right(0, 0);
Arrow_Left(1, 1);
Arrow_Right(1, 1);
Arrow_Left(2, 2);
Arrow_Right(2, 2);



let width = window.innerWidth;
document.getElementsByClassName("Row_Slide")[0].style.width = width + 500 + "px";
document.getElementsByClassName("Row_Slide")[1].style.width = width + 500 + "px";


document.addEventListener("DOMContentLoaded", () => {
    let Seta;
    Seta = document.getElementById("Row_Slide0");
    Seta = getComputedStyle(Seta).width;
    // console.log(Seta);
    // console.log("Seta");
    // console.log(Number(Seta.split("px")[0]));



    let Wid = Number(Seta.split("px")[0]);



    let a = document.getElementById("Product_LIST").innerHTML;
    let dd = a.split(",");
    let DF = [];
    dd.forEach(element => {
        element = element.trim();
        DF.push(element);
    });
    dd = DF;


    let Send = {
        Already_Present: dd,
        Type: "Random",
        Width: Wid,
    };
    // console.log(Send);

    fetch("/product/row", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Send),
    }).then((responsse) => {
        return responsse.json();
    }).then((data) => {
        // console.log(data);

        let Row_Slide = document.getElementsByClassName("Row_Slide")[0];
        D = data.INSERT;
        Row_Slide.innerHTML = D;



        let a = document.getElementById("Product_LIST").innerHTML;
        if (a == "" || a == null) {
            let p = data.IDs;
            // console.log(p);
            // p.concat(dd);
            B = p.join(",");
            document.getElementById("Product_LIST").innerHTML = B;

        } else {
            let dd = a.split(",").trim();
            let p = data.IDS;
            p.concat(dd);
            document.getElementById("Product_LIST").innerHTML = p;
        }
    }).catch((e) => {
        console.log("Connection Error...1");
    });
});




document.addEventListener("DOMContentLoaded", () => {
    let Seta;
    Seta = document.getElementById("Row_Slide1");
    Seta = getComputedStyle(Seta).width;
    // console.log(Seta);
    // console.log("Seta");
    // console.log(Number(Seta.split("px")[0]));



    let Wid = Number(Seta.split("px")[0]);



    let a = document.getElementById("Product_LIST").innerHTML;
    let dd = a.split(",");
    let DF = [];
    dd.forEach(element => {
        element = element.trim();
        DF.push(element);
    });
    dd = DF;


    let Send = {
        Already_Present: dd,
        Type: "Random",
        Width: Wid,
    };
    // console.log(Send);

    fetch("/product/row", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Send),
    }).then((responsse) => {
        return responsse.json();
    }).then((data) => {
        // console.log(data);

        let Row_Slide = document.getElementsByClassName("Row_Slide")[1];
        D = data.INSERT;
        Row_Slide.innerHTML = D;



        let a = document.getElementById("Product_LIST").innerHTML;
        if (a == "" || a == null) {
            let p = data.IDs;
            // console.log(p);
            // p.concat(dd);
            B = p.join(",");
            document.getElementById("Product_LIST").innerHTML = B;

        } else {
            let dd = a.split(",");
            let p = data.IDS;
            p.concat(dd);
            document.getElementById("Product_LIST").innerHTML = p;
        }
    }).catch((e) => {
        console.log("Connection Error...2" + e);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let Seta;
    Seta = document.getElementById("Row_Slide2");
    Seta = getComputedStyle(Seta).width;
    // console.log(Seta);
    // console.log("Seta");
    // console.log(Number(Seta.split("px")[0]));



    let Wid = Number(Seta.split("px")[0]);



    let a = document.getElementById("Product_LIST").innerHTML;
    let dd = a.split(",");
    let DF = [];
    dd.forEach(element => {
        element = element.trim();
        DF.push(element);
    });
    dd = DF;


    let Send = {
        Already_Present: dd,
        Type: "Random",
        Width: Wid,
    };
    // console.log(Send);

    fetch("/product/row", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Send),
    }).then((responsse) => {
        return responsse.json();
    }).then((data) => {
        // console.log(data);

        let Row_Slide = document.getElementsByClassName("Row_Slide")[2];
        D = data.INSERT;
        Row_Slide.innerHTML = D;



        let a = document.getElementById("Product_LIST").innerHTML;
        if (a == "" || a == null) {
            let p = data.IDs;
            // console.log(p);
            // p.concat(dd);
            B = p.join(",");
            document.getElementById("Product_LIST").innerHTML = B;

        } else {
            let dd = a.split(",");
            let p = data.IDS;
            p.concat(dd);
            document.getElementById("Product_LIST").innerHTML = p;
        }
    }).catch((e) => {
        console.log("Connection Error...3");
    });
});



document.getElementById("TextA").addEventListener("input", () => {
    let Mesa = document.getElementById("Mesa")
    Mesa.style.visibility = "hidden";
})

function Ask_A_Ques() {
    let Mesa = document.getElementById("Mesa")
    let v = document.getElementById("TextA").value;
    if (v == "" || v == null || v == " " || v.length < 8) {

        Mesa.style.visibility = "visible";
    } else {

        Mesa.style.visibility = "hidden";
        // fetch("/product/ask_a_question")


    }



}

document.getElementById("Writeareview").addEventListener("input", () => {
    let Mesa = document.getElementById("Write_Mesa")
    Mesa.style.visibility = "hidden";
})
function Write_a_Review() {
    let Mesa = document.getElementById("Write_Mesa")
    let v = document.getElementById("Writeareview").value;
    if (v == "" || v == null || v == " " || v.length < 8) {

        Mesa.style.visibility = "visible";
    } else {

        Mesa.style.visibility = "hidden";
        // fetch("/product/ask_a_question")


    }



}