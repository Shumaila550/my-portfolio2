function renderSkills() {
  const grid = document.getElementById("skills-grid");

  skills.forEach(skill => {
    const div = document.createElement("div");
    div.innerHTML = `${skill.name} - ${skill.pct}%`;
    grid.appendChild(div);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.textContent = p.title;
    grid.appendChild(div);
  });
}

function renderServices() {
  const grid = document.getElementById("services-grid");

  services.forEach(s => {
    const div = document.createElement("div");
    div.textContent = s.title;
    grid.appendChild(div);
  });
}
