
Loog = (d) => {
    if (d == 15) {
        let SEP = "Yes";
        let Gma = document.getElementById("Gma").value;
        let psss = document.getElementById("Psss").value;
        // console.log(psss);
        // console.log(Gma);
        if (psss && Gma && psss.length > 10 && Gma.length > 15) {
            
            let s = { G: Gma, P: psss, S: SEP, DSS: "Hello, Hacker/Developer Bro", };
            
            fetch("/admin/login", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(s), }).then(response => { if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); }).then(data => {
                
                if (data.GOT == "Yes") {
                    window.location.replace("http://localhost/admin");
                
                
                }else{
                    
                    window.location.replace("http://localhost/admin/login");
                }
    
            }).catch(error => { console.log("Unable to get...") })
        console.log("Clicked");
        }
    }
};
console.log("JS");

