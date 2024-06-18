


function Arrow_Left(d,f) {
    let Arrow_Left = document.getElementsByClassName("Arrow_Left")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    Arrow_Left.addEventListener("click", ()=> {
        
        if(parseFloat(window.getComputedStyle(Row_Slide).left) >= 0){
            // console.log("A");
        }else{
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b + 60)}px`;
            // console.log(c);
            Row_Slide.style.left = c;
        }
    })
}

// let Row_Slide = document.getElementsByClassName("Row_Slide")[0];
// Row_Slide.classList.add('move');



// console.log(width);


let width = window.innerWidth;
document.getElementsByClassName("Row_Slide")[0].style.width = width + 500 + "px";
document.getElementsByClassName("Row_Slide")[1].style.width = width + 500 + "px";






function Arrow_Right(d,f) {
    let Arrow_Right = document.getElementsByClassName("Arrow_Right")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    let Row_1 = document.getElementsByClassName("Row_1")[0];
    Arrow_Right.addEventListener("click", ()=> {
        let wid = parseFloat(window.getComputedStyle(Row_1).width);
        let aaa = (window.innerWidth+500)-wid;
        // console.log(aaa);
        if(parseFloat(window.getComputedStyle(Row_Slide).left) <= -aaa){
            // console.log("U");
        }else{
            Row_Slide.classList.add('move');
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b - 60)}px`;
            // console.log(c);
            Row_Slide.style.left = c;
        }
    })
}
Arrow_Left(0,0)
Arrow_Right(0,0);
Arrow_Left(1,1)
Arrow_Right(1,1);


function GET_SMALL_PRO(DD) {
    
    let A = {
        
        VERIFIED: "YES",
        Product_ID: DD,
    };
    let D;
    fetch("/product/smallsize", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(A),
    }).then(response => {
        return response.json();
    }).then(data => {
        let Row_Slide = document.getElementsByClassName("Row_Slide")[0];
        D = data.INSERT;
        Row_Slide.innerHTML = D;
    }).catch(e=>{console.log("Error.....")});
    
}

// GET_SMALL_PRO("44245545454");






document.addEventListener("DOMContentLoaded",() =>{
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
        element =  element.trim();
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
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(Send),
    }).then((responsse)=>{
        return responsse.json();
    }).then((data) => {
        // console.log(data);

        let Row_Slide = document.getElementsByClassName("Row_Slide")[0];
        D = data.INSERT;
        Row_Slide.innerHTML = D;



        let a = document.getElementById("Product_LIST").innerHTML;
        if(a == "" || a == null){
            let p = data.IDs;
            // console.log(p);
            // p.concat(dd);
            B = p.join(",");
            document.getElementById("Product_LIST").innerHTML = B;

        }else{
            let dd = a.split(",").trim();
            let p = data.IDS;
            p.concat(dd);
            document.getElementById("Product_LIST").innerHTML = p;
        }
    }).catch((e)=>{
        console.log("Connection Error...");
    });
}); 


document.addEventListener("DOMContentLoaded",() =>{
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
        element =  element.trim();
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
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(Send),
    }).then((responsse)=>{
        return responsse.json();
    }).then((data) => {
        // console.log(data);

        let Row_Slide = document.getElementsByClassName("Row_Slide")[1];
        D = data.INSERT;
        Row_Slide.innerHTML = D;



        let a = document.getElementById("Product_LIST").innerHTML;
        if(a == "" || a == null){
            let p = data.IDs;
            // console.log(p);
            // p.concat(dd);
            B = p.join(",");
            document.getElementById("Product_LIST").innerHTML = B;

        }else{
            let dd = a.split(",").trim();
            let p = data.IDS;
            p.concat(dd);
            document.getElementById("Product_LIST").innerHTML = p;
        }
    }).catch((e)=>{
        console.log("Connection Error...");
    });
}); 



