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
// Setting Arrays ---- Maybe those functions?...// 
var userChoice = [];
var lower = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","U","R","S","T","U","V","W","X","Y","Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["^", "%", "$", "#", "@",">", "<", "?"];

finalPassword = "";


// console.log(lower, upper, number, symbol);

// Create generatePassword function - returns final password - all code should live inside this function

function generatePassword() 
{
    // Create a prompt to ask the length of the password and save it to a VAR (8-128 chars)
    var passwordLength = prompt
        ("How many characters do you want your password to be? Please enter a number between 8 and 128"); 
        if (passwordLength < 8 || passwordLength > 128) 
        {
            prompt ("Please enter a number between 8 and 128");
        } 

        // console.log(passwordLength)

    // Create a Confirm to ask the user if they want lowercase char
    var ranLower = confirm 
        ("Would you like to include lowercase letters?");
        if (ranLower) 
        {
            for (var i = 0; i < lower.length; i++)
            {
                userChoice.push(lower[i]);
                // console.log(lower);
            }
        }
    
    // Create a Confirm to ask the user if they want uppercase char  
    var ranUpper = confirm 
    ("Would you like to include uppercase letters?");
    if (ranUpper) 
    {
        for (var i = 0; i < upper.length; i++)
        {
            userChoice.push(upper[i]);
            // console.log(upper);
        }
    }

    // Create a Confirm to ask the user if they want numbers
   var ranNumber = confirm 
        ("Would you like to include numbers?");
        if (ranNumber) 
        {
            for (var i = 0; i < number.length; i++)
            {
                userChoice.push(number[i]);
                // console.log(number);
            }
        }
    // Create a Confirm to ask the user if they want special char
    var ranSymbol = confirm 
    ("Would you like to include symbols?");
    if (ranSymbol) 
    {
        for (var i = 0; i < symbol.length; i++)
        {
            userChoice.push(symbol[i]);
            // console.log(symbol);
        }
    }

    if (ranLower=== false && ranUpper=== false && ranNumber=== false && ranSymbol=== false)
    {
        alert("Please select at least one character set to form a password!");
    }

    // After prompts are completed - We need to create the password!
    for (var i = 0; i < passwordLength; i++)
    {   
        finalPassword += userChoice[Math.floor(Math.random() * userChoice.length)];
    }

    return finalPassword;
}
