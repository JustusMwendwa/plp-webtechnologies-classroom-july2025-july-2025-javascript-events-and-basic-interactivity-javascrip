/*******************************
 * Interactive Feature 1: Theme Toggle
 * Toggles a "dark-mode" class on the body.
 *******************************/
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

/*******************************
 * Interactive Feature 2: Counter
 * Increments a counter when button is clicked.
 *******************************/
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("countDisplay");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

/*******************************
 * Form Validation
 * Checks Name, Email, and Password fields
 * - Name: not empty
 * - Email: basic email regex
 * - Password: at least 6 characters
 *******************************/
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission
  let valid = true;

  // Clear old messages
  document.getElementById("formSuccess").textContent = "";
  ["nameError", "emailError", "passwordError"].forEach(id => {
    document.getElementById(id).textContent = "";
  });

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully!";
    form.reset();
  }
});
