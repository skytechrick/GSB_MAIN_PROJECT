let Profile_Hover = () =>{
    let Nav_4 = document.getElementById("Nav_4");
    let Profile_Down = document.getElementById("Profile_Down");
    let Background_Blur_50 = document.getElementById("Background_Blur_50");
    Nav_4.addEventListener("mouseover",() => {
        Profile_Down.style.display = "flex";
        Background_Blur_50.style.display = "block";
        Profile_Down.style.animationName = "Up_Down_Profile";
        Profile_Down.style.animationFillMode = "forward";
    })
    Nav_4.addEventListener("mouseout",() => {
        Profile_Down.style.display = "none";
        Background_Blur_50.style.display = "none";
        Profile_Down.style.animationName = "Down_Up_Profile";
        Profile_Down.style.animationFillMode = "forward";
    })
}
Profile_Hover();
let More_Hover = () =>{
    let Nav_5 = document.getElementById("Nav_5");
    let More_Down = document.getElementById("More_Down");
    let Background_Blur_50 = document.getElementById("Background_Blur_50");
    Nav_5.addEventListener("mouseover",() => {
        More_Down.style.display = "flex";
        Background_Blur_50.style.display = "block";
        More_Down.style.animationName = "Up_Down_More";
        More_Down.style.animationFillMode = "forward";

    })
    Nav_5.addEventListener("mouseout",() => {
        More_Down.style.display = "none";
        Background_Blur_50.style.display = "none";
        More_Down.style.animationName = "Down_Up_More";
        More_Down.style.animationFillMode = "forward";
    })
}
More_Hover();
let All_Hover = () =>{
    let All = document.getElementById("All");
    let Nav_2 = document.getElementById("Nav_2");
    let All_ARROW = document.getElementById("All_ARROW");
    let Background_Blur_50 = document.getElementById("Background_Blur_50");
    All.addEventListener("mouseover",() => {
        Background_Blur_50.style.display = "block";
        All.style.borderBottomLeftRadius = "0px";
        Nav_2.style.borderBottomLeftRadius = "0px";
        All_ARROW.style.display = "flex";
        All_ARROW.style.animationName = "Up_Down_All";
        All_ARROW.style.animationFillMode = "forward";
    })
    All.addEventListener("mouseout",() => {
        Background_Blur_50.style.display = "none";
        All.style.borderBottomLeftRadius = "50%";
        Nav_2.style.borderBottomLeftRadius = "50px";
        All_ARROW.style.animationName = "Down_Up_All";
        All_ARROW.style.animationFillMode = "forward";
        All_ARROW.style.display = "none";
    })
}

All_Hover();
function Search_Click() {
    let Search_Main_Box = document.getElementById('Search_Main_Box');
    Search_Main_Box.addEventListener('input',() =>{
        let Search_Options = document.getElementById('Search_Options');
        Search_Options.style.display = 'block';
    });
    document.addEventListener('click',()=> {
        let Search_Options = document.getElementById('Search_Options');
        Search_Options.style.display = 'none';
    })    
}
Search_Click();


let Profile_Hovera = () =>{
    let Nav_2nd_3 = document.getElementById("Nav2_3");
    let Profile_Down = document.getElementById("Profile_Down2");
    let Background_Blur_50 = document.getElementById("Back_Nav_2");
    Nav_2nd_3.addEventListener("mouseover",() => {
        Profile_Down.style.display = "block";
        Background_Blur_50.style.display = "block";
        Profile_Down.style.animationName = "Up_Down_Profile2";
        Profile_Down.style.animationFillMode = "forward";
    })
    Nav_2nd_3.addEventListener("mouseout",() => {
        Profile_Down.style.display = "none";
        Background_Blur_50.style.display = "none";
        Profile_Down.style.animationName = "Down_Up_Profile2";
        // Profile_Down.style.animationFillMode = "forward";
        Profile_Down.style.animationFillMode = "forward";
    })
}
Profile_Hovera();

let More_Hovera = () =>{
    let Nav_5 = document.getElementById("Nav2_4");
    let More_Down = document.getElementById("More_Down2");
    let Background_Blur_50 = document.getElementById("Back_Nav_2");
    Nav_5.addEventListener("mouseover",() => {
        More_Down.style.display = "block";
        Background_Blur_50.style.display = "block";
        More_Down.style.animationName = "Up_Down_Morea";
        More_Down.style.animationFillMode = "forward";

    })
    Nav_5.addEventListener("mouseout",() => {
        More_Down.style.display = "none";
        Background_Blur_50.style.display = "none";
        More_Down.style.animationName = "Down_Up_Morea";
        More_Down.style.animationFillMode = "forward";
    })
}
More_Hovera();




function Hamburger_Open() {
    let Aside_Hamburger = document.getElementById("Aside_Hamburger");
    Aside_Hamburger.style.animationName = "Left_Right_Hamburger";
    document.getElementById("Hamburger_BG").style.display = "block";
    
}
function Hamburger_Close() {
    let Aside_Hamburger = document.getElementById("Aside_Hamburger");
    Aside_Hamburger.style.animationName = "Right_Left_Hamburger";
    document.getElementById("Hamburger_BG").style.display = "none";
    
}

function Hamburger_BG_Click() {
    document.getElementById("Hamburger_BG").addEventListener("click", () => {
        Aside_Hamburger.style.animationName = "Right_Left_Hamburger";
        document.getElementById("Hamburger_BG").style.display = "none";

    });
    
}

Hamburger_BG_Click();





























// console.log();
function Arrow_Left(d,f) {
    let Arrow_Left = document.getElementsByClassName("Arrow_Left")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    Arrow_Left.addEventListener("click", ()=> {
        
        if(parseFloat(window.getComputedStyle(Row_Slide).left) >= 0){
            console.log("A");
        }else{
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b + 60)}px`;
            console.log(c);
            Row_Slide.style.left = c;
        }
    })
}

// let Row_Slide = document.getElementsByClassName("Row_Slide")[0];
// Row_Slide.classList.add('move');


function Arrow_Right(d,f) {
    let Arrow_Right = document.getElementsByClassName("Arrow_Right")[d];
    let Row_Slide = document.getElementsByClassName("Row_Slide")[f];
    let Row_1 = document.getElementsByClassName("Row_1")[0];
    Arrow_Right.addEventListener("click", ()=> {
        let wid =  parseFloat(window.getComputedStyle(Row_1).width);
        let aaa = 2130-wid;
        console.log(aaa);
        if(parseFloat(window.getComputedStyle(Row_Slide).left) <= -aaa){
            console.log("U");
        }else{
            Row_Slide.classList.add('move');
            let a = window.getComputedStyle(Row_Slide);
            let b = parseFloat(a.left);
            let c = `${(b - 60)}px`;
            console.log(c);
            Row_Slide.style.left = c;
        }
    })
}
Arrow_Left(0,0)
Arrow_Right(0,0);
Arrow_Left(1,1)
Arrow_Right(1,1);
Arrow_Left(2,2)
Arrow_Right(2,2);
Arrow_Left(3,3)
Arrow_Right(3,3);










