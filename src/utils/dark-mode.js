const darkMode = () => {
  const themeToggleBtn = document.querySelectorAll("#theme-toggle");

  themeToggleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  });
};

export default darkMode;
