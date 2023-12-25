function Timer() {
    let Min_2_T = document.getElementsByClassName("Min_2_T")[0];
    let min = "04";
    let sec = "59";
    let min_sec = '';
    let a = 0;
    let b = 0;
        setInterval(() => {
            min_sec = min + ":" + sec;
            if(min_sec == "00:00"){
                document.getElementsByClassName("H5_")[0].innerHTML = `Haven't got the code.<span class="Min_2_Ta">00:00</span>`;
                min = "04";
                sec = "59";
            }
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
}

Timer();


function Submit() {

    let PP = document.getElementsByClassName("OTP_INPUT")[0].value;
    fetch('/signup/otp/verification', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            OTP_a: PP
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
        if(data.Login){
            console.log("Login successfull");
        }
    })
    .catch(error => {
        console.log('Error sending data:', error);
    });


    
}












function Resend() {
    let Min_2_Ta = document.getElementsByClassName("Min_2_Ta")[0];

    if(Min_2_Ta.innerHTML = "00:00"){

        
        fetch('/signup/otp/verification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                resend: 'Yes'
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Response from server:', data);
            if(data.Login){
                console.log("Login successfull");
            }
        })
        .catch(error => {
            console.log('Error sending data:', error);
        });
    }






    else{

    }
}
    
    
    
    
    
    