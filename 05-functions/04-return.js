let name = fName=> {
    return 'Paloma'
}

let myName = name ();
console.log(myName);

console.log(name())

fucntion captializeName (name) {
    let capName ='';
    for ( 1 in name){
        if (l==0){
            capName += name [1].toUpperCase();
        } else {
            capName+=name[1].toUpperCase
        }
    }
    return capName
}
console.log(captializeName('LiZa')) 

function captialize(name) {
}


//*Challenge
function tipCalc(bill){
    let tip= bill * 0.2;
    return tip.toFixed(2);
}

let totalTip = tipCalc(19.72);
console.log(totalTip)

//* another way to do ^
let totalCalc =bill => bill*.2;
let totalTip = tipCalc(19.72)
console.log(totalTip)
