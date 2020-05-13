// 1. Create an object called me with 2 properties: name and age. Set the name to be your name and the age to be your age.
// 2. Use the increment operator to increase the value of your age once.
// 3. Add another property called hobbies and set the value to be an array of strings that represent some of your hobbies, make sure the array has at least 3 values.
// 5. Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. 
// Eg. "My hobbies are painting, drawing and exercising"
// 4. Add another property called Pets which should be an array of objects that represent your pets (make some up if you don't have any). 
// Each pet should have 3 properties: name, age and species.

let me = {  //Question 1 
    name: "Stephanie",
    age: 10,
    hobbies: [  //  Question 3 
        "Video Games", 
        "Crafts", 
        "Walking"
    ],
    pets: [ //question 5 
        {
        name: "Oliver",
        age: 3,
        species: "Dog"
    }, {
        name: "Chloe",
        age: 2,
        species: "Dog"
        }, {
        name: "Zelda",
        age: 9,
        species: "Cat"
        }
    ]
};

console.log(me.age);

me.age = ++me.age; //Question 2 
// me.age++; //Question 2 answered

console.log(me.age);

console.log("My hobbies are: " + me.hobbies[0] + ", " + me.hobbies[1] + ", " + me.hobbies[2]) //Question 4


for (let i = 0; i < me.pets.length; i++){ //Question 5 printed
    console.log(me.pets[i])
}

// me.hobbies = [ //Question 3 answered -  adding it later
//     "Skydiving",
//     "Coding",
//     "Eating",
// ]

//Question 4 answered
// me.pets = [
//     {
//         name: "Rex",
//         age: 6,
//         species: "Dog"
//     },
//     {
//         name: "Felix",
//         age: 3,
//         species: "Cat"
//     }
// ]

// for(let i = 0; i < me.pets.length; i++)
//     let pet = me.pets[i];
//     console.log(`My ${pet.species} is ${pet.age} years old. Their name is ${pet.name}`)


//Question 5 Answered
// let hobbies = "My hobbies are ";
// for(let i =0; i < me.hobbies.length; i++){
//     let hobby = me.hobbies[i];
//     hobbies += hobby;
//     if(i == me.hobbies.length - 2){
//         hobbies += " and ";
//     }else if(i == me.hobbies.length - 1){

//     }else {
//     hobbies =+ ", ";
//     }
// }
// console.log(hobbies);