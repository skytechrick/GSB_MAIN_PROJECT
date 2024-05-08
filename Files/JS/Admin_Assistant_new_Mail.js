

function nameaa() {
    let Em = document.getElementById("Em").value;
    let Name = document.getElementById("Name").value;
    Data = {
        "Update": "No",
        "Em": Em,
        "Name": Name,
    }
                
    fetch("/admin/assistant/new/user",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        console.log(data);
        document.getElementById("a1").style.display = "block";
        
        document.getElementById("a1").innerHTML = data.Message;
        setTimeout(() => {
            document.getElementById("a1").style.display = "none";
            document.getElementById("a1").innerHTML = "";
            
        }, 2000);
        
    }).catch(error => {
        document.getElementById("a1").style.display = "block";
        
        document.getElementById("a1").innerHTML = "Unable to get response from server";
        setTimeout(() => {
            document.getElementById("a1").style.display = "none";
            document.getElementById("a1").innerHTML = "";
            
        }, 2000);
        console.log("Error - 01");
    })
        
        
        
        
};
function namea() {
    let Ema = document.getElementById("Ema").value;
    let Verified = document.getElementById("Verified").value;
    Data = {
        "Update":"Yes",
        "Ema": Ema,
        "Verified":Verified,
    }
                
    fetch("/admin/assistant/new/user",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        
    })
    .then(data => {
        document.getElementById("a2").style.display = "block";
        
        document.getElementById("a2").innerHTML = data.Message;
        setTimeout(() => {
            document.getElementById("a2").style.display = "none";
            document.getElementById("a2").innerHTML = "";
            
        }, 2000);
        
    }).catch(error => {
        document.getElementById("a2").style.display = "block";
        
        document.getElementById("a2").innerHTML = "Unable to get response from server";
        setTimeout(() => {
            document.getElementById("a2").style.display = "none";
            document.getElementById("a2").innerHTML = "";
            
        }, 2000);

        console.log("Error - 01");
    })
        
        
        
        
};
        