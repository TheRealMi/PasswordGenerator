// Assignment Code
var generateBtn = document.querySelector("#generate");

//Need to ask user for parameters: length and character type
// character types: lowercase, uppercase, numeric, special
//Set variables with strings of character types
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "123456789";
var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// check if special characters are being read
// console.log(special);

function generatePassword() {
    var newPassword = ""
    var passLength = window.prompt("Please choose a password length between 8 and 128 characters")

    if (passLength >= 8 && passLength <= 128) {
        var isLowercase = window.confirm("Would you like to include a lowercase character in your password?")
        var isUppercase = window.confirm("Would you like to include an uppercase character in your password?")
        var isNumbers = window.confirm("Would you like to include a number in your password")
        var isSpecial = window.confirm("Would you like to include a special character in your password")
     }

    else {
        window.alert("Please input a valid password length between 8 and 128")
    }
}
//Prompt 1 ask for password length. (length MUST be between 8 and 128 characters)
//Prompt 2 confirm lowercase character
//Prompt 3 confirm uppercase character
//Prompt 4 confirm numbers
//Prompt 5 confirm special character

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
