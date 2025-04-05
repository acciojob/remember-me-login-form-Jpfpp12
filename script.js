//your JS code here. If required.
<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const existingBtn = document.getElementById("existing");

  const storedUsername = localStorage.getItem("rememberedUsername");

  // Show button if username is saved
  if (storedUsername) {
    usernameInput.value = storedUsername;
    checkbox.checked = true;
    existingBtn.style.display = "inline-block";
  }

  // Existing user login button
  existingBtn.addEventListener("click", function () {
    alert("Logged in as " + storedUsername);
  });

  form.addEventListener("submit", function (e) {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === "" || password === "") {
      e.preventDefault();
      alert("Please enter both username and password.");

      usernameInput.style.border = username === "" ? "2px solid red" : "";
      passwordInput.style.border = password === "" ? "2px solid red" : "";

      return;
    }

    // Save or clear login
    if (checkbox.checked) {
      localStorage.setItem("rememberedUsername", username);
    } else {
      localStorage.removeItem("rememberedUsername");
    }

    alert("Login submitted!");
  });
});
</script>
