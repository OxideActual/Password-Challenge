// Assignment code here

function generatePassword() {
  console.log("button works!")

var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!", "@", "#", "&", "*", "+"];
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/*const characterCodes = Array.from(Array(26)).map((_, i) => i +97);
const lowercaseLetters = characterCodes.map(code => String.fromCharCode(code));
const uppercaseLetters = lowercaseLetters.map(letter => letter.toUpperCase());
*/
var possibleCharacters = [];
// Prompts

numberofCharacters = prompt("How many characters would you like your password to be? Select between 8 and 128");
  if (numberofCharacters < 8 || numberofCharacters > 128) {
    return "Please choose a valid number of characters!"
  } else if (isNaN(numberofCharacters)) {
    numberofCharacters = prompt("please enter a valid number!")
  } else {
     alert("Your password will be " + numberofCharacters + " characters long!");
  }
hasLowercase = confirm("Do you want lowercase letters?"); 
  if(hasLowercase) {
    alert("Your password will have lowercase letters!")
  } 

hasUppercase = confirm("Do you want uppercase letters?"); 
  if(hasUppercase) {
    alert("Your password will have uppercase letters!")
  } 

hasNumbers = confirm("Do you want numbers?")
  if (hasNumbers) {
    alert("Your password will have numbers!");
  } 

hasSpecialCharacters = confirm("Do you want special characters?");
  if(hasSpecialCharacters) {
    alert("Your password will have special characters!");
  } 

if (hasLowercase, hasUppercase, hasNumbers, hasSpecialCharacters === false) {
  return "Please select at least one character type to create a password"
}
if (hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowercaseLetters);
}
if (hasUppercase) {
  possibleCharacters = possibleCharacters.concat(uppercaseLetters);
}
if (hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(symbols);
}

// pick random cards out of new pool for length of password
let finalPassword = ""
for (let i = 0; i < numberofCharacters; i++) {
  let rng =[Math.floor(Math.random() * possibleCharacters.length)];
finalPassword += possibleCharacters[rng];
}
return finalPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
