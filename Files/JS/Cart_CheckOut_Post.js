


document.getElementById("PrePaid").addEventListener("input", ()=>{
    let bb = `<button onclick="Confirm_Payment(1);" type="button">Confirm Order</button>`;
    Confim_Btn.innerHTML=bb;
});

document.getElementById("CashOnDelivert_1").addEventListener("input", ()=>{
    
    let bb = `<button onclick="Confirm_Payment(2);" type="button">Confirm Order</button>`;
    Confim_Btn.innerHTML=bb;
});


function Payment_Confirm(response) {
    fetch("/cart_confirm_response",{
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body: JSON.stringify(response)
    }).then(response=>{return response.json()}).then(data=>{
        if(data.Message == 1){
            Message1(1);
            
        }else{
            Message1(2);
            
        }
        
    }).catch(e=>{
        console.log("Error verification.");

    })
    console.log(response);
    
}

function Payment_Failed(response) {
    Message1(2);
}
    






function Confirm_Payment(n){

    document.getElementById("Confim_Btn").style.display = "none";
    let Sent;
    if (n == 1) {Sent = {Payment:true}}else if(n == 2){Sent = {Payment:true}}else{Message1(2);}
    if ( n == 2) {
        fetch("/cart_confirm_Post",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Sent),
        }).then(response=>{return response.json()}).then(data=>{
            console.log(data.Message);
            if (data.Message == true){
                Message1(1);
            }else if (data.Message == false){
                Message1(2);
            }else{
                Message1(2);
            }
        }).catch(e=>{
            document.getElementById("Confim_Btn").style.display = "flex";
            Message1(2);
        });
    }else if(n == 1) {
        fetch("/cart_confirm_Post/payment",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Sent),
        }).then(response=>{return response.json()}).then(data=>{
            console.log(data.Message);
            if(data.Message){
                let options = {
                    "key": "rzp_test_DBekxO3l7UI6ie",
                    "amount": data.Amount,
                    "currency": "INR",
                    "name": "GET SKY BUY",
                    "description": data.Des,
                    "image": "https://skytechrick.github.io/GSB_MAIN_PROJECT/Files/Img/GSB_logo.png",
                    "order_id": data.Or_ID,
                    // "callback_url":"http://localhost/cart",
                    "handler": Payment_Confirm,
                    "prefill": {
                        "name": data.Name,
                        "email": data.Email,
                        "contact": data.Mobile
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office--"
                    },
                    "theme": {
                        "color": "#fb83ff"
                    }
                };
                
                let rzp1s = new Razorpay(options);
                rzp1s.on('payment.failed', Payment_Failed);
                document.getElementById('rzp-button1').onclick = function(e){
                    rzp1s.open();
                    e.preventDefault();
                }


                document.getElementById("rzp-button1").click();














            }

        }).catch(e=>{
            document.getElementById("Confim_Btn").style.display = "flex";
        });
    }
};






function Message1(n){

    if(n==1){
        let a = "Order Placed Successfully.";
        let b = "You will get a mail for order confirmation, that if order is confirmed or not. <br>Thank You for placing order.";
        let Messages = document.getElementById("Messages");
        let Messagesmall = document.getElementById("Messagesmall");
        Messages.innerHTML = a;
        Messagesmall.innerHTML = b;
        let Yes_No = document.getElementById("Yes_No");
        Yes_No.innerHTML = `<span  id="Yes_No_Sp" class="material-symbols-outlined">check</span>`
        document.getElementById("Message1").style.display = "block";
        document.getElementById("Yes_No_Sp").style.backgroundColor = "rgb(154, 255, 199)";
        
        setTimeout(() => {
            window.location.replace("http://localhost/orders");
        }, 5000);
    }else{
        let a = "Unable to place order.";
        let b = "Please try again after some time";
        let Messages = document.getElementById("Messages");
        let Messagesmall = document.getElementById("Messagesmall");
        Messages.innerHTML = a;
        Messagesmall.innerHTML = b;
        let Yes_No = document.getElementById("Yes_No");
        Yes_No.innerHTML = `<span  id="Yes_No_Sp" class="material-symbols-outlined">close</span>`
        document.getElementById("Message1").style.display = "block";
        document.getElementById("Yes_No_Sp").style.backgroundColor = "rgb(255, 153, 153)";
        setTimeout(() => {
            // document.getElementById("Message1").style.display = "none";
            document.getElementById("Message1").addEventListener("click",()=>{
                document.getElementById("Message1").style.display = "none";
                document.getElementById("Confim_Btn").style.display = "flex";
            })
        }, 2000);

    }
}











