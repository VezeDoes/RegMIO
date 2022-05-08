const path = window.location.hostname;

const gmail = "accounts.google.com";
const facebook = "www.facebook.com";
const amazon = "www.amazon.com";
const reddit = "www.reddit.com";
const linkedIn = "www.linkedin.com";
const wikipedia = "en.wikipedia.org";

//const trello = "trello.com"; something wrong
//const ebay = "signup.ebay.com"; ebay asks for verification
//const twitch = "www.twitch.tv; uses react = virtual dom
//const tiktok = "www.tiktok.com"; -- doesnt work, so I commented it out
//const instagram = "www.instagram.com"; -- doesnt work, so I commented it out
//const discord = "discord.com"; uses react = virtual dom
// wikipedia.com - I won't even try, cause it asks for captcha :(


if (path === gmail) {

    const firstNameInput = document.querySelector("#firstName");
    const lastNameInput = document.querySelector("#lastName");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector('input[name="Passwd"]');
    const confirmPasswordInput = document.querySelector('input[name="ConfirmPasswd"]');

    chrome.storage.sync.get("user", ({user}) => {
        firstNameInput.value = user.firstName;
        lastNameInput.value = user.lastName;
        usernameInput.value = user.username;
        passwordInput.value = user.password;
        confirmPasswordInput.value = user.password;

        console.log('Done!');
    })
}

if (path === facebook) {

    const firstNameInput = document.querySelector('input[name="firstname"]');
    const lastNameInput = document.querySelector('input[name="lastname"]');
    const emailOrMobileInput = document.querySelector('input[name="reg_email__"]');
    const passwordInput = document.querySelector('input[name="reg_passwd__"]');

    const monthInput = document.querySelector("#month");
    const dayInput = document.querySelector("#day");
    const yearInput = document.querySelector("#year");

    chrome.storage.sync.get("user", ({user}) => {
        firstNameInput.value = user.firstName;
        console.log(`First Name set to: ${user.firstName}`);

        lastNameInput.value = user.lastName;
        console.log(`Last Name set to: ${user.lastName}`);

        emailOrMobileInput.value = user.email;
        console.log(`Email set to: ${user.email}`);

        passwordInput.value = user.password;
        console.log(`Password set to: ${user.password}`);

        const birthdayData = user.birthday.split("-");
        let year = birthdayData[0];
        let month = birthdayData[1];
        let day = birthdayData[2];

        if (day.charAt(0) === "0") {
            day = day.charAt(1);
        }
        if (month.charAt(0) === "0") {
            month = month.charAt(1);
        }

        console.log(`Year: ${year}\nMonth: ${month}\nDay: ${day}`);

        if (month) {
            monthInput.value = month;
        }
        if (year) {
            yearInput.value = year;
        }
        if (day) {
            dayInput.value = day;
        }

        console.log('Done!');
    })
}

if (path === amazon) {
    
    const nameInput = document.querySelector('input[name="customerName"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');
    const passwordCheckInput = document.querySelector('input[name="passwordCheck"]');
    
    chrome.storage.sync.get("user", ({user}) => {
        nameInput.value = user.firstName;
        emailInput.value = user.email;
        passwordInput.value = user.password;
        passwordCheckInput.value = user.password;

        console.log('Done!')
    })
}

if (path === reddit) {
    
    const usernameInput = document.querySelector('input[name="user"]');
    const passwordInput = document.querySelector('input[name="passwd"]');
    const passwordVerifyInput = document.querySelector('input[name="passwd2"]');
    const emailInput = document.querySelector('input[name="email"]');
    
    chrome.storage.sync.get("user", ({user}) => {
        usernameInput.value = user.username;
        passwordInput.value = user.password;
        passwordVerifyInput.value = user.password;
        emailInput.value = user.email;
        
        console.log('Done!')
    })
}

if (path === linkedIn) {

    const emailInput = document.querySelector('input[name="email-address"]');
    const passwordInput = document.querySelector('input[name="password"]');

    chrome.storage.sync.get("user", ({user}) => {
        emailInput.value = user.email;
        passwordInput.value = user.password;
        
        console.log('Done!')
    })
}

if (path === wikipedia) {

    const usernameInput = document.querySelector('input[name="wpName"]');
    const passwordInput = document.querySelector('input[name="wpPassword"]');
    const retypePasswordInput = document.querySelector('input[name="retype"]');
    const emailInput = document.querySelector('input[name="email"]');

    chrome.storage.sync.get("user", ({user}) => {
        usernameInput.value = user.username;
        passwordInput.value = user.password;
        retypePasswordInput.value = user.password;
        emailInput.value = user.email;
        
        console.log('Done!')
    })
}

/*
if (path === trello) {
    const emailInput = document.querySelector('input[name="email"]');

    chrome.storage.sync.get("user", ({user}) => {
        emailInput.click();
        emailInput.value = user.email;
        
        console.log('Done!')

        const continueButton = document.querySelector('#signup-submit')
        continueButton.click();
    })
}*/

/* ebay asks for verification
if (path === ebay) {

    const firstNameInput = document.querySelector('input[name="firstname"]');

    firstNameInput.value = "test";
}
*/

/* twitch uses nextjs, which is built on top of react, so, the input fields don't retain their value;

if (path === twitch) {

    const usernameInput = document.querySelector("#signup-username");

    chrome.storage.sync.get("user", ({user}) => {
        usernameInput.value = user.username;
        
        console.log('did')
    })
}
*/

/* Discord doesn't work, they too use react.

if (path === discord) {
    const emailInput = document.querySelector('input[name="email"]');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');

    const monthInput = document.querySelector("#react-select-2-input");
    const dayInput = document.querySelector("#react-select-3-input");
    const yearInput = document.querySelector("#react-select-4-input");

    chrome.storage.sync.get("user", ({user}) => {
        emailInput.value = user.email;
        usernameInput.value = user.username;
        passwordInput.value = user.password;

        const birthdayData = user.birthday.split("-");
        let year = birthdayData[0];
        let month = birthdayData[1];
        let day = birthdayData[2];

        if (day.charAt(0) === "0") {
            day = day.charAt(1);
        }
        if (month.charAt(0) === "0") {
            month = month.charAt(1);
        }

        monthInput.value = month;
        dayInput.value = day;
        yearInput.value = year;

        console.log('did');
    })
}

*/

/* Instagram input fields lose their value when clicked on , perhaps because instagram uses react, and it has something to do with virtual dom.

if (path === instagram) {
    chrome.storage.sync.get("user", ({user}) => {
        setTimeout(() => {
            const emailOrPhoneInput = document.querySelector('input[name="emailOrPhone"]');
            const fullNameInput = document.querySelector('input[name="fullName"]');
            const usernameInput = document.querySelector('input[name="username"]');
            const passwordInput = document.querySelector('input[name="password"]');

            emailOrPhoneInput.value = user.email;
            fullNameInput.value = `${user.firstName} ${user.lastName}`;
            usernameInput.value = user.username;
            passwordInput.value = user.password;

            console.log('did');
        }, 1000) // yesssssssssssssssssssssssss!
    })
}

same thing with instagram
if (path === tiktok) {
    chrome.storage.sync.get("user", ({user}) => {
        setTimeout(() => {
            const emailInput = document.querySelector('input[name="email"]');
        
            emailInput.value = user.email;

            console.log('did');
        }, 1000)
    })
}

*/