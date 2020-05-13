function addNumbers(num1, num2){
    console.log(num1 + num2);
    return num1 + num2;
}
let newNumber = addNumbers(12, 19);

addNumbers(12, 19);

function sayHello(){ //defining a function
    console.log("Hello");
}

sayHello(); //known as calling a function

function multiplyByTwo(num){
    return num * 2;
}
console.log(multiplyByTwo(10));


function getMe(){
    return {
        firstName: "Luke",
        lastName: "Parker",
        getFullName: function(){
            return `${this.firstName} ${this.lastName}` //use the 'this' keyword to access the properties of an object in a function instead of the name of the object
        }
    }
        return me;
}   
let someoneElse = getMe();
console.log(soneoneElse.getFullName())