let isOn =true;
 //if (some expression) {
    //console.log('do something');
//}

if (isOn==true) {
    console.log("The light is On.");
};

if (isOn) {
    console.log("The light is On!");
};
if (isOn==false) {
    console.log("This light is off");
};


let weather =65;

// if(weather<70) {
//     console.log("Wear a Jacket");
// }

if (weather >70){
    console.log('Wear a jacket!');
} else { // else can follow if statement second statement will fire if statement above is false 
    console.log("No need for jacket!");
}



//* SWITCH if statements

let officeCharacter = "Pam";
 switch (officeCharacter) {
     // kinda like if officeCharacter == "Michael"
     case "Michael":
         console.log("My mind is going a mile an hour");
         break; // break will leave the switch after the block runs
     case "Dwight":
         console.log("Perfectenschlag");
         break;
     case "Jim":
         console.log("Bears. Beets. Battlestar Galactica");
         break;
     default:
         console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
 }
let dessert = 'cake';
 switch (dessert) {
     case 'pie':
         console.log('Pie, pie, me oh my!');
         break;
     case 'cake':
         console.log('Cake is great!');
         break;
     case 'ice cream': 
         console.log('I scream for ice cream!');
         break;
     default:
         console.log('Not on the menu.');
 }



//* ELSE IF TANGENT similiar to switch stamtements          
if (dessert == "cake") {
    console.log('Cake is great!');
} else if (dessert == "ice cream") {
    console.log('I scream for ice cream!');
} else {
    console.log('Not on the menu.');
}


//* TERNARY 
let num = 6;
// ()     ?               true : false
(num > 0) ? console.log('yes') :console.log('no')
