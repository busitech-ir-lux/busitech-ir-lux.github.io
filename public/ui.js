const themeToggle = document.getElementById("themeToggle");
const skillSearch = document.getElementById("skillSearch");
const skillsList = document.getElementById("skillsList");

function setTheme(next) {
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

const saved = localStorage.getItem("theme");
if (saved) setTheme(saved);

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
});

function filterSkills() {
  const q = (skillSearch?.value || "").trim().toLowerCase();
  [...skillsList.querySelectorAll(".skill")].forEach((item) => {
    const name = item.dataset.name || "";
    item.style.display = !q || name.includes(q) ? "" : "none";
  });
}

skillSearch?.addEventListener("input", filterSkills);