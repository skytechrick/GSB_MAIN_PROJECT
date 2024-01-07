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
    let PP = 0;

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
        PP=1;
    }
    else if(mobnoo.length <10){
        document.getElementById('Mobile_Number_P').innerHTML = "Please enter correct mobile number";
        document.getElementById('Mobile_Number_P').style.color = "red";
        mobno.style.border ='1px solid red';
        pp=1
    }
    else{
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
    else{
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
        else{
            document.getElementById('Email_P').innerHTML = "Please enter correct email";
            document.getElementById('Email_P').style.color = "red";
            email.style.border ='1px solid red';
            PP = 1;
        }
    }













    if (Create_Passwordd == "" || Create_Passwordd == null){
        document.getElementById('Create_Password_P').innerHTML = "Please create your password";
        document.getElementById('Create_Password_P').style.color = "red";
        Create_Password.style.border ='1px solid red';
        PP=1;
    }
    else if(Create_Passwordd.length <8){
        document.getElementById('Create_Password_P').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('Create_Password_P').style.color = "red";
        Create_Password.style.border ='1px solid red';
        PP=1;
    }










    if (Confirm_Passwordd == "" || Create_Passwordd == null){
        document.getElementById('DoesNotMatch').innerHTML = "Please re-enter your password";
        document.getElementById('DoesNotMatch').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP=1;
    }
    else if(Confirm_Passwordd.length <8){
        document.getElementById('DoesNotMatch').innerHTML = "Password must be minimum 8 characters";
        document.getElementById('DoesNotMatch').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP=1;
    }
    else if(Confirm_Passwordd != Create_Passwordd){
        document.getElementById('DoesNotMatch').innerHTML = "Password do not match";
        document.getElementById('DoesNotMatch').style.color = "red";
        Confirm_Password.style.border ='1px solid red';
        PP =1;
    }












    setTimeout(() => {
        if(PP==0){
            document.getElementById("SUB_BTN").innerHTML = `<button id="Submit_Button" type="button">Continue</button>`;
            LOADING(4);
            
            let forma = document.getElementById("FORM_SIGNUP");
            let form_Data = new FormData(forma);
            let jsonObject = {};
            let GK = 0;
            form_Data.forEach((value,key) => {
                jsonObject[key] = value;
            });
            

            



            const jsonBody = JSON.stringify(jsonObject);

            fetch("/signup",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: jsonBody,
            })

            .then(response => {
                return response.json();
                
            })
            
            .then(data => {
                let a = document.getElementById("OTP_SENT_Y_N");
                let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");

                // console.log(data);
                if(data.Message){
                    if (data.Message == 'OTP sent successfully') {
                        GK = 1;
                        a.style.display = "flex";
                        a.style.animationName = "Hide";
                        a_C.innerHTML = data.Message;
                        
                    }
                    if (data.Message == 'Unable to send OTP. Please try again after some time.') {
                        GK = 0;
                        a.style.display = "flex";
                        a.style.animationName = "Hide";
                        a_C.innerHTML = data.Message;
                        
                    }
                    if (data.Message == 'E-mail address Already exist.') {
                        GK = 0;
                        a.style.display = "flex";
                        a.style.animationName = "Hide";
                        a_C.innerHTML = data.Message;
                    }
                }
                
                else if(data.FIRST && data.LAST && data.MOBILE && data.EMAIL && data.PASSWORD) {
                    GK = 0;
                    let v = "EMPTY";
                    if(data.FIRST == v){
                        document.getElementById('First_Name_P').innerHTML = "Please enter your first name";
                        document.getElementById('First_Name_P').style.color = "red";
                        first.style.border ='1px solid red';
                    };

                    if(data.LAST == v){
                        document.getElementById('Last_Name_P').innerHTML = "Please enter your last name";
                        document.getElementById('Last_Name_P').style.color = "red";
                        last.style.border ='1px solid red';
                    };
                    
                    if(data.MOBILE == v){
                        document.getElementById('Mobile_Number_P').innerHTML = "Please enter your mobile number";
                        document.getElementById('Mobile_Number_P').style.color = "red";
                        mobno.style.border ='1px solid red';
                    }
                    else if (data.MOBILE == "NUMBER_LESS_MORE"){
                        document.getElementById('Mobile_Number_P').innerHTML = "Please enter correct mobile number";
                        document.getElementById('Mobile_Number_P').style.color = "red";
                        mobno.style.border ='1px solid red';
                    }
                    else if(data.MOBILE == "NO_VALID_NUMBER"){
                        document.getElementById('Mobile_Number_P').innerHTML = "Please enter correct mobile number";
                        document.getElementById('Mobile_Number_P').style.color = "red";
                        mobno.style.border ='1px solid red';
                    }
                    if(data.EMAIL == v){
                        document.getElementById('Email_P').innerHTML = "Please enter your email";
                        document.getElementById('Email_P').style.color = "red";
                        email.style.border ='1px solid red';

                    }
                    else if(data.EMAIL == "NOT_VALID_MAIL"){
                        document.getElementById('Email_P').innerHTML = "Please enter correct email";
                        document.getElementById('Email_P').style.color = "red";
                        email.style.border ='1px solid red';
                    }

                    if(data.PASSWORD == v){
                        document.getElementById('Create_Password_P').innerHTML = "Please create your password";
                        document.getElementById('Create_Password_P').style.color = "red";
                        Create_Password.style.border ='1px solid red';
                        document.getElementById('DoesNotMatch').innerHTML = "Please re-enter your password";
                        document.getElementById('DoesNotMatch').style.color = "red";
                        Confirm_Password.style.border ='1px solid red';

                    }
                    else if(data.PASSWORD == "PASSWORD_LESS"){
                        document.getElementById('DoesNotMatch').innerHTML = "Password must be minimum 8 characters";
                        document.getElementById('DoesNotMatch').style.color = "red";
                        Confirm_Password.style.border ='1px solid red';
                        document.getElementById('Create_Password_P').innerHTML = "Password must be minimum 8 characters";
                        document.getElementById('Create_Password_P').style.color = "red";
                        Create_Password.style.border ='1px solid red';
                    };
                }
                
                else if (data.Unauthorized) {
                    if (data.Unauthorized == 'Unauthorized Access or missing data.') {
                        GK = 0;
                        a.style.display = "flex";
                        a.style.animationName = "Hide";
                        a_C.innerHTML = data.Unauthorized;
                    }
                    if (data.Unauthorized == 'Unauthorized Access. You have to use any browser or app.') {
                        GK = 0;
                        a.style.display = "flex";
                        a.style.animationName = "Hide";
                        a_C.innerHTML = data.Unauthorized;
                    }
                }
                else{
                    GK = 0;
                    a.style.display = "flex";
                    a.style.animationName = "Hide";
                    a_C.innerHTML = "Cann't create your account please reload the page and then try again";
                };


                setTimeout(() => {
                    a.style.animationName = "Hidess";
                    a.style.display = "none";
                    if(GK==1){

                        
                        let Main_Container = document.getElementsByClassName("Main_Container_01")[0];
                        Main_Container.style.display = "none";
                        
                        let OTP_Container = document.getElementById("OTP_Container");
                        OTP_Container.style.display = "flex";
                        Timer();
                    }
                    else{
                        LOADING(1)
                        document.getElementById("SUB_BTN").innerHTML = `<button onclick="Submited_Clicked();" id="Submit_Button" type="button">Continue</button>`;
                    }
                }, 2500);

            })
            
            .catch(error => {
                let a = document.getElementById("OTP_SENT_Y_N");
                let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
                a_C.innerHTML = "Unable to send data to server. Please reload the page and then try again later.";
                a.style.display = "flex";
                a.style.animationName = "Hide";
                a.style.animationName = "Hide";
                setTimeout(() => {
                    a.style.animationName = "Hidess";
                    a.style.display = "none";
                    
                }, 4500);
            })




        }
    }, 1);



};

