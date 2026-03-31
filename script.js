let button = document.getElementById("btn");

button.addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});