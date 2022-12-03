function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;  
        default:
            whatHappens = "please enter a valid direction"; 
    }
    return whatHappens;
}

// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
}

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false,
}

const {player, experience} = obj;
let { wizardLevel } = obj;

// declaring object properties
const obj1 = {
    [username]: "Wale",
    [1 + 2]: "hihi"
}

const a = "Simon";
const b = true;
const c = {};

// const obj2 = {
//     a: a,
//     b: b,
//     c: c
// }

const obj2 = {
    a, b, c
}

// template strings
const username = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${username} you seem to be ${age-10}. What a lovely ${pet} you have`;

// symbol

// arrow functions
const add = (a, b) => a + b;

// advanced functions
// closures
const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

// compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose(sum, sum)(5);

// Avoiding side effetcs/functional purity
