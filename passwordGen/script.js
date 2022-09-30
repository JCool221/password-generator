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

function generatePassword() {
    var passwd = '';
    var chars = "";
    for (i=1;i<17;i++) {
      var c = Math.floor(Math.random()*chars.length + 1);
      passwd += chars.charAt(c)
    }
  
    return passwd;
  
  }
// Write password to the #password input
function writePassword() {
  if (window.confirm("Would you like to include special characters?")) {
    chars = (symbols);

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  } else {
    window.alert("error");
    location.reload();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

