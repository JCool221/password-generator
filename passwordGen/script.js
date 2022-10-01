// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '`~!@#$%^&*()_-+=/?.>,<;:'
var chars = numbers;

function writePassword() {
  var test = Number(window.prompt("Choose a password length between 8 and 128 characters", "16"));
  var pwLength = test+1;
  if (pwLength < 8 || pwLength > 128) {
    window.confirm("Out of bounds");
    location.reload();
  } else {
    if (window.confirm("Would you like to include numbers?")) { 
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
      } 
    } else {
      if (window.confirm("Would you like to include special characters?")) {
        if (window.confirm("Would you like to include upper case letters?")) {
          if (window.confirm("Would you like to include lower case letters?")) {
            // yes to all 3
            chars = symbols.concat(lowerCase, upperCase);
          } else {         
            // no to lower, yes to symbols and upper
            chars = symbols.concat(upperCase);
          }
        } else {
            // no to upper
            if (window.confirm("Would you like to include lower case letters?")) {
            // no to upper, yes to lower and symbols
            chars = symbols.concat(lowerCase);
          } else {
            // no to lower and upper, yes to symbols
            chars = symbols;
          }
        } 
      } else {
          if (window.confirm("Would you like to include upper case letters?")) {
            if (window.confirm("Would you like to include lower case letters?")) {
            // no to symbols, yes to upper and lower
            chars = lowerCase.concat(upperCase);
            } else {
          // no to symbols and lowercase, only uppercase
          chars = upperCase;
          }
        } else {
          if (window.confirm("Would you like to include lower case letters?")) {
          // no to symbolsand upper, only lower
          chars = lowerCase;
          } else {
            // no to all
            window.confirm("no Selections made");
            location.reload();       
          }
        }
      } 
    }
  }
// create a random sequence out of the concatenated strings and return it as var passwd
function generatePassword() {
    var passwd = '';
    for (i=1; i<pwLength; i++) {
      var c = Math.floor(Math.random()*chars.length + 1);
      passwd += chars.charAt(c)
    }
  
    return passwd;
    console.log(chars);
  
  }
// Write password to the #password input
      var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
