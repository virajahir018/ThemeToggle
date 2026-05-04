let button = document.querySelector("button");
let body = document.querySelector("body");


let saveTheme = localStorage.getItem("theme");

if (saveTheme === "dark") {

    body.classList.add("dark");

    button.classList = "light";
    button.textContent = "Light Mode";
} else {

    body.classList.add("light");

    button.classList = "dark";
    button.textContent = "Dark Mode";

}


button.addEventListener("click", () => {
    

    if (body.classList.contains("light")) {

        body.classList.replace("light", "dark");

        button.classList = "light";
        button.textContent = "Light Mode";

        localStorage.setItem("theme", "dark");
    } else {

        body.classList.replace("dark", "light");

        button.classList = "dark"
        button.textContent = "Dark Mode";

        localStorage.setItem("theme", "light");
    }
})

