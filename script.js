document.addEventListener("DOMContentLoaded", () => {
    let passLength = document.querySelector("#password-length input");
    let options = document.querySelectorAll("#checkboxes-box div input");
    let generateBtn = document.querySelector("#generate-btn");
    let password = document.querySelector(".password");
    let copyBtn = document.querySelector("#copy-btn");
    let copiedMsg = document.querySelector("#container #password-box #copy-btn span");
    let copiedIcon = document.querySelector("#container #password-box #copy-btn i");

    let getPassLengthValue = () => {
        document.querySelector(".length-value").innerHTML = passLength.value;
    }

    const characters = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    }

    let getPassword = () => {
        let strongPassword = "";
        let randomPassword = "";
        let passwordLength = passLength.value;
        options.forEach((option) => {
            if (option.checked) {
                strongPassword += characters[option.id];
            }
        })

        for (let i = 0; i < passwordLength; i++) {
            randomPassword += strongPassword.charAt(Math.floor(Math.random() * strongPassword.length));
        }
        password.innerHTML = randomPassword;
    }

    let copyPassword = () => {
        navigator.clipboard.writeText(password.textContent);
        copiedIcon.style.display = "none";
        copiedMsg.style.display = "block";
        setTimeout(() => {
            copiedIcon.style.display = "block";
            copiedMsg.style.display = "none";
        }, 1000)
    }

    copyBtn.addEventListener("click", copyPassword);
    generateBtn.addEventListener("click", getPassword);
});
