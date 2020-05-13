// 1. Create a function that takes 2 arguments that are numbers and returns the sum of those numbers.
// 2. Create a function that takes 2 arguments that are numbers and returns the largest of those numbers.
// 3. Create a function that takes 1 argument that is an array and prints each of the elements in that array to the console.
// 5. Create a function that takes 1 argument that is an array of numbers and that returns the same array sorted in ascending order.
// 4. Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in.


function sumOfNumbers(num1, num2) //Question 1
{
    return num1 + num2;
}

function largestNumber(num1, num2) // Question 2
{
    if(num1 > num2){
        return num1;
    } else
        return num2;
}

function printArray (list)// Question 3
{
    for (let i = 0; i < list.length; i++){
        console.log(list[i]);
}
}
let list = ["Banana", "Apple", "Pear", "Kiwi Fruit"];
printArray(list)



function sortArray (list) // Question 4
{
    list.sort();
    for (let i = 0; i < list.length; i++){
        console.log(list[i]);
}
}
sortArray(list);

// Question 5

let people = [
    {
        name: "Jane",
        age: 25
    },
    {
        name: "Bob",
        age: 40
    }
]

// function getOldest(peopleArray){ //my attempt at question 5
//     //for(let i = 0; i < peopleArray.length; i++)
//     for (let i = 0; i < peopleArray.length; i++){
//         console.log(peopleArray[i]);


// }
// }
// getOldest(people);


//Answer to question 1
// function addNumbers(num1, num2){
//     return num1 + num2;
// }

//Answer to question 2
// function getMaxNumber(num1, num2){
//     if (num1 > num2){
//     return num1;
//     }
//     return num2;
// }

//Answer to question 3
// function myArrayPrinter(myArray){
//     for(let i = 0; i < myArray.length; i++);{
//         let myItem = myArray[i];
//         console.log(myItem);
//     }
// }
// let names = [
//     "Jim",
//     "Bob",
//     "Luke"
// ];

// myArrayPrinter(names)

//Answer to Question 4
// function createPerson(name, age){
//     return {
//         name: name,
//         age: age
//     }
// }

// let luke = createPerson("Luke", 23);

//Answer to Question 5
// let oldestCurrent;
// for (let i = 0; i < people.length; i++) { // each time we go through the array, we will assign the highest age in that sweep to oldestCurrent and compare it to the new value of person
//     let person = people[i];
//     if(oldestCurrent){
//         if(person.age > oldestCurrent.age){
//             oldestCurrent = person;
//         }
//     }else {
//         oldestCurrent = person;
//     }
// }
// console.log(oldestCurrent)

// making it a function
function getOldest(array){
    let oldestCurrent = array[0];
    for (let i= 0; i < array.length; i++){
        let person = array[i];
        if (person.age > oldestCurrent.age){
            oldestCurrent = person;
        } else {
            oldestCurrent = person;
        }
    return oldestCurrent.name;
    }
}

console.log(getOldest(people));