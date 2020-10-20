
V----- returns a promise
fetch()
    .then(x) // if you use one callback, that is on Fulfilled
    .then(x, y) // x will happen if Fufilled
                // y will happen if rejected 
    .catch(x) // this will happen if Rejected 


fetch()
    .then(x<if worked>, y<iffailed>)

fetch()
    .then(x) < if it worked 
    .catch(x) < if it failed

const result = await fetch();
const json = await result.json();
console.log(json)

const request =async ()=> {
    const response = await 
}