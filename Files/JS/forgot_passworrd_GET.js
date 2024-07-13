

let asl = `
<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh;">
        <div style="width: 300px; box-shadow: 0 0 10px #aaa; background-color: white; padding: 20px;">
            <h3 >Enter OTP:</h3>
            <input id="OTP" type="text" placeholder="Enter OTP" style="padding: 6px 12px; margin:0; width: calc(100% - 46px);">
            <button id='sdsdsa' onclick="OTP()" type="button">Submit</button>
            

        </div>

    </div>
`;

let xdx = `<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh;">
        <div style="width: 300px; box-shadow: 0 0 10px #aaa; background-color: white; padding: 20px;">
            <h3 >Create Password:</h3>
            <input id="Create_Password" type="password" placeholder="Create Password" style="padding: 6px 12px; margin:0; width: calc(100% - 46px);">
            <input id="Confirm_Password" type="password" placeholder="Confirm Password" style="padding: 6px 12px; margin:0; width: calc(100% - 46px);">
            <button id="Sa" onclick="CreatePsas()" type="button">Next</button>

            <div id="DonotMAtch"></div>
        </div>

    </div>`
function Sdsrs() {
    console.log(1);
    let Email = document.getElementById("Email").value;
    document.getElementById("Sss").disabled = true;
    
    fetch("/forgot_password", {
        method:"PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({Email: Email}),
    }).then(response =>{return response.json()}).then(data=>{
        
        if(data.Message == "OTP sent successfully"){
            document.getElementById("Body").innerHTML = asl;
        }else{
            document.getElementById("Body").innerHTML = data.Message;
            document.getElementById("Sss").disabled = false;
        }
    }).catch(e=>{
        document.getElementById("Body").innerHTML = "Something error happed.";
        document.getElementById("Sss").disabled = false;
    });
};


function OTP() {
    let Email = document.getElementById("OTP").value;
    console.log(Email);
    document.getElementById("sdsdsa").disabled = true;
    
    fetch("/forgot_password/otp", {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({OTP: Email}),
    }).then(response =>{return response.json()}).then(data=>{
        
        if(data.Message == "OTP verified."){
            document.getElementById("Body").innerHTML = xdx;

        }else{
            document.getElementById("Body").innerHTML = data.Message;
        }
        
        
    }).catch(e=>{
        document.getElementById("Body").innerHTML = "Something error happed.";
    })
    
    
    
    
}





function CreatePsas() {
    document.getElementById("Sa").disabled = true;
    let Create_Password = document.getElementById("Create_Password").value;
    let Confirm_Password = document.getElementById("Confirm_Password").value;
    
    if (Create_Password == Confirm_Password) {
        
        fetch("/forgot_password/change", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({Password: Create_Password}),
        }).then(response =>{return response.json()}).then(data=>{
            
            if(data.Message == "Changed Successfully."){
                document.getElementById("Body").innerHTML = data.Message + `<a href="/login">Login Here</a>`;
            }else{
                document.getElementById("Body").innerHTML = data.Message;
            }
            
            
        }).catch(e=>{
            document.getElementById("Body").innerHTML = "Something error happed.";
            document.getElementById("Sa").disabled = false;
        })
    }else{
        document.getElementById("Sa").disabled = false;
        document.getElementById("DonotMAtch").innerHTML = `Password donnot match`;
    }



    
}