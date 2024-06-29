
// const quantityContainer = document.querySelector(".quantity");
// const minusBtn = quantityContainer.querySelector(".minus");
// const plusBtn = quantityContainer.querySelector(".plus");
// const inputBox = quantityContainer.querySelector(".input-box");

// updateButtonStates();

// quantityContainer.addEventListener("click", handleButtonClick);
// inputBox.addEventListener("input", handleQuantityChange);

// function updateButtonStates() {
//     const value = parseInt(inputBox.value);
//     minusBtn.disabled = value <= 1;
//     plusBtn.disabled = value >= parseInt(inputBox.max);
// }

// function handleButtonClick(event) {
//     if (event.target.classList.contains("minus")) {
//         decreaseValue();
//     } else if (event.target.classList.contains("plus")) {
//         increaseValue();
//     }
// }

// function decreaseValue() {
//     let value = parseInt(inputBox.value);
//     value = isNaN(value) ? 1 : Math.max(value - 1, 1);
//     inputBox.value = value;
//     updateButtonStates();
//     handleQuantityChange();
// }

// function increaseValue() {
//     let value = parseInt(inputBox.value);
//     value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
//     inputBox.value = value;
//     updateButtonStates();
//     handleQuantityChange();
// }

// function handleQuantityChange() {
//     let value = parseInt(inputBox.value);
//     value = isNaN(value) ? 1 : value;

//     // Execute your code here based on the updated quantity value
//     // console.log("Quantity changed:", value);
// }


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
    fetch("/cart/update",{
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
            
            
        }else{
            let xx = `Quantity${z}`;
            let yy = `Quantity00${z}`;
            document.getElementById(xx).style.display = "none";
            document.getElementById(yy).style.display = "flex";
            document.getElementById(zz).disabled = false;
            console.log("Unable to ");

        }
    }).catch(e=>{
        console.log("Error...");

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
        }else{
            document.getElementById(Delete_Cart).disabled = false;
            document.getElementById(Delete_Cart).style.backgroundColor = "rgb(251, 131, 255)";

        }
    }).catch(e=>{console.log("Error")})
    console.log("s");
    
    
}



















function ProccedToCheckOut(){
    
}