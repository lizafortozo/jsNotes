//* PARAMETERS this is what goes inside of the function (____)<-parameter you can name it whatever you want

function hi (name) {
    console.log(`Hi ${name}`)//<-string interperation  
}
hi();
//now lets add parameters
hi('Liza');
hi('Justin');
hi('Max');

function addIt (x, y) {
    console.log (x+y);
}
addIt(7,8);
addIt(2,6);
addIt(9,2);

function hello(first,last) {
    let fullName = first +' ' + last; //<- here you are declaring the variable of full name and adding a space between first and last 
    console.log(`Hello, my name is ${fullName}.`)
}
hello('Liza', 'Fortozo');
