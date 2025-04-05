//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");

  form.addEventListener("submit", function (e) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (username === "" || password === "") {
      e.preventDefault(); // Stop form submission
      alert("Please enter both username and password.");
      
      // Optional: Add red border to highlight empty fields
      if (username === "") {
        usernameInput.style.border = "2px solid red";
      } else {
        usernameInput.style.border = "";
      }

      if (password === "") {
        passwordInput.style.border = "2px solid red";
      } else {
        passwordInput.style.border = "";
      }

      return;
    }

    // Optional: Alert if checkbox is checked
    if (checkbox.checked) {
      alert("You will be remembered next time!");
    } else {
      alert("Login submitted without remembering.");
    }

    // All good, form will be submitted to server
  });
});
