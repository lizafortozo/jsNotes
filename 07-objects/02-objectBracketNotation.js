let garden={
    vegetable:'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};
//* this gives you the whole list in the 'garden'
let test = Object.keys(garden);
console.log(test);
// this one lets you know that it is string =
console.log(typeof test[0]);
// both of these are ways to get the value of vegetable
console.log(garden.vegetable);
console.log(garden['vegetable']);

let baking = {};
baking['zucchini'] = 'better make me some bread!';
console.log(baking);

let bad_obj = {
    "there isSpace": "dont fo this!"
}
console.log(bad_obj["there isSpace"]);
