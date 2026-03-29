// INIT ALL
window.onload = () => {
  renderSkills();
  renderProjects();
  renderServices();
  initThree();

  document.getElementById("preloader").style.display = "none";
};

// THEME
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme =
    html.dataset.theme === "dark" ? "light" : "dark";
}

// FORM
function handleSubmit(btn) {
  btn.textContent = "Sending...";
  setTimeout(() => {
    btn.textContent = "Sent!";
  }, 1500);
}

// TYPING EFFECT
const roles = ["Developer", "Designer", "Freelancer"];
let i = 0;

setInterval(() => {
  document.getElementById("typing-text").textContent =
    roles[i];
  i = (i + 1) % roles.length;
}, 2000);
