// Assignment Code

// generate a string of 16 random numbers
// add event to ask for types of characters
// replace the random string of numbers with the alpha-numerics and symbols
// print the final password to the textbox

var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '`~!@#$%^&*()_-+=/?.>,<;:'
var chars = numbers;

function writePassword() {
  if (window.confirm("Would you like to include special characters?")) {
    chars = numbers.concat(symbols);
    console.log(chars);
  } else {
    chars = numbers;
}

function generatePassword() {
    var passwd = '';
    for (i=1;i<17;i++) {
      var c = Math.floor(Math.random()*chars.length + 1);
      passwd += chars.charAt(c)
    }
  
    return passwd;
  
  }
// Write password to the #password input
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function pushing() {
  chars.push(numbers);
}