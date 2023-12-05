// let over = document.querySelectorAll("#over");
// let dropdown = document.querySelectorAll(".dropdown");

// over.addEventListener("mouseover", ()=>{
//     dropdown.classList.toggle("none");
// })

let nav = document.querySelector("nav");
let divs = document.querySelector(".divs");

window.addEventListener("scroll", ()=>{
    if(window.scrollY>100){
        nav.style.backgroundColor = "rgba(138, 144, 255, 0.9)";
    }
    else{
        nav.style.backgroundColor = "";
    }
})

fetch(" http://localhost:3000/robots")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        divs.innerHTML += `
        <div class="crab">
        <div class="up">
            <img src="${element.image}">
        </div>
        <div class="down">
            <h3>${element.name}</h3>
            <p>${element.description}</p>
            <button><a href="./details.html?id=${element.id}">View Details</a></button>
        </div>
    </div>`
    });
})