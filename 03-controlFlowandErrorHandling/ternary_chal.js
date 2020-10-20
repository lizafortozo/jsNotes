let age = 21;
switch (true) {
    case age > 24:
        console.log("Yay! You can rent a car!")
    case age > 20:
        console.log("Yay! You can drink!")
    case age > 17:
        console.log("Yay! You can vote!");
        break;
    default:
        console.log("Sorry, you're too young to do anything fun.");
}
//* MULTIPLE TERNARYS ^same results as above
let age = 21;
(age>24) ? console.log("yay! You can rent a car!")
            :(age>20) ? console.log("yay you can drink!") // THESE
                        :(age>17) ? console.log("yay you can vote!") // THREE
                                    :console.log("sorry youre to young to do anything") // ARE FALSE STATEMENTS