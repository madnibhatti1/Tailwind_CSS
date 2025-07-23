function validateForm() {
  let isValid = true;

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous errors
  document.getElementById("usernameError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  if (username === "") {
    document.getElementById("usernameError").innerText = "Username is required";
    isValid = false;
  }

  if (password === "") {
    document.getElementById("passwordError").innerText = "Password is required";
    isValid = false;
  }

  return isValid;
}
