

function Cart_Add(IDS) {
    let send = {
        Product_ID: IDS,

    }

    fetch("/cart_add", {
        headers:{"Content-Type":"application/json"},
        method:"POST",
        body:JSON.stringify(send),
    }).then(response=>{return response.json()}).then(data=>{
        
        // console.log("Clicked");
        if(data.Message == "Added Successfully."){
            document.getElementById("CART_NUMBER").innerHTML = data.Cart_No;
            document.getElementById("CART_NUMBER1").innerHTML = data.Cart_No;
            document.getElementById("Cart_Dackground").style.display = "block";
            setTimeout(() => {
                document.getElementById("Cart_Dackground").style.animationName = "dafade";
                setTimeout(() => {
                    document.getElementById("Cart_Dackground").style.display = "none";
                    document.getElementById("Cart_Dackground").style.animationName = "de";
                    
                }, 1500);
            }, 1000);

        }else{

            window.location.replace("http://192.168.0.12/login");
            // cann't add to cart
        }
    }).catch(e=>{
        console.log('Error');
    });
    
}
