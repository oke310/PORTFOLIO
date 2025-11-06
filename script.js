// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");

  // Apply saved mode from localStorage
  const savedMode = localStorage.getItem("darkMode");

  if (savedMode === "enabled") {
    document.body.classList.add("dark-mode");
    if (toggleButton) toggleButton.textContent = "☀️";
  } else {
    if (toggleButton) toggleButton.textContent = "🌙";
  }

  // Toggle event listener
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        toggleButton.textContent = "☀️";
      } else {
        localStorage.setItem("darkMode", "disabled");
        toggleButton.textContent = "🌙";
      }
    });
  }
});
