// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// TODO: Create generatePassword function - returns final password - all code should live inside this function

// TODO: Create a prompt to ask the length of the password and save it to a VAR (8-128 chars)

// TODO: Create a Confirm to ask the user if they want lowercase char
// TODO: Create a Confirm to ask the user if they want uppercase char
// TODO: Create a Confirm to ask the user if they want numbers
// TODO: Create a Confirm to ask the user if they want special char

// TODO: After prompts are completed - We need to create the password!

// TODO: Create arrays with all needed chars
// TODO: Create a new VAR that holds all the chosen char sets
// TODO: Create a Conditional - saves selected char sets from confirms to our chosen char VAR  (if - statement)

// TODO: We have to select the specific number of char randomly from our final collection based on the user specified length

// I can use Math.floor(Math.random()) to get a random number
// for loop that runs for specified prompt value for length [for(var i=0; i<"user specified length"; i++){"logic goes here"}]

// TODO: Inside FOR loop push each char into the final char var

// TODO: Add validations to make sure at least one type of char is selected and alert the user if there are no types being selected
// TODO: Add validations to the length to make sure it is between 8 and 128 chars 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
