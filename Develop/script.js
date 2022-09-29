// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate a string of 16 random numbers
// add event to ask for types of characters
// replace the random string of numbers with the alpha-numerics and symbols
// print the final password to the textbox
