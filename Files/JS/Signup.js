function Timer() {
    let Min_2_T = document.getElementsByClassName("Min_2_T")[0];
    
    let min = "04";
    let sec = "59";

    let min_sec = '';
    
    let a = 0;
    let b = 0;

    while (true) {
        setTimeout(() => {
            min_sec = min + ":" + sec;
            Min_2_T.innerHTML = min_sec;
            // Min_2_T.innerHTML();
            a = eval(min);
            b = eval(sec);
                    if (b==0) {
                        b = 60;
                    }
            b = b-1;
            if(b<10){
                sec = "0" + String(b)            
            }else{
                sec = String(b)
            }
            if(b == 59){
                a = a-1;
                min = "0" + a;
            }
        }, 1000);

        if(min_sec == "00:00"){
            break;
        }
        
}
        
        
        
        
        
}

Timer();










































































function Checked() {
    document.getElementById('Input_Check_Box').onclick = function () {
        if (this.checked) {
            document.getElementById("Create_Password").type = "text";
            document.getElementById("Confirm_Password").type = "text";
        } else {
            document.getElementById("Create_Password").type = "password";
            document.getElementById("Confirm_Password").type = "password";
        }
    };
}
function Login(){
    window.location.href = "/login";
}
function FL_Names(){
    let first = document.getElementById('First_Name');
    let last = document.getElementById('Last_Name');
    let mobno = document.getElementById('Mobile_Number');
    let email = document.getElementById('Email');
    let Create_Password = document.getElementById('Create_Password');
    let Confirm_Password = document.getElementById('Confirm_Password');

    let firstt = first.value;
    let lastt = last.value;
    let mobnoo = mobno.value;
    let emaill = email.value;
    let Create_Passwordd = Create_Password.value;
    let Confirm_Passwordd = Confirm_Password.value;
    
    let PP = 0
    if (firstt == "" || firstt == null){
        document.getElementById('First_Name_P').innerHTML = "Please enter your first name";
        document.getElementById('First_Name_P').style.color = "red";
        first.style.border ='1px solid red';
        PP=1
    }
    if (lastt == "" || lastt == null){
        document.getElementById('Last_Name_P').innerHTML = "Please enter your last name";
        document.getElementById('Last_Name_P').style.color = "red";
        last.style.border ='1px solid red';
        PP=1
    }
    if (mobnoo == "" || mobnoo == null){
        document.getElementById('Mobile_Number_P').innerHTML = "Please enter your mobile number";
        document.getElementById('Mobile_Number_P').style.color = "red";
        mobno.style.border ='1px solid red';
        PP=1
    }
    else if(mobnoo.length <10){
        document.getElementById('Mobile_Number_P').innerHTML = "Please enter correct mobile number";
        document.getElementById('Mobile_Number_P').style.color = "red";
        mobno.style.border ='1px solid red';
        pp=1
    }
    else if(true){
        let p = 0
        for (let index = 0; index < mobnoo.length; index++) {
            const element = mobnoo[index];
            if (element == 1 || element == 2 || element == 3 || element == 2 || element == 4 || element == 5 || element == 6 || element == 7 || element == 8 || element == 9 || element == 0 ){

            }
            else{
                p = 1;
            }
            
        }
        if (p==1){
            document.getElementById('Mobile_Number_P').innerHTML = "Please enter correct mobile number";
            document.getElementById('Mobile_Number_P').style.color = "red";
            mobno.style.border ='1px solid red';
            PP=1
        }
    }
    if (emaill == "" || emaill == null){
        document.getElementById('Email_P').innerHTML = "Please enter your email";
        document.getElementById('Email_P').style.color = "red";
        email.style.border ='1px solid red';
        PP =1
    }
    else if(emaill != "" || emaill != null){
        let TT=0;
        for (let index = 0; index < emaill.length; index++) {
            const element = emaill[index];
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
            }
        }
        if(TT==2){
            document.getElementById('Email_P').innerHTML = "Email address (example@gmail.com)";
            document.getElementById('Email_P').style.color = "black";
            email.style.border ='1px solid var(--Outline-Color)';
            

        }
        else if(TT!=2){
            document.getElementById('Email_P').innerHTML = "Please enter correct email";
            document.getElementById('Email_P').style.color = "red";
            email.style.border ='1px solid red';
            PP = 1
        }
    }
    if (Create_Passwordd == "" || Create_Passwordd == null){
        document.getElementById('Create_Password_P').innerHTML = "Please create your password";
        document.getElementById('Create_Password_P').style.color = "red";
        Create_Password.style.border ='1px solid red';
        PP=1
    }
    else if(Create_Passwordd.length <8){
        document.getElementById('Create_Password_P').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('Create_Password_P').style.color = "red";
        Create_Password.style.border ='1px solid red';
        PP=1
    }
    if (Confirm_Passwordd == "" || Create_Passwordd == null){
        document.getElementById('DoesNotMatch').innerHTML = "Please re-enter your password";
        document.getElementById('DoesNotMatch').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP=1
    }
    else if(Confirm_Passwordd.length <8){
        document.getElementById('DoesNotMatch').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('DoesNotMatch').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP=1
    }
    else if(Confirm_Passwordd != Create_Passwordd){
        document.getElementById('DoesNotMatch').innerHTML = "Password do not match";
        document.getElementById('DoesNotMatch').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP =1
    }
    setTimeout(() => {
        if(PP==0){
            document.getElementById("Submit_Button").type = "submit";
            document.getElementById("Submit_Button").onclick = "";
            setTimeout(() => {
                document.getElementById('Submit_Button').click();
            }, 1);
        }
    }, 1);
}
function A() {
    let first = document.getElementById('First_Name');
    let last = document.getElementById('Last_Name');
    let mobno = document.getElementById('Mobile_Number');
    let email = document.getElementById('Email');
    let Create_Password = document.getElementById('Create_Password');
    let Confirm_Password = document.getElementById('Confirm_Password');

    first.addEventListener('input',()=>{
        document.getElementById('First_Name_P').innerHTML = "Letters and spaces only";
        document.getElementById('First_Name_P').style.color = "black";
        first.style.border ='1px solid var(--Outline-Color)';
    });
    last.addEventListener('input',()=>{
        document.getElementById('Last_Name_P').innerHTML = "Letters and spaces only";
        document.getElementById('Last_Name_P').style.color = "black";
        last.style.border ='1px solid var(--Outline-Color)';
    })
    mobno.addEventListener('input',()=>{
        document.getElementById('Mobile_Number_P').innerHTML = "Mobile number (9876543210)";
        document.getElementById('Mobile_Number_P').style.color = "black";
        mobno.style.border ='1px solid var(--Outline-Color)';
    })
    email.addEventListener('input',()=>{
        document.getElementById('Email_P').innerHTML = "Email address (example@gmail.com)";
        document.getElementById('Email_P').style.color = "black";
        email.style.border ='1px solid var(--Outline-Color)';

    })
    Create_Password.addEventListener('input',()=>{
        document.getElementById('Create_Password_P').innerHTML = "Include, uppercase, lowercase, symbol and numbers <br> (Minimum 8 character)";
        document.getElementById('Create_Password_P').style.color = "black";
        Create_Password.style.border ='1px solid var(--Outline-Color)';
        if (Create_Password.value.length>=8){

            if(Confirm_Password.value === Create_Password.value){
                document.getElementById('DoesNotMatch').innerHTML = "Password matched";
                document.getElementById('DoesNotMatch').style.color = "rgb(0, 160, 120)";
                document.getElementById('DoesNotMatch').style.fontWeight = "bold";
                Confirm_Password.style.border ='1px solid var(--Outline-Color)';
            }
            else if(Confirm_Password.value != Create_Password.value && Confirm_Password.value.length>=8){
                document.getElementById('DoesNotMatch').innerHTML = "Password do not match";
                document.getElementById('DoesNotMatch').style.color = "red";
                document.getElementById('DoesNotMatch').style.fontWeight = "100";
                Confirm_Password.style.border ='1px solid red';
            }
        }
    })
    Confirm_Password.addEventListener('input',()=>{
        document.getElementById('DoesNotMatch').innerHTML = "Re-enter your password";
        document.getElementById('DoesNotMatch').style.color = "black";
        Confirm_Password.style.border ='1px solid var(--Outline-Color)';
        if (Confirm_Password.value.length>=8){

            if(Confirm_Password.value === Create_Password.value){
                document.getElementById('DoesNotMatch').innerHTML = "Password matched";
                document.getElementById('DoesNotMatch').style.color = "rgb(0, 160, 120)";
                document.getElementById('DoesNotMatch').style.fontWeight = "bold";
                Confirm_Password.style.border ='1px solid var(--Outline-Color)';
            }
            else if(Confirm_Password.value != Create_Password.value && Create_Password.value.length>=8){
                document.getElementById('DoesNotMatch').innerHTML = "Password do not match";
                document.getElementById('DoesNotMatch').style.color = "red";
                document.getElementById('DoesNotMatch').style.fontWeight = "100";
                Confirm_Password.style.border ='1px solid red';
            }
        }
    })
};
function Submited_Clicked(){FL_Names()};
A();
Checked();