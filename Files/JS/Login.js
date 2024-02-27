function ifinp() {
    let a = document.getElementById("User_Login_P");
    let aa = document.getElementById("User_Login");
    let b = document.getElementById("User_Password_P");
    let bb = document.getElementById("User_Password");
    document.getElementById("Email").addEventListener('input',() =>{
        a.innerHTML = "Enter your Email Address";
        a.style.color = "black";
        aa.style.borderColor = "var(--Outline-Color)";
    });
    document.getElementById("Password").addEventListener('input',() =>{
        b.innerHTML = "Enter your Password";
        b.style.color = "black";
        bb.style.borderColor = "var(--Outline-Color)";
    });
}
ifinp();
function Checked() {
    document.getElementById('Checkk_p').onclick = function () {
        if (this.checked) {
            document.getElementById("Password").type = "text";
        } else {
            document.getElementById("Password").type = "password";
        }
    };
}
Checked()








function Submit_S() {
    let KL = 212;
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    let a = document.getElementById("User_Login_P");
    let aa = document.getElementById("User_Login");
    let b = document.getElementById("User_Password_P");
    let bb = document.getElementById("User_Password");
    if (Email == null || Email == "") {
        a.innerHTML = "Please enter your Email Address";
        a.style.color = "red";
        KL = 121;
        aa.style.borderColor = "red";
    }
    else{
        let TT=0;
        for (let index = 0; index < Email.length; index++) {
            const element = Email[index];
            if(TT==0){
                if (element==="@"){
                    TT = 1
                }
            }
            if(TT==1){
                if(element==="."){
                    TT = 2
                    break
                }
            }if(element == " " || element == ","){
                TT=12121;
                break;
            }
        }
        if(TT != 2){
            document.getElementById('User_Login_P').innerHTML = "Please enter correct email";
            document.getElementById('User_Login_P').style.color = "red";
            a.style.borderColor ='red';
            KL = 1232;
        }else{
            KL = 1
        }
    }

    if (Password == null || Password == "") {
        b.innerHTML = "Please enter your Password";
        b.style.color = "red";
        KL = 212;
        
        bb.style.borderColor = "red";
        
    }
    else if (Password.length < 8) {
        b.innerHTML = "Length of your Password cannot be less than 8";
        b.style.color = "red";
        
        KL = 2;
        bb.style.borderColor = "red";

    }
    else{
        KL = 1;
    }
    
    if(KL == 1){
        let buttona = document.getElementById("Submit_Button");
        buttona.onclick = "";
        
        let Data = {};
        Data["Email"] = Email;
        Data["Password"] = Password.trim();
        console.log(Data);
        KL = 12121;

    }else if(KL != 1){
        let buttona = document.getElementById("Submit_Button");
        buttona.onclick = "Submit_S();";
    }
    
    
    
    
    
    // if all satisfies
    
    

}