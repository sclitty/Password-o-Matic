// Making a function to choose a random character from an array //

function pickRandom(ranArray) {
    return ranArray[Math.floor(Math.random() * ranArray.length)];
}

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

// Setting Arrays // 

var lowerBucket = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var upperBucket = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","U","R","S","T","U","V","W","X","Y","Z"];
var numberBucket = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolBucket = ["^", "%", "$", "#", "@",">", "<", "?"];

finalPassword = "";

// Create generatePassword function - returns final password - all code should live inside this function //

function generatePassword() {
    // 
    var passwordLength = prompt ("How many characters do you want your password to be? Please enter a number between 8 and 128"); 
    {
        if (passwordLength < 8 || passwordLength > 128) 

        prompt ("Please enter a number between 8 and 128");
    } 
    // User selected character types is pushed into a bucket our pickRandom func can choose random chars from // 
    var userBucket = []

    if (confirm("Would you like lowercase letters?")) {
      userBucket.push(lowerBucket)
    }
    
    if (confirm("Would you like uppercase letters?")) {
      userBucket.push(upperBucket)
    }
    
    if (confirm("Would you like numbers?")) {
      userBucket.push(numberBucket)
    }
    
    if (confirm("Would you like to include symbols?")) {
      userBucket.push(symbolBucket)
    }
    
    var finalPassword = ""

    // Tasking selected buckets and running though pickRandom func to get our finalPassword
    while (finalPassword.length < passwordLength) {
      for (var i = 0; i < userBucket.length; i++) {
        var typesBucket = userBucket[i]
        finalPassword += pickRandom(typesBucket);
      }
    }
    
    finalPassword = finalPassword.slice(0, passwordLength)

    console.log(finalPassword);
    console.log(shuffle(finalPassword))

    return finalPassword;

}

// We should shuffle the finalPassword for extra security //

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

