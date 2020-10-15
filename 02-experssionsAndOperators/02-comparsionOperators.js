//*EQUAL
console.log('3' == 3);
console.log(3==3);
console.log('3'=='3');
//* STRICT EQUAL 
console.log('3' ===3);
//* because of the '' they are different, first one a string second one a number
console.log(3===3);

//*NOT EQUAL 
console.log('3' != 3);

//* STRICT NOT EQUAL
console.log('3' !==3)

//* GREATER THAN 
3>2;

//* LESS THAN 
2<3;

//* GREATER THAN OR EQUAL TOO
3>=2;

//* LESS THAN OR EQUAL TOO
2<=3;
//* type the same way you say it 

//*AND 
2&&3

//*OR
2||3
//*^- these are true or false 

console.log(3>2>=1);
console.log(3>2);
console.log(true>1);
let studentName = "pAuL";
let capName;

let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon'];

for (let cat in catArray) {
   console.log(cat)
}