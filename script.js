let button = document.querySelector("button");
let body = document.querySelector("body");
let circle = document.getElementById("circle");


let saveTheme = localStorage.getItem("theme");

if (saveTheme === "dark") {

    body.classList.add("dark"); 
    circle.innerHTML = `<i class="fa-solid fa-moon"></i>`
} else {

    body.classList.add("light");
    circle.innerHTML = `<i class="fa-solid fa-sun"></i>`

}


button.addEventListener("click", () => {


    if (body.classList.contains("light")) {

        body.classList.replace("light", "dark");
        circle.innerHTML = `<i class="fa-solid fa-moon"></i>`

        localStorage.setItem("theme", "dark");
    } else {

        body.classList.replace("dark", "light");
        circle.innerHTML = `<i class="fa-solid fa-sun"></i>`

        
        localStorage.setItem("theme", "light");
    }
})

