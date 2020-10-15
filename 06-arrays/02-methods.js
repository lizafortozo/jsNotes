let food= [ 'Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

food.push('Pizza');
console.log('push:', food); //* adds pizza to end of array

food.splice(1, 1, 'Bananas'); //* removes shrimp and adds banana (position, what to remove, what to add in location)
console.log('splice:', food)

food.splice(2, 0, 'sweet potatoe'); //* adds sweet potatoe in posotion 2 but doesnt remove anything
console.log('splice2:', food)

//*food.splice(0, 3, 'Turkey');
//*console.log('splice3:', food)

food.pop(); //*<-- pop removes the last item in the array 
console.log('pop:', food);

food.shift(); //*<-- shift removes the first item in the array
console.log('shift:', food);

food.unshift('Popcorn', 'steak');//*<-- unshift adds x to beginninng of array
console.log('unshift:', food);

//* This is to chain methods togther (arraymethods not the best to chain with because its mutating the array )
let dogs= ['Shiba Inu', 'Greyhound', 'shihTzu', 'German Shepard'];
//* array-->console.log(dogs.push('bull terrier').unshift('great dane', 'husky'))
let newArr = dogs.push('bullterrier');//*<--pushed to the bottom of array
let newArr2 = dogs.unshift('great dane', 'husky') //* <-- this is moved to the top of array 

console.log(newArr2); //*<-- this equals the length 
console.log(dogs); //*<--- this gives tou the whole final array

//* regualr for loop
for (i=0; i<dogs.length; i++) {
    console.log(dogs[i]);
}
//* forEach()
dogs.forEach(dog => console.log(dog))

dogs.forEach(function(dog) {
    console.log(dog)
})

dogs.forEach((dog, index) => {
    console.log(dog)
    console.log(index)
})

let moives= ['avengers', 'princess dairies', 'walle', 'incredibles'];

moives.forEach(moives => console.log(moives));

moives.push('civil war');
console.log('push:', moives)

moives.splice(1, 1, 'mulan');
console.log('splice:', moives)


let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array === true){//* <-- you can also write it like "if (arr instance array) {" 
    let revArr = arr.reverse()
    revArr.forEach(num => console.log(num))
} else { //*<-- second part of if statement, false part
    console.log('not an array')
}
//* falsey value    truthy value
//*    " " false    "string" true
//*    0 false      1 true

console.log(typeof 2001) //*<-- falsey value
console.log(typeof '2001') //* <--- truthy value  

console.log(typeof true)
console.log(typeof 'true')
