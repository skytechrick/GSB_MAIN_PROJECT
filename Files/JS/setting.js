document.addEventListener("DOMContentLoaded", () => {

    let d = window.innerWidth;
    
    function ZiSSes1() {

        let Lists = document.getElementById("Lists");
        let dLists = window.getComputedStyle(Lists);
        
        
        let List_SSss = document.getElementById("List_SS");
        let List_SSV = window.getComputedStyle(List_SSss);
        let WI = Number(dLists.width.split("px")[0]);
        let d = Number(List_SSV.width.split("px")[0]);
        
        let z = d - WI - 50;
        console.log(z);
        document.getElementById("ITEM").style.width = z + "px";
    }
    if (d>750) {
        ZiSSes1();
    }







});

function LIST_BTN(Z) {

    if (Z == "Notification") {
        window.location.replace("/notification");
        // window.location.href = "http://localhost/notification";
    } else if (Z == "Order") {
        window.location.replace("/order");
    } else if (Z == "Cart") {
        window.location.replace("/cart");
    } else if (Z == "Profile") {
        window.location.replace("/Profile");
    } else if (Z == "Favorite") {
        window.location.replace("/favorite");
    } else if (Z == "SB Coins") {
        window.location.replace("/sb_coins");
    } else if (Z == "Setting") {
        window.location.replace("/setting");
    } else if (Z == "Address") {
        window.location.replace("/address");
        
    }
    
}




function SaveEdit(n){
    if (n==1) {
        let Btnnssdsads = document.getElementById("Btnnssdsads");
        Btnnssdsads.innerHTML = `<button type="button" onclick="SaveEdit(2);">Save Changes</button>`
        let SDSDASDERSDS = document.getElementsByClassName("SDSDASDERSDS");
        for (let index = 0; index < SDSDASDERSDS.length; index++) {
            const element = SDSDASDERSDS[index];
            element.style.borderBottom = "1px solid #aaa";
            element.style.fontWeight = "normal";
            
        }
        document.getElementById("FNameA").disabled = false;
        document.getElementById("lNameA").disabled = false;
        document.getElementById("NameAAA").disabled = false;
        let A = document.getElementById("NameAAA").value;
        document.getElementById("NameAAA").value = A.split("+91 ")[1];
    }else if (n == 2) {
        let Btnnssdsads = document.getElementById("Btnnssdsads");
        Btnnssdsads.innerHTML = `<button type="button" onclick="SaveEdit(1);">Edit</button>`
        let SDSDASDERSDS = document.getElementsByClassName("SDSDASDERSDS");
        for (let index = 0; index < SDSDASDERSDS.length; index++) {
            const element = SDSDASDERSDS[index];
            element.style.fontWeight = "bold";
            element.style.borderBottom = "none";
        }
        document.getElementById("FNameA").disabled = true;
        document.getElementById("lNameA").disabled = true;
        document.getElementById("NameAAA").disabled = true;
        let A = document.getElementById("NameAAA").value;
        document.getElementById("NameAAA").value = "+91 "+A;



        let First_Name = document.getElementById("FNameA").value;
        First_Name = First_Name.trim();
        let Last_Name = document.getElementById("lNameA").value;
        Last_Name = Last_Name.trim();
        let Mobile_Number = document.getElementById("NameAAA").value;
        Mobile_Number = Mobile_Number.trim();
        Mobile_Number = Mobile_Number.split("+91 ")[1];



        let Sent = {
            First_Name: First_Name,
            Last_Name: Last_Name,
            Mobile_Number: Mobile_Number,
            T:1,
        }
        
        fetch("/setting",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Sent),
        }).then(response=>{return response.json()}).then(data=>{
            console.log(data);
            if (data.Success == true) {
                Message(data.Message);
            }else{
                let s = data.OB;
                let d = "";
                if (s.FIRST != 1) {
                    d +=s.FIRST;
                    if(s.MOBILE != 1){
                        d += " & " + s.MOBILE;
                    }
                }else if(s.MOBILE != 1){
                    d +=s.MOBILE;

                }
                Message(d);
                
            }
        }).catch(e=>{
            Message("Something error");

        });

        
    }

}

function Message(p) {
    document.getElementById("Mes").innerHTML = p;
    document.getElementById("Background_Blue").style.display = "flex";
}


document.getElementById("Background_Blue").addEventListener("click",()=>{
    document.getElementById("Background_Blue").style.animationName = "Hide";
    setTimeout(() => {
        document.getElementById("Background_Blue").style.animationName = "Hi";
        document.getElementById("Background_Blue").style.display = "none";
    }, 1000);
    
});


document.getElementById("ChangePasswordFInalBtn").addEventListener("click", ()=>{
    document.getElementById("ChangePasswordFInalBtn").disabled = true; 
    let Current_Change = document.getElementById("Current_Change");
    let Create_Change = document.getElementById("Create_Change");
    let Confirm_Change = document.getElementById("Confirm_Change");

    Current_Change = Current_Change.value;
    Create_Change = Create_Change.value;
    Confirm_Change = Confirm_Change.value;

    let sent = {
        Current_Change: Current_Change,
        Create_Change: Create_Change,
        Confirm_Change: Confirm_Change,
    };

    fetch("/change_Password",{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(sent),
    }).then(response=>{return response.json()}).then(data=>{
        if (data.Success == true) {
            Message(data.Message);
            
            document.getElementById("ChangePassword").style.display = "none";
            setTimeout(() => {
                location.reload();
            }, 1000);
            
        }else{
            document.getElementById("ChangePasswordFInalBtn").disabled = false; 
            Message(data.Message);
        }
    }).catch(e=>{
        document.getElementById("ChangePasswordFInalBtn").disabled = true; 
        Message("Something error");
    });
});



document.getElementById("change_Pasw").addEventListener("click",()=>{
    document.getElementById("ChangePassword").style.display = "flex";
});
document.getElementById("Clissds").addEventListener("click",()=>{
    document.getElementById("ChangePassword").style.display = "none";
});

































