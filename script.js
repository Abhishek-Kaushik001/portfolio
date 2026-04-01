// 🔥 Smooth scroll (View My Work button)
const btn = document.getElementById("btn");

if (btn) {
  btn.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// 🔥 Auto year in footer
const year = document.getElementById("year");

if (year) {
  year.innerText = new Date().getFullYear();
}