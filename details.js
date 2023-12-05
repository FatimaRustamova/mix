let id = new URLSearchParams(window.location.search).get("id");
let point = document.querySelector(".point")
console.log(id);
fetch(`http://localhost:3000/robots/${id}`)
.then(res=>res.json())
.then(data =>{
    point.innerHTML += `
    <div class="crab">
    <div class="up">
        <img src="${data.image}">
    </div>
    <div class="down">
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <button><a href="./details.html?id=${data.id}">View Details</a></button>
    </div>
</div>
    `
})