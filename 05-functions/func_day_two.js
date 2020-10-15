// make a func called
function greet() {

}





































function print_name(name){
    console.log(name);
}
// name = "Justin"
print_name("Justin")
/*
function print_name("Justin"){
    console.log("Justin")
}
/*
// name = "Adam"
print_name("Adam")
// Write out how this works with 20
/*
function var_loop(n){
    for(let i = 1; i <= n; i++){
        console.log(i);
    }
}
*/
var_loop(20)

// make a function that takes in 3 things 
// and prints them on seperate lines
function multi_print (a, b, c){
    console.log(a)
    console.log(b)
    console.log(c)
}
function list_print(word_list){
    //for(word in word_list){
    //    console.log(word_list[word]);
    //}
    //OR
    for ( word of word_list){
        console.log(word)
    }
}
list_print(["Justin", "Adam", "Amy", "Joe"])


