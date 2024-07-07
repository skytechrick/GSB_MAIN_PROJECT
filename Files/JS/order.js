

// let dc = ["Orders", "Confirmation", "Cancelled", "Rating"];
document.getElementById("Orders").addEventListener("click", ()=>{
    document.getElementById("Orders").style.backgroundColor = "rgb(255, 170, 251)";
    let dc = ["Confirmation", "Cancelled", "Rating"];
    for (let x = 0; x < dc.length; x++) {
        const element = dc[x];
        document.getElementById(element).style.background = "white";
    }


});
document.getElementById("Confirmation").addEventListener("click", ()=>{
    document.getElementById("Confirmation").style.backgroundColor = "rgb(255, 170, 251)";
    let dc = ["Orders", "Cancelled", "Rating"];
    for (let x = 0; x < dc.length; x++) {
        const element = dc[x];
        document.getElementById(element).style.background = "white";
        
    }


});
document.getElementById("Cancelled").addEventListener("click", ()=>{
    document.getElementById("Cancelled").style.backgroundColor = "rgb(255, 170, 251)";
    let dc = ["Orders","Confirmation", "Rating"];
    for (let x = 0; x < dc.length; x++) {
        const element = dc[x];
        document.getElementById(element).style.background = "white";
        
    }


});
document.getElementById("Rating").addEventListener("click", ()=>{
    document.getElementById("Rating").style.backgroundColor = "rgb(255, 170, 251)";
    let dc = ["Orders","Confirmation", "Cancelled"];
    for (let x = 0; x < dc.length; x++) {
        const element = dc[x];
        document.getElementById(element).style.background = "white";
        
    }


});





function a(z) {
    
    

    
}

a(dc);