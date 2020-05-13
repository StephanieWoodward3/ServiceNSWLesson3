let myDog = { //declares the object myDog
    name: "Rex",
    age: 6
};

console.log(myDog.name)
myDog.name = "Buffy"; //changes the value stored in myDog.name
console.log(myDog.name);
myDog.owner = "Luke" //adds new property to the object of myDog
console.log(myDog);
console.log(myDog["age"]); // prints out the value saved under age in the object


let propertyIWantToLog = "age"; //if a user inputs that they want to obtain "age" save the input as a variable
console.log(myDog[propertyIWantToLog]); //outputs the variable of the userinput from the object




//ways to Define an Object
// let myDog = {}
// let myDog = new Object();
// let myDog = {name: "Rex", age: 6};

//let myArray = new Array();


let people = [
    {
        name: "Luke",
        age: 12,
        pets: [
            {
                type: "dog",
                name: "Rex"
            },
            {
                type: "Cat",
                name: "TC"
            }
        ]
    }
]