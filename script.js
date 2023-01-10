// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Variable Declaration 
var pwdLength;
var specialCharacter;
var numericCharacter;
var upperCase;
var lowerCase;

// Function to prompt user for password options
function getPasswordOptions() {
  pwdLength = parseInt(prompt("Length of password"));
  if (isNaN(pwdLength) !== false) {
    alert("Plese enter only number");
  if(pwdLength < 10 || pwdLength > 64){
    alert("Password between 10 and 64")
  } else {
     lowerCase = confirm('Lower case?');
     upperCase = confirm('Upper case?');
     numericCharacter = confirm('Numeric?');
     specialCharacter = confirm('Special character?');
     if(lowerCase === false && upperCase === false && numericCharacter == false && specialCharacter === false) {
      alert('You must select at lest 1 character type');
      return;
     }
     var passwordOptions =
    {
      pwdLength: pwdLength,
      lowerCase: lowerCase,
      upperCase: upperCase,
      numericCharacter: numericCharacter,
      specialCharacter: specialCharacter 
    };
    return passwordOptions;  
    }
   
}

//console.log(getPasswordOptions());
// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}



// Function to generate password with user input
function generatePassword() {
   var options = getPasswordOptions();
   var result = [];
   var possibleChars = [];
   var guaranteedChars = [];
 
   if(options.lowerCase)
   {
    possibleChars = possibleChars.concat(lowerCasedCharacters);
    guaranteedChars.push(getRandom(lowerCasedCharacters));
   }
  
   if(options.upperCase){
    possibleChars = possibleChars.concat(upperCasedCharacters);
    guaranteedChars.push(getRandom(upperCasedCharacters));
   }

   if(options.numericCharacter) {
    possibleChars = possibleChars.concat(numericCharacters);
    guaranteedChars.push(getRandom(numericCharacters));
   } 

   if(options.specialCharacter) {
    possibleChars = possibleChars.concat(specialCharacters);
    guaranteedChars.push(getRandom(specialCharacters));
   }


   for (let i = 0; i < options.pwdLength; i++) {
    var possibleChars = getRandom(possibleChars);
    result.push(possibleChars);
   }
   for (let i = 0; i < guaranteedChars.length; i++) {
    result[i] = guaranteedChars[i];
}
return result.join("");
}





// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
