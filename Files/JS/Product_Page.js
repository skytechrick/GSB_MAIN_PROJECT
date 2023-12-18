function A1() {
    let Product_longList_B_1 = document.getElementById("Product_longList-B-1");
    let Product_longList_B_2 = document.getElementById("Product_longList-B-2");
    let Product_longList_B_3 = document.getElementById("Product_longList-B-3");
    let Product_longList_B_4 = document.getElementById("Product_longList-B-4");
    let Product_longList_B_5 = document.getElementById("Product_longList-B-5");
    
    let ProperImg_A_1 = document.getElementById("ProperImg-A-1");

    Product_longList_B_1.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="/product/img/13990_File_1-9999.jpg">`;
    })
    Product_longList_B_2.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="/product/img/13990_File_5-9999.jpg">`;
    })
    Product_longList_B_3.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="/product/img/13990_File_1-9999.jpg">`;
    })
    Product_longList_B_4.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="/product/img/13990_File_4-9999.jpg">`;
    })
    Product_longList_B_5.addEventListener('mouseover', () => {
        ProperImg_A_1.innerHTML = `<img  class="ProperImg-A" src="/product/img/13990_File_5-9999.jpg">`;
    })
}

A1();