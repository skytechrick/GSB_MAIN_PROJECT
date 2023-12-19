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