let x=12 

function scope(){
    let x=33
    console.log(x);
}

scope(); //* <- this is what equals in {}
console.log(x); //* this is equals the whole function

let y =12;
function scope() {
    y=33;
    console.log(y);
}
scope();
console.log(y);


//* VAR vs LET

var x = 12;

function varTest() {
    var x= 33;
    if (1==1) {
        varx=45;
        console.log(x)
    }
    console.log(x);
}
varTest()
console.log(x);


let x=12
function letTest() {
    var x = 33
    if (1 == 1) { 
        let x = 45;
        console.log(x)
    }
    console.log(x)           
}

letTest();
console.log(x);                                                                                        
 //*^ answer
 45 this one is middle {}
 33 this one the first {}
 12 orgrinal x
//*

