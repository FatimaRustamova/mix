// let over = document.querySelectorAll("#over");
// let dropdown = document.querySelectorAll(".dropdown");

// over.addEventListener("mouseover", ()=>{
//     dropdown.classList.toggle("none");
// })

let nav = document.querySelector("nav");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>100){
        nav.style.backgroundColor = "rgba(138, 144, 255, 0.9)";
    }
    else{
        nav.style.backgroundColor = "";
    }
})