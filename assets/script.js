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
    var passCharacters = ""
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

        // Concat lowercase character to new password
        if (isLowercase === true) {
            passCharacters = passCharacters + lowercase
        }
        // Concat uppercase character to new password
        if (isUppercase === true) {
            passCharacters = passCharacters + uppercase
        }
        // Concat number to new password
        if (isNumbers === true) {
            passCharacters = passCharacters + numbers
        }
        // Concat special character to new password
        if (isSpecial === true) {
            passCharacters = passCharacters + special
        }

        // Generate new password. 
        // Add new character at random to password until password reaches specified "passLength"
        for (i = 0; newPassword.length < passLength; i++) {
            var randomIndex = Math.floor(Math.random() * passCharacters.length)
            newPassword = newPassword + passCharacters[randomIndex]
        }


        // Verify character type is chosen
        if (isLowercase === false && isUppercase === false && isNumbers === false && isSpecial === false) {
            window.alert("You must pick at least one character type")
            return ""
        }
    }

    // Verify password length
    else {
        window.alert("Please input a valid password length between 8 and 128")
    }
    return newPassword
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
