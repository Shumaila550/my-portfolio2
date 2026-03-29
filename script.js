// THEME TOGGLE
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

// SAMPLE DATA
const skills = ["HTML", "CSS", "JavaScript", "React"];
const grid = document.getElementById("skills-grid");

skills.forEach(skill => {
  const div = document.createElement("div");
  div.textContent = skill;
  grid.appendChild(div);
});
