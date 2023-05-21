document.addEventListener("DOMContentLoaded", () => {
  let defaultChecked = sessionStorage.getItem("checked");
  let button = document.querySelector(".light")
  let checkbox = document.querySelector(".light .checkbox")
  let themeName = document.querySelector(".light span")

  if (defaultChecked !== null) {
    checkbox.checked = true
    document.body.classList.add("dark")
    themeName.textContent = "Темная"
  }

  function checkCheckbox(checkbox) {
    if (checkbox.checked) {
      document.body.classList.add("dark")
      themeName.textContent = "Темная"
      sessionStorage.setItem("checked", "true")
    } else {
      document.body.classList.remove("dark")
      themeName.textContent = "Светлая"
      sessionStorage.removeItem("checked")
    }
  }

  button.addEventListener("click", function () {
    checkCheckbox(checkbox)
  })

  checkCheckbox(checkbox)
});