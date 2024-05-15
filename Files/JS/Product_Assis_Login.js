
Loog = (d) => {
    if (d == 15) {
        let SEP = "Yes";
        let Gma = document.getElementById("Gma").value;
        let psss = document.getElementById("Psss").value;
        let s = { G: Gma, P: psss, S: SEP, DSS: "Hello, Hacker/Developer Bro", };
        
        fetch("/assistant/product/login", { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify(s), }).then(response => { if (!response.ok) { throw new Error('Network response was not ok'); } return response.json(); }).then(data => {
            console.log(data);
            if (data.GOT == "Yes") {
                window.location.replace("http://192.168.0.44/assistant/product");
            }else{
                window.location.replace("http://192.168.0.44/assistant/product/login");
            }

        }).catch(error => { console.log("Unable to get...") })
        console.log("Clicked");
    }
};
console.log("JS");

