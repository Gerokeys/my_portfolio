const darkMode = () => {
  const themeToggleBtn = document.querySelectorAll("#theme-toggle");

  // State
  const theme = localStorage.getItem("theme");

  // On mount
  if (theme) {
    document.body.classList.add(theme);
  }

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute('class')
    }
  };

  // Events
  themeToggleBtn.forEach(
    (btn) => btn.addEventListener("click", handleThemeToggle) // Corrected this line
  );
};

export default darkMode;
