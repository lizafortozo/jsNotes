//* object string
let student = {
     name:"Liza",
     awesome: false, 
     degree: "javacript",
     week:1
}

//* FOR IN LOOP 
for (item in student){
    console.log(item); // this referes to the keys on the object 
    console.log(student[item]); // this referes to the values of the object
}
//* array
let cats = ['tabby','shorthair','burmese']
for (cat in cats){
    console.log(cat); // this return numbers because the index numbers are the "keys" of the array
    console.log(cats[cat]); // this returns the value that is in the index number 
}

/* Challenge 
***************
 -write a for in loop that captilizes the first letter of the name, and lowercases the rest of the name
 */

let name ="lIzA"
for (letter in name){
    let letter = name[0].toUpperCase
    console.log(letter)
}
