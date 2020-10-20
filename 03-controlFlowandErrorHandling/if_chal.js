//* CHALLENGE
// ************
//     Bronze:
//     Write an if else statement that checks your name;
//     If it is your name, console log '<name>'
//     If the name does not match, console.log 'Hello, what is your name?'

//     Silver:
//     If It is your name, console log 'Hello, my name is <name>'

//     Gold:
//     If it is not your name, console log 'Hello, is your name <name here> ?'



let name="Liza";

if (name=="Liza") {
    console.log("Hello my is", name);
} else {
    console.log("Hello, what is your name?");
};

if (name=="Liza") {
    console.log("Hello, my name is", name);
}else {
    console.log("Hello, is your name", name + "!");

}

//* CHALLENGE TWO
// ************
//     Use this string: let name = 'zAchARy';

//*     Bronze:
//     Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
//     If it is not console.log 'hey, this isn't written correctly'

let name = 'zAcHaRy';
// console.log(name.charAt(0));//<- this is the same way to get z
// console.log(name[0]); //<-- this get you the value of the first index "z"
if (name[0] == name[0].toUpperCase()) {
    console.log(name);
} else{
    console.log('hey, this isnt written correctly');
}

//*     Silver:
//     If the first letter of a string is uppercase, only console.log that letter
//     if it is not, console.log the rest of the string Without the first letter, and change them to lowercase

let name = 'zAchARy';
if (name[0] == name[0].toUpperCase()) {
     console.log(name[0])
 } else {
     console.log(name.slice(1).toLowerCase());
     };

//*    Gold:
//     If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
//     If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase

let name = 'zAchARy';

if (name[0] == name[0].toUpperCase()) {
    let isUppercase = name[0] + name.slice(1).toLowerCase();
    console.log('console log #1:', isUppercase);
} else { //* this shows you a different way to do it
    let notUppercase = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log('console log #2:', notUppercase)
}

//*Objects: Dot notation 
let student = { // STUDENT IS THE OBJECT
    name : "Justin",
    grade : 12
};
//*Object:Array (this is a specific type of object)
let names = [ // NAMES IS THE OBJECT 
    "Justin",
    "Adam",
    "Amy"
]
//* Ways to access an object
 console.log(student.name);// dot notation use with objects always 
 console.log(student["name"]);// This is the same as ^ but square braclet notation DONT USE SLOPPY

//* Ways of accessing an array
 console.log(names[2])

//* EXTRA EXAMPLE
let fruit = ['apple', 'orange']
console.log(apple);
console.log(names.slice(1,3))
