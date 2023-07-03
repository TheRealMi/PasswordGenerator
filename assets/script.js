// Assignment Code
var generateBtn = document.querySelector("#generate");

//Need to ask user for parameters: length and character type
// character types: lowercase, uppercase, numeric, special
//Set variables with strings of character types
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword() {
    var newPassword = ""
    //Prompt 1 ask for password length. (length MUST be between 8 and 128 characters)
    var passLength = window.prompt("Please choose a password length between 8 and 128 characters")

    if (passLength >= 8 && passLength <= 128) {
        //Prompt 2 confirm lowercase character
        var isLowercase = window.confirm("Would you like to include a lowercase character in your password?")
        //Prompt 3 confirm uppercase character
        var isUppercase = window.confirm("Would you like to include an uppercase character in your password?")
        //Prompt 4 confirm numbers
        var isNumbers = window.confirm("Would you like to include a number in your password?")
        //Prompt 5 confirm special character
        var isSpecial = window.confirm("Would you like to include a special character in your password?")

        if (isLowercase === true) {
            var randomIndex = Math.floor(Math.random() * lowercase.length)
            newPassword = newPassword + lowercase[randomIndex]
        }
        if (isUppercase === true) {
            var randomIndex = Math.floor(Math.random() * uppercase.length)
            newPassword = newPassword + uppercase[randomIndex]
        }
        if (isNumbers === true) {
            var randomIndex = Math.floor(Math.random() * numbers.length)
            newPassword = newPassword + numbers[randomIndex]
        }
        if (isSpecial === true) {
            var randomIndex = Math.floor(Math.random() * special.length)
            newPassword = newPassword + special[randomIndex]
        }
        if (isLowercase === false && isUppercase === false && isNumbers === false && isSpecial === false) {
            window.alert("You must pick at least one character type")
            return ""
        }
    }

    else {
        window.alert("Please input a valid password length between 8 and 128")
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
