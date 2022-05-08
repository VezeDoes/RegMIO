const user = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    birthday: "2007-07-07"
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ user });
    console.log('Loaded in the data!');
})