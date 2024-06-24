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


document.getElementById("Search_Main_Input").addEventListener('input', function (event) {
    let currentValue = event.target.value;
    const disabledChars =  /["`]/g;
    if (disabledChars.test(currentValue)) {
        event.target.value = currentValue.replace(disabledChars, '');
    }
    

    let Box = document.getElementById("Search_Option_Box")
    Box.style.display = 'inline-block';


    let val = document.getElementById("Search_Main_Input").value;


    let SEND = {
        val:val,
    }




    fetch("/input_search",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(SEND),
    }).then(response =>{
        return response.json();
    }).then(async data => {
        let A = data.A;
        let B = data.B;
        let C = data.C;
        let D = data.D;
        let E = data.E;
        let F = data.F;
        Box.innerHTML = Inserted(A, B, C, D, E, F);
        
        if(Box.innerHTML == ""){
            let insert = `
                <div class="SEARCH_OPTION">
                    <div class="SEARCH_OPTION_CENTER">
                        <button class="BBSBSBBSB" type="button">
                            <div class="FIRST_ICON_SEARCH">
                                <span class="material-symbols-outlined">close</span>
                            </div>
                            <div  class="MAIN_SEARCH_TEXT">
                                <span><center>No results found</center></span>
                            </div>
                        </button>
                        <div class="UP_ARROW">
                            <button class="UPP_ARROW" type="button">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    </div>
                </div>`
            ;
            Box.innerHTML = insert;
        }
    }).catch(error => {
        let insert = `
            <div class="SEARCH_OPTION">
                <div class="SEARCH_OPTION_CENTER">
                    <button class="BBSBSBBSB" type="button">
                        <div class="FIRST_ICON_SEARCH">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                        <div class="MAIN_SEARCH_TEXT">
                            <span><center>Unable to search</center></span>
                        </div>
                    </button>
                    <div class="UP_ARROW">
                        <button class="UPP_ARROW" type="button">
                            <span class="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>
            </div>`
        ;
        Box.innerHTML = insert;
    });
});



