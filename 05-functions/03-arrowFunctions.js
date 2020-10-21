//* differnt synax to write function, just a more condensed way of writing a function


//* CONCISE BODY 
let hi = () => console.log('hi');
hi();


//* BLOCK BODY^same thing different syntax
let hi = () => {
    console.log('hi');
}
 hi();


//* CONCISE VS BLOCK
let apples = x => console.log(`There are ${x} apples`);
apples(10);

let apples = x=> {
    console.log(`There are ${x} apples.`)
}
apples(8);

