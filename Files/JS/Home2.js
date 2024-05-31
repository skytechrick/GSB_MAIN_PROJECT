


document.getElementById("Search_Main_Input").addEventListener('input', () => {
    let Box = document.getElementById("Search_Option_Box")
    Box.style.display = 'inline-block';
    
    
    
    let TEXT_INSIDE = "HELLO";
    let Num = 1;
    
    let insert = `<div class="SEARCH_OPTION"><div class="SEARCH_OPTION_CENTER" 
    id="SEARCH_OPTION_CENTER_${Num}"><div class="FIRST_ICON_SEARCH"
    id="FIRST_ICON_SEARCH_${Num}"><span class="material-symbols-outlined">search</span></div><div
    id="MAIN_SEARCH_TEXT_${Num}"class="MAIN_SEARCH_TEXT"><span>${TEXT_INSIDE}</span></div><div class="UP_ARROW">
    <span id="UP_ARROW_SET_${Num}"class="material-symbols-outlined">north_west</span></div></div></div>
    `

    Box.innerHTML = insert;
    
});
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





















