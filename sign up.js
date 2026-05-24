
let form = document.querySelector("form");

let nameRegex = /^[A-Z][a-z]{2,}$/;

let fnameField = document.querySelector(".firstname");

fnameField.addEventListener("input", function () {

    let fnameTest = nameRegex.test(fnameField.value);

    let output = fnameField.nextElementSibling;

    if (!fnameTest) {

        output.innerHTML = `
        <li class="invalid-text">Username must start with Capital letter</li>
        <li class="invalid-text">Only letters allowed</li>
        <li class="invalid-text">No spaces</li>
        <li class="invalid-text">Minimum 3 letters</li>
        `;

    } else {

        output.innerHTML = `
        <li class="valid-text">Valid Username</li>
        `;
    }
})

let emailRegex = /^[a-z][A-Za-z0-9%+._-]{0,20}@gmail\.com$/;

let emailField = document.querySelector(".email");

emailField.addEventListener("input", function () {

    let emailTest = emailRegex.test(emailField.value);

    let output = emailField.nextElementSibling;

    if (!emailTest) {

        output.innerHTML = `
        <li class="invalid-text">Email must start with small letter</li>
        <li class="invalid-text">Only letters, numbers and [%+._-]</li>
        <li class="invalid-text">Must end with @gmail.com</li>
        <li class="invalid-text">No spaces allowed</li>
        `;

    } else {

        output.innerHTML = `
        <li class="valid-text">Valid Email</li>
        `;
    }
});

let phoneRegex = /^01[0125]\d{8}$/;

let phoneField = document.querySelector(".phone");

phoneField.addEventListener("input", function () {

    let phoneTest = phoneRegex.test(phoneField.value);

    let output = phoneField.nextElementSibling;

    if (!phoneTest) {

        output.innerHTML = `
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  phone number must start with 010 or 011 or 015 or 012 </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  only 11 digit </li>
        <li class="invalid-text"> <i class="fa-solid fa-circle-xmark"></i>  have no space </li>
        `;

    } else {

        output.innerHTML = `
        <li class="valid-text">Valid Phone Number</li>
        `;
    }
});

let passwordRegex = /^[A-Za-z0-9]{8,}$/;

let passwordField = document.querySelector(".password");

passwordField.addEventListener("input", function () {

    let passwordTest = passwordRegex.test(passwordField.value);

    let output = passwordField.nextElementSibling;

    if (!passwordTest) {

        output.innerHTML = `
        <li class="invalid-text">Password must be 8 characters</li>
        <li class="invalid-text">Letters and numbers only</li>
        <li class="invalid-text">No spaces allowed</li>
        `;
    } else {

        output.innerHTML = `
        <li class="valid-text">Valid Password</li>
        `;
    }
});

let togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {

    if (passwordField.type === "password") {

        passwordField.type = "text";

        togglePassword.innerHTML = "🤨";

    } else {

        passwordField.type = "password";

        togglePassword.innerHTML = "👁";
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let fnameTest = nameRegex.test(fnameField.value);

    let emailTest = emailRegex.test(emailField.value);

    let phoneTest = phoneRegex.test(phoneField.value);

    let passwordTest = passwordRegex.test(passwordField.value);

    if (fnameTest && emailTest && phoneTest && passwordTest) {
        alert("Signed Up Successfully");
        window.location.href = "home.html";
    } else {
        alert("Please Check Your Inputs");
    }
});