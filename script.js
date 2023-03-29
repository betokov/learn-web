document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".light");
  let checkbox = document.querySelector(".light .checkbox");
  let themeName = document.querySelector(".light span");

  if(document.body.classList.contains('dark')) {
    themeName.textContent = "Темная";
    checkbox.checked = true;
  }

  button.addEventListener("click", function() {
    if(checkbox.checked) {
      document.body.classList.add("dark");
      themeName.textContent = "Темная";
    } else {
      document.body.classList.remove("dark");
      themeName.textContent = "Светлая";
    }
  });
});