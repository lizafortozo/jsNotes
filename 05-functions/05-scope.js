let x=12 //* declare and intialzied x

function scope(){
    let x=33 //* here we creating a new variable that happens to have the same name as above
    console.log(x);
}

scope(); //* <- this is what equals in {}
console.log(x); //* this is equals the whole function

let y =12; //* here we declare and initalize y to 12
function scope() {
    y=33; //* here i am changing the y variable to 33
    console.log(y);
}
scope();
console.log(y);


//* VAR vs LET
//Var is scoped to the nearest function block
//Let is scoped to the nearest inclosing block

var x = 12;

function varTest() {
    var x= 33;
    if (1==1) {
        var x=45;
        console.log(x);
    }
    console.log(x);
}
varTest()
console.log(x);

// LET EXAMPLE

let x=12
function letTest() { // <-function block
    var x = 33
    if (1 == 1) { // <- enclosed blocks
        let x = 45;
        console.log(x)// this returns what was assigned in enclosed blocks
    }
    console.log(x)// this returns what was assigned in function blocks          
}

letTest();
console.log(x);// this returns what was assign on a global level                                                                                
 /*^ answer
 45 this one is middle {}
 33 this one the first {}
 12 orginal x
*/

