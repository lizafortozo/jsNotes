let name = fName=> { // here we called the function 
    return 'Paloma'
}

let myName = name (); // here we are assigning a variable to function 
console.log(myName); // here we are running it 

console.log(name())  //this is doing the same^ just not as clean


//*Challenge
function tipCalc(bill){
    let tip= bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.72);// storeing as a variable
console.log(totalTip)

//* another way to do with arrow function^ DONT NEED RETURN KEYWORD IN ARROW FUNCTIONS
let tipCalc =bill => bill*.2;
let totalTip = tipCalc(19.72)
console.log(totalTip)


//* large function with eles if and returns
function captializeName (name) {
    let capName =''; //* started with a variable assigned to empty string 
    for (l in name) { //* adding a for in loop that adds to string
        console.log(capName)
        if (l==0){
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    return capName
}
console.log(captializeName('LiZa')) 