function Submited_Clicked(){FL_Names()};
A();
Checked();




function Timer() {
    let Min_2_T = document.getElementById("Min_2_T");
    let min = "04";
    let sec = "59";
    let min_sec = '';
    let a = 0;
    let b = 0;
        setInterval(() => {
            min_sec = min + ":" + sec;
            if(min_sec == "00:00"){
                document.getElementsByClassName("H5_")[0].innerHTML = `Haven't got the code.<span id="Min_2_Ta">00:00</span>`;
                min = "04";
                sec = "59";
            }
            Min_2_T.innerHTML = min_sec;
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
}


function Submit() {
    
    document.getElementById("OTPBTN").innerHTML = `<button class="OTP_SUBMIT" type="button">Submit</button>`;
    

    let forma = document.getElementById("OTP_FORM");
    let GP = new FormData(forma);

    let jsonOTP = {};
    GP.forEach((value,key) => {
        jsonOTP[key] = value;
    })
    // console.log(jsonOTP);
    
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonOTP),
    })
    .then(response => {

        return response.json()
    })
    .then(data => {
        let a = document.getElementById("OTP_SENT_Y_N");
        let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
        
        // console.log('Response from server:', data);
        if(data.SUCCESS == "YES"){
            LOADING(1);
            a.style.display = "flex";
            a_C.innerHTML = "OTP verified.";
            a.style.animationName = "Hide";
            setTimeout(() => {
                window.location.href = "/login";
            }, 1600);
        }
        else{
            LOADING(2)
            
            document.getElementById("OTPBTN").innerHTML = `<button class="OTP_SUBMIT" type="button" onclick="Submit()">Submit</button>`;
            a.style.display = "flex";
            a_C.innerHTML = "Invalid OTP";
            a.style.animationName = "Hide";
        }
        setTimeout(() => {
            a.style.animationName = "Hidess";
            a.style.display = "none";
        }, 4500);
    })
    .catch(error => {
        LOADING(2)
        let a = document.getElementById("OTP_SENT_Y_N");
        let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
        a.style.animationName = "Hide";
        a.style.display = "flex";
        a_C.innerHTML = "OTP not verified.";
        document.getElementById("OTPBTN").innerHTML = `<button class="OTP_SUBMIT" type="button" onclick="Submit()">Submit</button>`;
        setTimeout(() => {
            a.style.animationName = "Hidess";
            a.style.display = "none";
        }, 4500);
        
    });


    
}


