function a() {
    let Aside011 = document.getElementById("Aside011");
    let Aside_Menu = document.getElementById("Aside_Menu");
    
    Aside_Menu.addEventListener("click",() =>{
        let d = window.getComputedStyle(Aside011);
        console.log(d.left);
        if(d.left == "-240px"){

            Aside011.style.left = "0px"
            console.log(4)
        }else{
            
            d = "0px";
            Aside011.style.left = "-240px"
            console.log(44)
        }

    })
}
a();