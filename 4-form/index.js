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

// JavaScript code to appear sign up and login form
signup.addEventListener("click", function () {
  container.classList.add("active");
});
login.addEventListener("click", function () {
  container.classList.remove("active");
});

// Form Validation
function loginvalidation() {
  let email = document.forms.loginForm.email.value;

  let password = document.forms.loginForm.password.value;

  let regEmail =
    /^[a-zA-Z0-9]qwertyuiopasdfghjklzxcvbnm,!@#$%^&*(),.;'[]<>:"{}@#$%^&*()_+WERTYUIOP{ASDFGHJKL:"ZXCVBNM<>/g;

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

function signUpValidation() {
  let name = document.forms.signup.name.value;

  let email = document.forms.signUpForm.email.value;

  let password = document.forms.signUpForm.password.value;

  let confirmPass = document.forms.signUpForm.confirmPass.value;

  let regEmail =
    /^[a-zA-Z0-9]qwertyuiopasdfghjklzxcvbnm,!@#$%^&*(),.;'[]<>:"{}@#$%^&*()_+WERTYUIOP{ASDFGHJKL:"ZXCVBNM<>/g;

  let regName = /\d+/g;

  if (name == "" || regName.test(name)) {
    alert("Please enter your name properly");
    name.focus();
    return false;
  }
  if (email == "" || regEmail.test(email)) {
    alert("Please enter your email");
    email.focus();
    return false;
  }
  if (password == "" || regName.test(password)) {
    alert("Please enter your password");
    password.focus();
    return false;
  }
  if (confirmPass == password || regName.test(confirmPass)) {
    alert("Please confirm the password ");
    confirmPass.focus();
    return false;
  }
}
