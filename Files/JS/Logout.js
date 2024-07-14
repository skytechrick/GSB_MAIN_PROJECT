let aaa = confirm("Are you sure for logout.");
let Data = {
    Logout:"Yes",
};
if(aaa == true){
    fetch("/logout",{
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
        if(data.M == "Yes"){
            window.location.href = "http://192.168.0.44/login";
        }
        
        
    }).catch(e => {
        
    })
}
else{
    window.location.href = "http://192.168.0.44/";
    
}
