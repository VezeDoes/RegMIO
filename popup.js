const form = document.getElementById("regmio-form");

let firstName = document.getElementById("regmio-first-name");
let lastName = document.getElementById("regmio-last-name");
let username = document.getElementById("regmio-username");
let email = document.getElementById("regmio-email");
let password = document.getElementById("regmio-password");
let showPassword = document.getElementById("regmio-show-password");
let showPasswordLabel = document.getElementById("regmio-show-password-label");
let birthday = document.getElementById("regmio-birthday");

const setButton = document.getElementById("regmio-set-button");

showPassword.addEventListener("click", () => {
    console.log(password.type);
    if (password.type === "password") {
        password.type = "text";
        showPasswordLabel.innerText = "Hide Password";
    } else {
        password.type = "password";
        showPasswordLabel.innerText = "Show Password";
    }
})

chrome.storage.sync.get("user", ({user}) => {
    firstName.value = user.firstName;
    lastName.value = user.lastName;
    username.value = user.username;
    email.value = user.email;
    password.value = user.password;
    birthday.value = user.birthday;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    
    setButton.innerText = "Done!";
    setButton.style.borderBottom = "";

    setTimeout(() => {
        setButton.innerText = "Set";
    }, 1000)

    // we get the values of each form input
    firstName = e.target[0].value;
    lastName = e.target[1].value;
    username = e.target[2].value;
    email = e.target[3].value;
    password = e.target[4].value;
    birthday = e.target[6].value;

    const user = {firstName, lastName, username, email, password, birthday}; // here we create an object, using ES6 so we don't have to repeat ourselves

    // we set the storage to these values
    chrome.storage.sync.set({ user });

    console.log('Updated the data!')
})

