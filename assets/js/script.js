// Init AOS
AOS.init({
  duration: 900,
  once: true,
  offset: 80,
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

if (savedTheme === "dark") {
  icon.classList.remove("bi-moon-stars-fill");
  icon.classList.add("bi-sun-fill");
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  let currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-sun-fill");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    icon.classList.remove("bi-sun-fill");
    icon.classList.add("bi-moon-stars-fill");
    localStorage.setItem("theme", "light");
  }
});
