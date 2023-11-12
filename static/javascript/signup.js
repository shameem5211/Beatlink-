// script for show password button

document.getElementById("show_pass").addEventListener("change", function() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm_password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    confirmPasswordInput.type = "text";
  } else {
    passwordInput.type = "password";
    confirmPasswordInput.type = "password";
  }
});


// script for password conditions

document.getElementById("password").addEventListener("input", function() {
  var passwordInput = this.value;
  var passwordStrengthElement = document.getElementById("password-strength");

  var numberRegex = /[0-9]/;
  var letterRegex = /[a-zA-Z]/;
  var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  var hasNumber = numberRegex.test(passwordInput);
  var hasLetter = letterRegex.test(passwordInput);
  var hasspecialCharRegex = specialCharRegex.test(passwordInput);
  var isLongEnough = passwordInput.length >= 6;

  var isPasswordValid = hasNumber && hasLetter && hasspecialCharRegex && isLongEnough;

  // Update UI to indicate password strength
  passwordStrengthElement.innerHTML = isPasswordValid ? "Strong Password" : "Weak Password";
  passwordStrengthElement.style.color = isPasswordValid ? "green" : "red";
});

