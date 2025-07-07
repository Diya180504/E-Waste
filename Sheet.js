document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.querySelector(".Log_in button");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("Password");

  loginBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    alert(`Welcome, ${username}! Login successful.`);
  });
});
