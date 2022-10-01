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
    if (window.confirm("Would you like to include upper case letters?")) {
      if (window.confirm("Would you like to include lower case letters?")) {
        // yes to all 3
        chars = numbers.concat(symbols, lowerCase, upperCase);
      } else {
        // no to lower, yes to symbols and upper
        chars = numbers.concat(symbols, upperCase);
      }
    } else {
        // no to upper
        if (window.confirm("Would you like to include lower case letters?")) {
        // no to upper, yes to lower and symbols
        chars = numbers.concat(symbols, lowerCase);
      } else {
        // no to lower and upper, yes to symbols
        chars = numbers.concat(symbols);
      }
    }
  } else {
    if (window.confirm("Would you like to include upper case letters?")) {
      if (window.confirm("Would you like to include lower case letters?")) {
      // no to symbols, yes to upper and lower
      chars = numbers.concat(lowerCase, upperCase);
      } else {
        // no to symbols and lowercase, only uppercase
      chars = numbers.concat(upperCase);
    }
  } else {
  if (window.confirm("Would you like to include lower case letters?")) {
    // no to symbolsand upper, only lower
    chars = numbers.concat(lowerCase);
    } else {
      // no to all
    chars = numbers;
    }
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
