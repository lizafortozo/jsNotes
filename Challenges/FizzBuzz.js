//* IF ELES 
let FB= 30;

if(FB % 3 ==0 && FB % 5 == 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 ==0) {
    console.log('Buzz');
} else if (FB % 3==0) {
    console.log('Fizz');
} else { 
    console.log(FB)
}


//* SWITCH statments
let FB= 6;

switch (true) {
    case(FB % 15==0):
        console.log('Fizz Buzz');
        break;
    case ( FB % 5 ==0):
        console.log('Buzz');
        break;
    case (FB % 3 ==0):
        console.log('Fizz');
        break;
}

//* TERNARY
let FB =30;

(FB % 15 ==0) ? console.log('Fizz Buzz')
        :(FB % 5 ==0) ? console.log('Buzz')
            :(FB % 3==0) ? console.log('Fizz')
                :console.log(FB)


//* For LOOP with if eles
for (let i = 0; i <=100; i++){//* or >101
    if ( i % 15=== 0){
        console.log("Fizz Buzz")
    } else if ( i% 3 ===0){
        console.log('Fizz')
    } else if ( i % 5 === 0){
        console.log('Buzz')
     } else {
         console.log(i)
     }
}

//* FOR LOOP SWITCH ^same results

for (let FB=0; FB<= 100; FB++) {
    switch (true) {
        case ( FB % 3 === 0 && FB % 5 ===0):
            console.log('FizzBuzz');
            break;
        case (FB % 5 ===0):
            console.log('Buzz');
            break;
        case (FB % 3 === 0):
            console.log('Fizz')
            break;
        default:
            console.log(FB);
    }
}
