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
        document.getElementById("Submit_Button").onclick = "";
        let Data = {};
        Data["Email"] = Email;
        Data["Password"] = Password.trim();
        Data["TP"] = "Yes";
        console.log(Data);
        KL = 12121;


        fetch("/login",{
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
            if(data.Message){
                if(data.Message == "Wrong Password"){
                    // console.log("Wrong...:");
                    document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = "Wrong password, try again."
                    document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                    
                    setTimeout(() => {
                        
                        document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                        document.getElementById("OTP_SENT_Y_N").style.display = "none";
                        document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" onclick="Submit_S();" type="button">Login</button>`;
                        document.getElementById("Password").value = "";
                    }, 3200);


                }
                else if(data.Message == "Login Successful."){
                    document.getElementById("LOADING_ICON").style.display = "flex";
                    document.getElementById("LOADING").style.display = "block";
                    document.getElementById("LOADING_SPAN").style.animationName = "Loading";
                    
                    
                    document.getElementById("Submit_Button").style.backgroundColor = "#1bdf00";
                    document.getElementById("Submit_Button").style.borderColor = "#3a7800";
                    document.getElementById("Submit_Button").style.transitionDuration = "0.5s";
                    document.getElementById("Submit_Button").innerHTML = "Login Successfully.";
                    document.getElementById("Submit_Button").onclick = "";
                    setTimeout(() => {
                        document.getElementById("LOADING_ICON").style.display = "none";
                        document.getElementById("Submit_Button").style.backgroundColor = "#ff3af5";
                        document.getElementById("Submit_Button").style.borderColor = "#be007f";
                        document.getElementById("Submit_Button").innerHTML = "Login";
                        document.getElementById("Submit_Button").onclick = "";
                        setTimeout(() => {
                            window.location.href = "http://192.168.0.44";
                            
                        }, 800);
                        
                    }, 2000);
                }
                else if(data.Message == "You don't have account."){
                    document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = data.Message + `<br>Redirecting you in 3 seconds`;
                    document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                    
                    setTimeout(() => {
                        
                        document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                        document.getElementById("OTP_SENT_Y_N").style.display = "none";
                        document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                        document.getElementById("Password").value = "";
                        window.location.href = "http://192.168.0.44/signup/";
                        
                    }, 3200);

                }
                else if(data.Message == "Unable to send OTP. Please try again after some time."){
                    document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = data.Message;
                    document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                    
                    setTimeout(() => {
                        
                        
                        document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                        document.getElementById("OTP_SENT_Y_N").style.display = "none";
                        document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                        document.getElementById("Password").value = "";
                        window.location.href = "http://192.168.0.44/login/";

                        
                        
                    }, 3200);
                    
                }
                else if(data.Message == "OTP sent successfully"){
                    document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = data.Message;
                    document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                    
                    setTimeout(() => {
                        
                        
                        document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                        document.getElementById("OTP_SENT_Y_N").style.display = "none";
                        document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                        document.getElementById("Password").value = "";
                        // window.location.href = "http://192.168.0.44/login/";
                        Timer();

                        document.getElementsByClassName("container")[0].style.display = "none";
                        document.getElementById("OTP_Container").style.display = "flex";
    
    
                        
                        
                    }, 3200);

                }
                else{
                    document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = data.Message;
                    document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                    
                    setTimeout(() => {
                        
                        document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                        document.getElementById("OTP_SENT_Y_N").style.display = "none";
                        document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                        document.getElementById("Password").value = "";
                    }, 3200);
                }
            }
            console.log("Data...:");
            console.log(data);
        })
        .catch(error => {
            console.log('Problem...:');
        })

        
    }else if(KL != 1){
        // document.getElementById("Submit_Button").onclick = "Submit_S();";
        console.log("Y1");
    }
}






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

function gg(){
    let ds = document.getElementById("Min_2_T").innerHTML;
    let d = document.getElementById("BTNSS");
    if(ds == "00:00"){
        let a = `<button type="button" onclick="Resend();" class="OTP_SUBMIT_D">Resend</button>`;
        d.innerHTML = a;
    }else{
        let b = `<button type="button" class="OTP_SUBMIT_D">Resend</button>`;
        d.innerHTML = b;
    }
}
gg();

function Submitt(){
    // let tt = 1223;
    // console.log(tt.length);
    console.log("w")

    document.getElementById("OTPBTN").innerHTML = `<button class="OTP_SUBMIT" type="button">Submit</button>`;
    //<button class="OTP_SUBMIT" type="button" onclick="Submitt();">Submit</button>
    let OP = document.getElementsByClassName("OTP_INPUT")[0].value;
    
    let OTP = Number(OP);
    // let OTP = Number(OP);
    // console.log(OTP);
    if(OP.length != 6 || OTP < 0 || OTP > 999999){
        console.log(OTP > 999999);
        console.log(OTP < 0);
        console.log(OTP.length != 6);
        console.log("IFFFFF");
        document.getElementsByClassName("OTP_INPUT")[0].value = "";
        document.getElementById("OTPBTN").innerHTML = `<button class="OTP_SUBMIT" type="button" onclick="Submitt();">Submit</button>`;

    }
    else{

        // document.getElementById("").value;
        let a = {
            "OT": OTP,
            "OT_VA":"Yes",
        }
        
        
        fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(a),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
                
        })
        
        .then(data => {
            console.log(data);
            if(data.Ver == "Yes"){
                let d = "Login Successfully";
                document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = d;
                document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                
                setTimeout(() => {
                    
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                    document.getElementById("OTP_SENT_Y_N").style.display = "none";
                    // document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                    document.getElementById("Password").value = "";
                    window.location.href = "http://192.168.0.44";
                }, 3200);


                
            }else if(data.Ver == "Wrong OTP"){
                let k = "Wrong OTP";
                document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = k;
                document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                
                setTimeout(() => {
                    
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                    document.getElementById("OTP_SENT_Y_N").style.display = "none";
                    // document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                    // document.getElementById("Password").value = "";
                    // window.location.href = "http://192.168.0.44";
                    document.getElementById("OTPBTN").innerHTML = `<button class="OTP_SUBMIT" type="button" onclick="Submitt();">Submit</button>`;
                    document.getElementById("OTPP_INT").value = "";
                }, 3200);
                
            }else{
                let a = "An error occured please re load the page and try again.";
                document.getElementById("OTP_SENT_Y_N_CENTER").innerHTML = a;
                document.getElementById("OTP_SENT_Y_N").style.display = "flex";
                document.getElementById("OTP_SENT_Y_N").style.animationName = "Hide";
                
                setTimeout(() => {
                    
                    document.getElementById("OTP_SENT_Y_N").style.animationName = "Hideaa";
                    document.getElementById("OTP_SENT_Y_N").style.display = "none";
                    // document.getElementById("Submit_Button_DIV").innerHTML = `<button id="Submit_Button" title="Login" type="button">Login</button>`;
                    document.getElementById("Password").value = "";
                    setTimeout(() => {
                        window.location.href = "http://192.168.0.44";
                    }, 1000);
                }, 3200);

            }
            
        })
        .catch(error => {
            console.log('Problem...:');
        })
    }
}