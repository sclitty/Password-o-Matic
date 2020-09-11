// I did a code along with a video from "Traversy Media" //
// https://www.youtube.com/watch?v=duNmhKgtcsI //
// Learned a lot from that tutorial and understood better as I coded the JavaScript //
// This is not my code (I did type it, though) but I'll leave it in here so you can swap .js links in the html and see the difference! (update HTML and CSS too, notes provided!) //


//  DOM ELEMENTS 
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate event listen
generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  // Testing to see if checked boxes were registering 
  // console.log(hasUpper, hasLower, hasNumber, hasSymbol);

  passwordEl.innerText = generatePassword(
    hasUpper, 
    hasLower, 
    hasNumber, 
    hasSymbol, 
    length
  );
});

function generatePassword(upper, lower, number, symbol, length) 
{
  //  1. Password var
  //  2. Filter out unchecked types 
  //  3. Loop over length call random-func for each type
  //  4. Add final password to final variable and return 

  var generatedPassword = "";

  const typesCount = upper + lower + number + symbol;

  // console.log('typesCount: ', typesCount);

  const typesArr = [{upper}, {lower}, {number}, {symbol}].filter 
  (item => Object.values(item)[0]);

  // console.log('typeArr: ', typesArr);

  if (typesCount === 0) {
    return '';
  }

  for (var i = 0; i < length; i+= typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      // console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  console.log(generatedPassword);
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;

}

// Random Char Functions - Using ASCII CharCode - Looks much cleaner than using large arrays!
function getRandomLower (){
  return String.fromCharCode(Math.floor(Math.random()*26) + 97);
}

function getRandomUpper (){
  return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomNumber (){
  return String.fromCharCode(Math.floor(Math.random()*10) + 48);
}

function getRandomSymbol (){
  const symbols= '!@$%^&*+}{:(;)<>';
  return symbols[Math.floor(Math.random() * symbols.length)]
} 

// Testing to see if getRandom... func works properly 
// console.log(getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol());
