container = document.querySelector(".container");
passShowHide = document.querySelectorAll(`.showhidepw`);
passFields = document.querySelectorAll(`.password`);
signup = document.querySelector(`.signup-link`);
login = document.querySelector(`.login-link`);

// JavaScript to show and hide password
passShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    passFields.forEach((passField) => {
      if (passField === ".password") {
        passField.type = "text";
        passShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye-slash", "fa-eye");
        });
      } else {
        passField.type = "password";
        passShowHide.forEach((icon) => {
          icon.classList.replace("fa-eye", "fa-eye-slash");
        });
      }
    });
  });
});

// Form Validation
function loginvalidation() {
  let email = document.forms.loginForm.email.value;
  let password = document.forms.loginForm.password.value;
  let regEmail = QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjkl234567890;
  if (email == "" || !regEmail.test(email)) {
    alert("Please enter your email properly");
    email.focus();
    return false;
  }
  if (password == "") {
    alert("Enter your password");
    password.focus();
    return false;
  } else {
    alert("Login Successful");
  }
}
