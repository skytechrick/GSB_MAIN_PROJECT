function A1() {
    let Product_longList_B_1 = document.getElementById("Product_longList-B-1");
    let Product_longList_B_2 = document.getElementById("Product_longList-B-2");
    let Product_longList_B_3 = document.getElementById("Product_longList-B-3");
    let Product_longList_B_4 = document.getElementById("Product_longList-B-4");
    let Product_longList_B_5 = document.getElementById("Product_longList-B-5");
    // let Base = Product_longList_B_1.getAttribute('src');


    let Product_longList_B_1_S = Product_longList_B_1.getAttribute("src");
    let Product_longList_B_4_S = Product_longList_B_4.getAttribute("src");
    let Product_longList_B_5_S = Product_longList_B_5.getAttribute("src");

    // console.log(Product_longList_B_1_S);
    // console.log(Product_longList_B_4_S);
    // console.log(Product_longList_B_5_S);


    let ProperImg_A_1 = document.getElementById("ProperImg-A-1");
    ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_1_S}">`;
    // let ProperImg_A_1_Img = document.getElementById("ProperImg-A-1-Img");
    // ProperImg_A_1.setAttribute("src", Base);

    Product_longList_B_1.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_1_S}">`;
    });
    Product_longList_B_2.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_5_S}">`;
    });
    Product_longList_B_3.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_1_S}">`;
    });
    Product_longList_B_4.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_4_S}">`;
    });
    Product_longList_B_5.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="${Product_longList_B_5_S}">`;
    });
}

A1();


function Percentage_Off() {
    let a = document.getElementsByClassName("Rupee_Sumbol_Price")[0].innerHTML;
    let d = a.split(",")
    let el = "";
    d.forEach(element => {
        el = el + element;
    });
    let Selling_Price_Fun = eval(el);
    
    
    let aa = document.getElementsByClassName("MRP_Price")[0].innerHTML;
    let dd = aa.split(",");
    
    let s = dd[0]
    let news = s.slice(1);
    for (let i = 1; i < dd.length; i++) {
        const ele = dd[i];
        news = news + ele 
        
    }
    
    let MRP_Price_Fun = eval(news);
    console.log(MRP_Price_Fun);


    let OFF_Value = ((MRP_Price_Fun - Selling_Price_Fun)/MRP_Price_Fun)*100;


    let g = "-" + String(Math.floor(OFF_Value)) + "%";

    document.getElementsByClassName("MRP_OFF")[0].innerHTML = g;

    

    

}

Percentage_Off();





function ADD_TO_CART_MAIN(){
    window.location.href = "google.com"
};














