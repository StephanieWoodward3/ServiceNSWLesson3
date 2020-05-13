//Create a function that takes an 2 arguments, an array of objects and a string character (eg. "a" or "b", etc.). 
//The function should return all the objects in the array where the property name of that object contains the string character.


let people = [
    {
        name: "Jane",
        age: 60
    },
    {
        name: "Bob",
        age: 40
    },
    {
        name: "Steve",
        age: 25
    },
    {
        name: "Paul",
        age: 30
    },
    {
        name: "Thomas",
        age: 20
    },
];

function searchByCharacter (array, searchTerm){
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        
        let found = false;
        for(let i= 0; i < element.name.length; i++){
            let letter = element.name[i];
            if(letter == searchTerm){
                found = true;
            }
        }

        if(found){
            resultArray.push(element);
        } 
    }
    return resultArray; 
}
    console.log(searchByCharacter(people, "a"))