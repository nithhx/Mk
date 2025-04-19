const allowedUsers = [
  { first: "Maykie", last: "Marcelo" },
  { first: "Mikie", last: "Marcelo" },
];

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const first = document.getElementById("firstName").value.trim();
  const last = document.getElementById("lastName").value.trim();
  const errorMsg = document.getElementById("error-msg");

  const valid = allowedUsers.some(user =>
    user.first.toLowerCase() === first.toLowerCase() &&
    user.last.toLowerCase() === last.toLowerCase()
  );

  if (valid) {
    localStorage.setItem("loggedInUser", JSON.stringify({ first, last }));
    window.location.href = "album.html";
  } else {
    errorMsg.textContent = "Invalid name. Try again!";
  }
});