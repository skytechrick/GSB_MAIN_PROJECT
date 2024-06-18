
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
    }).then(data => {
        let A = data.A;
        let B = data.B;
        let C = data.C;
        let D = data.D;
        let E = data.E;
        let F = data.F;
        Box.innerHTML = Inserted(A, B, C, D, E, F);
        let isdsadadssdsdasdasfsa = document.getElementById("Search_Option_Box").innerHTML;
        if(isdsadadssdsdasdasfsa == "" || isdsadadssdsdasdasfsa == " "|| isdsadadssdsdasdasfsa == null){
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



