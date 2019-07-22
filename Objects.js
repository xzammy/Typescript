var cat = {
    //The key, which is always a string|The value, which can be of any type
    //You can leave out the quotes, cause Javascript will always know the keys will always be strings.
    "legs": 3,
    "name": "Domestic Short",
    "color": "TortoiseShell"
};

//or you could add them like this

var dog = {};
dog.legs = 2;
dog.name = "Lucky";
dog.color = "White";

dog.isFat;
//undefined

//Combining Arrays and Objects
//For example, an array of dinosaur objects might look like this

var dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
];

//To get all information about any dinosaur...
dinosaurs[0];
//Prints out the entire line of 23.

//To get something specific
//Dot notation can only be used with objects
dinosaurs[0].name;
dinosaurs[0]["name"];

//An array of  things

var pencil = { name: "OfficeMax", color:"Yellow", luckyNumbers:[2,4,8,16]};
var eraser = {name: "Rubber", color:"White",luckyNumbers:[3,9,40]};

var supplies = [pencil, eraser];

supplies[0].luckyNumbers[1];
//4

supplies[0].luckyNumbers;
//[2,4,8,16]

supplies[0];
//Object{name:"OfficeMax", color: "Yellow", luckyNumbers: Array[4]}



