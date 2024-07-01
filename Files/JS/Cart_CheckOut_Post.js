


document.getElementById("PrePaid").addEventListener("input", ()=>{
    let bb = `<button onclick="Confirm_Payment(1);" type="button">Confirm Order</button>`;
    Confim_Btn.innerHTML=bb;
});

document.getElementById("CashOnDelivert_1").addEventListener("input", ()=>{
    
    let bb = `<button onclick="Confirm_Payment(2);" type="button">Confirm Order</button>`;
    Confim_Btn.innerHTML=bb;
});


let Paymentsss = document.getElementById("Paymentsss");



    // let CashOnDelivert_1 = document.getElementById("CashOnDelivert_1");
    // let PrePaid = document.getElementById("PrePaid");
    // let Paymentsss = document.getElementById("Paymentsss");
    // let Confim_Btn = document.getElementById("Confim_Btn");


function Confirm_Payment(n){
    console.log(n);
    document.getElementById("Confim_Btn").style.display = "none";
    let Sent;
    
    if (n == 1) {
        Sent = {
            Payment:true
        }
        
    }else if(n == 2){
        Sent = {
            Payment:true
        }
        
    }else{
        Message("Unable to procced");
    }

    if ( n == 2) {
        
        fetch("/cart_confirm_Post",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Sent),
            
            
        }).then(response=>{return response.json()}).then(data=>{
            console.log(data.Message);

        }).catch(e=>{
            document.getElementById("Confim_Btn").style.display = "flex";
        });
    }else if( n == 1) {
        
        
        fetch("/cart_confirm_Post/payment",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Sent),
            
            
        }).then(response=>{return response.json()}).then(data=>{
            console.log(data.Message);
            if(data.Message){




                let options;


                options = {
                    "key": "rzp_test_DBekxO3l7UI6ie",
                    "amount": data.Amount,
                    "currency": "INR",
                    "name": "GET SKY BUY",
                    "description": data.Des,
                    "image": "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYStn2gT4IEn00YDco16ZlGRJRvQqRByQhM-bomnWE1T5ZQdAYGE8x9n14W-VyvYusr2J1VjAQuCnglBu3Jnh2MMqPfNBSLWHw=w1920-h911-rw-v1",
                    "order_id": data.Or_ID,
                    "callback_url":"http://192.168.0.12/cart",
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
                
                var rzp1s = new Razorpay(options);
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

















