
function Plus(n) {
    let Input = document.getElementsByClassName("input-box")[n];
    let max = Number(Input.max);
    let Current = Number(Input.value);
    
    let z = Current;
    if (Current <max) {
        z = Current + 1;
    }else{
        z = max;
    }
    Input.value = z;
    

    
}

function Minus(n) {
    let Input = document.getElementsByClassName("input-box")[n];
    let max = Number(Input.min);
    let Current = Number(Input.value);
    
    let z = Current;
    if (Current > max) {
        z = Current - 1;
    }else{
        z = max;
    }
    Input.value = z;
    

    
}


















function Change_Quantity(n){
    let x = `Quantity${n}`;
    let y = `Quantity00${n}`;
    document.getElementById(x).style.display = "flex";
    document.getElementById(y).style.display = "none";
    
    let zz = `Updatebtn${n}`;
    document.getElementById(zz).disabled = false;

}


function Update_Stock(n, z) {
    let x = n.split("A")[1];
    let zz = `Updatebtn${z}`;
    document.getElementById(zz).disabled = true;
    // console.log(x);
    
    let val = document.getElementById(n).value;
    let Send = {
        ID:x,
        Quantity:val,
    }
    fetch("/cart_update",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(Send),
    }).then(response=>{return response.json()}).then(data=>{
        if (data.Message) {
            let xx = `Quantity${z}`;
            let yy = `Quantity00${z}`;
            document.getElementById(xx).style.display = "none";
            document.getElementById(yy).style.display = "flex";
            document.getElementById(zz).disabled = false;
            
            
            let q = data.Num;
            
            document.getElementById(`Selecteds${z}`).innerHTML = q;
            setTimeout(() => {
                
                location.reload();
            }, 700);
            
        }else{
            let xx = `Quantity${z}`;
            let yy = `Quantity00${z}`;
            document.getElementById(xx).style.display = "none";
            document.getElementById(yy).style.display = "flex";
            document.getElementById(zz).disabled = false;
            // console.log("Unable to ");
            setTimeout(() => {
                
                location.reload();
            }, 700);
            
        }
    }).catch(e=>{
        setTimeout(() => {
            
            location.reload();
        }, 700);
        // console.log("Error...");

    })


    // console.log(val);

    
}




// rgb(251, 131, 255)
function Delete_Cart(ID,x) {
    let Delete_Cart = `Delete_Cart${x}`;
    document.getElementById(Delete_Cart).disabled = true;
    document.getElementById(Delete_Cart).style.backgroundColor = "#aaa";
    let Send ={
        ID:ID,
    };
    fetch("/cart_delete",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(Send),
 
    }).then(response=>{return response.json()}).then(data=>{
        if(data.Message){
            let Productstart = `Productstart${x}`;
            document.getElementById(Productstart).innerHTML = "";
            document.getElementById(Productstart).style.display = "none";
            
            setTimeout(() => {
                
                location.reload();
            }, 700);
        }else{
            document.getElementById(Delete_Cart).disabled = false;
            document.getElementById(Delete_Cart).style.backgroundColor = "rgb(251, 131, 255)";

        }
    }).catch(e=>{
        
        setTimeout(() => {
            
            location.reload();
        }, 700);
    });
    // console.log("s");
    
    
}



















function ProccedToCheckOut(){
    document.getElementById("SUBSDSD").click();
    // window.location.replace("http://192.168.0.12/cart/checkout");
}; 