// Arrays for each password prompt
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~", "\""];

// Establishing global variables
var baseString = "";
var userPassLength = 1;
masterArray = [];

const uponClick = document.getElementById("generate");
uponClick.addEventListener("click", function () {generatePassword()});


//debugger;

//function that calls when user clicks "generate password"
function generatePassword() {
  //reset variables on each click
  baseString = "";
  masterArray = [];

  //generate password length
  var userPassLength = window.prompt("How long do you want your password to be?")
    userPassLength = parseInt(userPassLength);
    if (userPassLength < 8 || userPassLength > 128) {
      window.alert("Your password must be between 8 and 128 characters long. Please try again!");
      askLength();
    }
  console.log(userPassLength);

  //call function for password criteria
  passCriteria();

  //for loop that rotates through the masterArray for a number of times equal to the user's desired password length
  for (i = 0; i < userPassLength; i++) {
    addString();
  }

  //deliver password to user
  insertText(baseString);
}

//function that creates the random string that will make up the password
function addString () {
  var randomInt = masterArray [Math.floor(Math.random() * masterArray.length)];
  baseString = (baseString + randomInt);
  return baseString;
}

//function that asks user what kind of characters they want in their password and merges the arrays based on the user's choices
function passCriteria () {
  lowerCaseConfirm = window.confirm("Would you like to include lower case letters?");
  if (lowerCaseConfirm) {
    masterArray = masterArray.concat(lowerCase);
  }
  upperCaseConfirm = window.confirm("Would you like to include upper case letters?");
  if (upperCaseConfirm) {
    masterArray = masterArray.concat(upperCase);
  }
  numberConfirm = window.confirm("Would you like to include numbers?");
  if (numberConfirm) {
    masterArray = masterArray.concat(numbers)
  }
  symbolConfirm = window.confirm("Would you like to include symbols?");
  if (symbolConfirm) {
    masterArray = masterArray.concat(symbols)
  }
  if (!lowerCaseConfirm && !upperCaseConfirm && !numberConfirm && !symbolConfirm) {
    window.alert("You must select at least one criteria. Please try again");
    passCriteria();
  }
}

//function that feeds the password to the textarea on the user's screen
function insertText(text){
  document.getElementById("password").innerHTML = text;
}
