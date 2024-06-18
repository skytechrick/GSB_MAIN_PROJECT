function Inserted(A = null, B = null, C = null, D = null, E = null, F = null){
    function AA(Num, TEXT_INSIDE) {
        let insert = `
            <div class="SEARCH_OPTION"><div class="SEARCH_OPTION_CENTER"
            id="SEARCH_OPTION_CENTER_${Num}"><button class="BBSBSBBSB" type="button" 
            onclick="Search_OPPP(${Num});"><div class="FIRST_ICON_SEARCH" 
            id="FIRST_ICON_SEARCH_${Num}"><span class="material-symbols-outlined">search</span></div><div 
            id="MAIN_SEARCH_TEXT_${Num}" class="MAIN_SEARCH_TEXT"><span 
            id="TEXT_MAIB_${Num}">${TEXT_INSIDE}</span></div></button><div class="UP_ARROW"><button class="UPP_ARROW" type="button" 
            onclick="UPP_ARROW(${Num});">
            <span id="UP_ARROW_SET_${Num}"class="material-symbols-outlined">north_west</span></button></div></div></div>
        `;
        return insert;
        
    };
    let MAIN = "";
    if (A) {
        
        MAIN = MAIN + AA(1,A);
        if (B) {
            MAIN = MAIN + AA(2,B);
            if (C) {
                MAIN = MAIN + AA(3,C);
                if (D) {
                    MAIN = MAIN + AA(4,D);
                    if (E) {
                        MAIN = MAIN + AA(5,E);
                        if (F) {
                            MAIN = MAIN + AA(6,F);
                                        
                        };
                                    
                    };
                };
            };
        };
    };
    return MAIN;
};


















document.addEventListener("click", () => {
    document.getElementById("Search_Option_Box").style.display = 'none';
});

function Search_OPPP(AAA){
    let X = `TEXT_MAIB_${AAA}`;
    let data = document.getElementById(X).innerHTML;
    let Search_Main_Input = document.getElementById("Search_Main_Input");
    Search_Main_Input.value = data;
    document.getElementById("DSDSDSDSDSDSDD_S").click();
};

function UPP_ARROW(D){
    let X = `TEXT_MAIB_${D}`;
    let data = document.getElementById(X).innerHTML;
    let Search_Main_Input = document.getElementById("Search_Main_Input");
    Search_Main_Input.value = data;
};
document.getElementById("Nav_Slide").style.width = `calc(100% -${document.getElementById("Logo_Search_Part").style.width})`;









// -------------------------------------------------------------------------------


document.getElementById("LIProfile").addEventListener("mouseover", () =>{
    document.getElementById("Profile_OPTION_1").style.animationName = "VIEW_ON";
    document.getElementById("Profile_OPTION_1").style.display = "flex";
});

document.getElementById("LIProfile").addEventListener("mouseout", () =>{
    document.getElementById("Profile_OPTION_1").style.animationName = "VIEW_OFF";
    document.getElementById("Profile_OPTION_1").style.display = "none";
});




document.getElementById("LIMore").addEventListener("mouseover", () =>{
    document.getElementById("More_Down").style.animationName = "VIEW1_ON";
    document.getElementById("More_Down").style.display = "flex";
});

document.getElementById("LIMore").addEventListener("mouseout", () =>{
    document.getElementById("More_Down").style.animationName = "VIEW1_OFF";
    document.getElementById("More_Down").style.display = "none";
});


if(window.innerWidth < 1250){
    
    
    document.getElementById("LIProfile1").addEventListener("mouseover", () =>{
        document.getElementById("Profile_OPTION_11").style.animationName = "VIEW_ON";
        document.getElementById("Profile_OPTION_11").style.display = "flex";
    });
    
    document.getElementById("LIProfile1").addEventListener("mouseout", () =>{
        document.getElementById("Profile_OPTION_11").style.animationName = "VIEW_OFF";
        document.getElementById("Profile_OPTION_11").style.display = "none";
    });
    
    
    
    
    document.getElementById("LIMore1").addEventListener("mouseover", () =>{
        document.getElementById("More_Down1").style.animationName = "VIEW1_ON";
        document.getElementById("More_Down1").style.display = "flex";
    });
    
    document.getElementById("LIMore1").addEventListener("mouseout", () =>{
        document.getElementById("More_Down1").style.animationName = "VIEW1_OFF";
        document.getElementById("More_Down1").style.display = "none";
    });
    
}


if(window.innerWidth < 550){
    // if(document.getElementById("NEXT_HEAD").style.display == "block"){
    //     document.getElementById("Background_Blue").style.display = "block";
        
    // }
    document.getElementById("Background_Blue").addEventListener("click", () => {
        document.getElementById("Background_Blue").style.display = "none";
        // document.getElementById("NEXT_HEAD").style.display = "none";
        document.getElementById("NEXT_HEAD").style.animationName = "HAMBURGER_HIDE";
        
    });
    
    
    document.getElementById("SLIDE_BTN_REV_S").addEventListener("click", () => {
        document.getElementById("Background_Blue").style.display = "none";
        // document.getElementById("NEXT_HEAD").style.display = "none";
        document.getElementById("NEXT_HEAD").style.animationName = "HAMBURGER_HIDE";
        
    });
    
    
    document.getElementById("MENU_SIDE_SPAN").addEventListener("click", () => {
        document.getElementById("Background_Blue").style.display = "block";
        document.getElementById("NEXT_HEAD").style.display = "block";
        document.getElementById("NEXT_HEAD").style.animationName = "HAMBURGER_SHOW";
        // document.getElementById("SLIDE_BTN_REV_S").style.display = "block";

    });



}










