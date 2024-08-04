var greet: string = "Greetings! "; 
var welcome_message: string = "Welcome to Educative"; 
console.log(greet + welcome_message); 


//Different ways to declare a variable in TS

//var
function varFunction() {
    var x = "111";
    if (true) {
        var x = "999";
    }
    // Outputs 999
    console.log(x);
}
varFunction();


//When  strict: true in the tsconfig.json file...
var x;
function varStrictFunction() {
    var x = "111";
}
//this will show, otherwise it will compile and 
//undefined will be displayed
console.log(x);

//let
//let setting the lifespan of the variable at the block where it was declared.
function letFunction() {
    let y = "111";
    if (true) {
        let x = 999;
    }
    console.log(y); 
}
letFunction();
//This does not work since it's outside of the scope which it was declared.
//console.log(y); 


//const
//const can only be initialized once: in its declaration
const testReassign = "111";
//This will not compile and intellisense will show an error when you try to reassign it
//testReassign = "this won't compile"; 


//Although you can't reassign the const itself, you can reassign it's members, if they're public
const user1 = { id: 1, name: "MyName1" };
const user2 = { id: 2, name: "MyName2" };

user1.name = user2.name; // Legit!
user1.id = 1000; // Legit !

//The following works because even though the list values change, the reference to the list does not. 
//The same holds true with an object. You can change values inside an object, but not assign a new object to the variable. 
function constFunction() {
    const myList = [1, 2, 3];
    myList.push(4);
    console.log(myList);
}
constFunction();

//const is the preferred way to declare a variable. It is the most strict and ensures that the variable will not change in the future.
//specifying the type happens after naming the variable with the help of colons.
var varName1: number;
let varName2: string;
const varName3: boolean = true;

