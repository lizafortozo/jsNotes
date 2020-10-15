function hi (name) {
    console.log(`Hi ${name}`)
}

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
    let fullName = first +' ' + last; //*<- variable inside the function
    console.log(`Hello, my name is ${fullName}.`)
}
hello('Liza', 'Fortozo');
