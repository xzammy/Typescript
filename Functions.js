//Creating a simple function
var ourFirstFunction = function () {
    console.log("Function here");
}

//Call a function
ourFirstFunction();

//Passing Arguments into Functions
var sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
}

//Hello Cameron
sayHelloTo("Cameron");

//Draw Animals

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + "=^.^=");
    }
}


drawCats(5)
//prints out 0~4, and the cat

//Passing Multiple Arguments to a Function
function argue(argument1, argument2) {
    console.log("My first argument was:" + argument1);
    console.log("My second argument was:" + argument2);
}

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
}

printMultipleTimes(4, "^_^");

//0 ^_^
//1 ^_^
//2 ^_^
//3 ^_^

//Returning values from Functions

5 + Math.floor(1.2345);
//6

//Create a function that returns a value

var double = function (number) {
    return number * 2;
};

double(3);
//returns 6

double(double(3));
//12 --> (3*2)=6, 6*2=12

//Using functions to simplify code

//A function to pick a random word
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
}

var randomWords = ["Planet", "Worm", "Flower", "Technology"];

pickRandomWord(randomWords);

//Random Complement Generator
//Cause you only need a function to generate/pick words from arrays, wrap it into a function

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Nice", " Interesting", "Wonderful"];
var randomWords = ["Rose", "Carnation", "Lily"];

//Join all the random strings into a sentence:

var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!!!";

console.log(randomString);




//There are two types of ways to write a function. The longhand way and the shorthand way.
//In technical terms, the longhand version is known as a function expression.
//The shorthand version is known as a function declaration.


var double = function(number){
    return number *2;
};

function double(number){
    return number*2;
}