function LOADING(s) {
    let LOADING = document.getElementById("LOADING");
    let LOADING_SPAN = document.getElementById("LOADING_SPAN");
    let LOADING_ICON = document.getElementById("LOADING_ICON");

    LOADING.style.display = 'block';
    LOADING_SPAN.style.animationName = "Loading";
    LOADING_ICON.style.display = 'flex';
    LOADING_SPAN.style.animationDuration = `${s}s`;
    let a = String(s) + "000";
    let tt = eval(a);

    //////////


    ////////
    //


    //
    //

    setTimeout(() => {
        LOADING.style.display = 'none';
        LOADING_SPAN.style.animationName = "Losading";
        LOADING_ICON.style.display = 'none';
        LOADING_SPAN.style.animationDuration = `0s`;
        
    }, tt);
    
}


function Cancel() {
    document.getElementById("BTNSS").innerHTML = `<button type="button" class="OTP_SUBMIT_D">Resend</button><button type="button" class="OTP_SUBMIT_D">Cancel</button>`;
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Cancel: 'Yes'
        })
    })
    .then(response => {
        return response.json();
    }
    ).then(data => {
        if(data.cancel == "OK"){
            window.location.href = "/signup";
        }
    })
    .catch(error =>{
        console.log("Error")
    });
};

function RT() {
    let a = `<button type="button" onclick="Resend();" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
    let b = `<button type="button" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
    let Q = document.getElementsByClassName("BTNSS")[0];
    let J = document.getElementsByClassName("OTP_INPUT")[0].value;
    if(J == 6){
        Q.innerHTML = a;
    }else{
        Q.innerHTML = b;
    }
}

RT();

function Resend() {
    if(document.getElementById("Min_2_Ta")){
        if(document.getElementById("Min_2_Ta").innerHTML == "00:00"){
            document.getElementById("BTNSS").innerHTML = `<button type="button" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
            // document.getElementById("BTNSS").innerHTML = `<button type="button" onclick="Resend();" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
            // Timer set 
                        

            
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    resend: 'Yes'
                }),
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('Response from server:', data);
                if(data.RESEND == "Yes"){
                    let a = document.getElementById("OTP_SENT_Y_N");
                    let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
                    a.style.display = "flex";
                    a.style.animationName = "Hide";
                    a_C.innerHTML = "OTP sent successfully.";
                    document.getElementById("BTNSS").innerHTML = `<button type="button" onclick="Resend();" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
                    document.getElementsByClassName("H5_")[0].innerHTML = `Haven't got the code.<span id="Min_2_T">00:00</span>`;
                    Timer();
                }
                else {
                    let a = document.getElementById("OTP_SENT_Y_N");
                    let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
                    document.getElementById("BTNSS").innerHTML = `<button type="button" onclick="Resend();" class="OTP_SUBMIT_D">Resend</button><button type="button" onclick="Cancel();" class="OTP_SUBMIT_D">Cancel</button>`;
                    a.style.display = "flex";
                    a.style.animationName = "Hide";
                    a_C.innerHTML = "Unable to sent OTP";
                    
                };
                setTimeout(() => {
                    let a = document.getElementById("OTP_SENT_Y_N");
                    a.style.animationName = "Hidess";
                    a.style.display = "none";
                }, 4000);
            })
            .catch(error => {

                let a = document.getElementById("OTP_SENT_Y_N");
                let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
                a.style.display = "flex";
                a_C.innerHTML = "Cann't connect to a server.";
                setTimeout(() => {
                    a.style.animationName = "Hidess";
                    a.style.display = "none";
                }, 4500);
            });
        }
    }else{
        let a = document.getElementById("OTP_SENT_Y_N");
        let a_C = document.getElementById("OTP_SENT_Y_N_CENTER");
        a.style.display = "flex";
        a.style.animationName = "Hide";
        a_C.innerHTML = "You can not sent otp twice within 5 minutes.";
        setTimeout(() => {
            a.style.animationName = "Hidess";
            a.style.display = "none";
        }, 4500);

    }
}