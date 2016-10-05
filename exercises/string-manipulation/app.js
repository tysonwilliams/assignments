var readlineSync = require('readline-sync');
 
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName.toUpperCase() + '! Your name is ' + userName.length + " characters long!"); //Makes the input uppercase and reports back the number of characters in the input.

var userAge = readlineSync.question('May I have your age? ');
console.log(userName.concat(" is " + userAge + " years young!"));

var favColor = readlineSync.question('What is your favorite color? ', {
  hideEchoBack: true});
    console.log('Oh, ' + userName + ' loves ' + favColor + '!');

var favColorString = 'Oh, ' + userName + ' loves ' + favColor + '!';

var lastHalf = favColorString.substring(favColorString.length/2, favColorString.length);

console.log(lastHalf);

var something = readlineSync.question("Where would you like to start from? Choose a number from 0 - " + favColorString.length + ": ");

var newStory = favColorString.substring(something, favColorString.length);
console.log(newStory);