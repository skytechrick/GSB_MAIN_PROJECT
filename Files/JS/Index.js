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
