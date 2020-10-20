//* THESE ARE REGULAR FOR LOOPS
let i = 7;
 
for (i=0; i<10; i++){
    console.log(i);
}

for (i=2; i<20; i+=2){
    console.log(i);
}


console.log('global variable:', i);


for (i=10; i>-1; i--){
    console.log(i);
}

for (i= 0; i >=-24; i-=2){
    console.log(i);
}

let name = "Liza Fortozo"
for (i=0; i < name.length; i++){
    if (name[i]!= " "){ //* this deletes the space betwen a F
        console.log(name[i]);
    }
}

/* Easy way to do above^
//*THIS IS A FOR OF LOOP 
(1)                           (2)
for (<whatever word you want> of <name of the collection>)
1: FOR- declaring the loop
2: OF- this loop function that decalres everything in a collection 
*/
for (letter of name){
    console(letter);
}

let fruits = ['apple','bananas', 'kiwi'] //* THIS is a colleciton 
for (fruit of fruits){ //FOR OF LOOP 
    console.log(fruit);
}

/*Challenege 
*************
-make a for loop where you add up all 
the number from 1-50 (should equal 1275)
*/

let sum = 0; //* somewhere to store total
 
for (i =1; i <= 50; i++) {
    sum += i;
}
console.log(sum);