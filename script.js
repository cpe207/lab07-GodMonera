//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const FirstName = document.querySelector("#first-name-input");
const LastName = document.querySelector("#last-name-input");
const Email = document.querySelector("#email-input");
const Password = document.querySelector("#password-input");

const RegisterBtn = document.querySelector("#submit-btn");

RegisterBtn.onclick = () => {
  let FirstNameOK = false;
  let LastNameOK = false;
  let EmailOK = false;
  let PasswordOK = false;

  if (FirstName.value === "") {
    FirstName.classList.add("is-invalid");
  } else {
    FirstName.classList.add("is-valid");
    FirstNameOK = true;
  }

  if (LastName.value === "") {
    LastName.classList.add("is-invalid");
  } else {
    LastName.classList.add("is-valid");
    LastNameOK = true;
  }

  if (validateEmail(Email.value) === false) {
    Email.classList.add("is-invalid");
  } else {
    Email.classList.add("is-valid");
    EmailOK = true;
  }

  if (Password.value.length < 6) {
    Password.classList.add("is-invalid");
  } else {
    Password.classList.add("is-valid");
    PasswordOK = true;
  }

  if (FirstNameOK && LastNameOK && EmailOK && PasswordOK) {
    alert("Registered successfully");
  }
};

FirstName.onkeyup = () => {
  FirstName.classList.remove("is-invalid");
  FirstName.classList.remove("is-valid");
};

LastName.onkeyup = () => {
  LastName.classList.remove("is-invalid");
  LastName.classList.remove("is-valid");
};

Email.onkeyup = () => {
  Email.classList.remove("is-invalid");
  Email.classList.remove("is-valid");
};

Password.onkeyup = () => {
  Password.classList.remove("is-invalid");
  Password.classList.remove("is-valid");
};
