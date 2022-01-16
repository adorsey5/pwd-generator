// ASSIGNMENT/STARTER CODE


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// User Input Variables to be confirmed
var confirmABClwrcase;
var confirmABCuprcase;
var confirmNumbers;
var confirmspecialChar;
var allcharacters=[];// all possible characters for generated password
var pwdLength; // the password length

// User input variable values (password prompts) for: lowercase, uppercase, numbers, and special characters
// lowercase characters
var abcLwrcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase characters
var abcUprcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// numeric characters
var numbers = [0,1,2,3,4,5,6,7,8,9];
// special characters
var specialChar = ["!", "#", "$", "%", "&","'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// User Password Criteria
function validate(){
  confirmABClwrcase = confirm("Will your password have lowercase letters?");
  confirmABCuprcase = confirm("Will your password have uppercase letters?");
  confirmNumbers = confirm("Will your password have numbers?");
  confirmspecialChar = confirm("Will your password have special characters?");
  return confirmABClwrcase || confirmABCuprcase || confirmNumbers || confirmspecialChar;
}

// Defined the function generatePassword, (which was missing in the starter code). Generate the password based on the prompts
function generatePassword(){
  console.log("You clicked the 'Generate Password' button"); // confirmed that the "Generate Password" button was clicked in the console log

 var isInputValid;
 
  // Prompts the user input
  pwdLength = parseInt(prompt("Password length must be between 8 and 128 characters. Please choose the length of your password \nMin.: 8 characters \nMax: 128 characters"));
  
  if (pwdLength >= 8 && pwdLength <= 128) {
    test = "TRUE!";
    isInputValid = validate();
  } else{
    test = "FALSE!";
    pwdLength = alert("Password must be between 8 and 128 characters. Please try again.");
    return ("Try secure password again");
  }

  while (!isInputValid) {
    alert ("Invalid input. Must choose at least one character option.");
    isInputValid = validate();
  }

  //  IF statements for password user inputs
  if (confirmABClwrcase){
    allcharacters = allcharacters.concat(abcLwrcase);
    }
    if (confirmABCuprcase){
    allcharacters = allcharacters.concat(abcUprcase);
    }
    if (confirmNumbers){
    allcharacters = allcharacters.concat(numbers);
    }
    if (confirmspecialChar){
    allcharacters = allcharacters.concat(specialChar);
    }

    // Created a function for random password 
  var pwdArray = [];

  for (var i = 0; i < pwdLength; i++) {
    var options = allcharacters[Math.floor(Math.random() * allcharacters.length)];
    pwdArray[i] = options; 
  }

  var finalPwd = pwdArray.join("");
  return finalPwd; // generated password on the page by returning a value for "Generate Password" button was clicked in the console log  
};

  // ASSIGNMENT/STARTER CODE
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
