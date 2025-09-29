document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  console.log("Login attempted with:", { username, password });
  alert(`Logging in as ${username}`);
});

document.getElementById("signupBtn").addEventListener("click", function() {
  console.log("Sign up clicked");
  alert("Redirecting to Sign Up page...");
});
