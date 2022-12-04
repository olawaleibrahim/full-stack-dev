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

// advanced arrays
const array = [1, 2, 10, 16];
const double = [];
array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);

console.log(mapArray);

// filter
const filterArray = array.filter(num => num > 5)
console.log(filterArray);

// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num
}, 0);

console.log("reduce", reduceArray);

// objects -> instantiation
class Player {
    constructor(username, type) {
        this.username = username;
        this.type = type;
    }
    introduce() {
        console.log(`Hi, I am ${this.username}, I am a ${this.type}.`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Weeeee I am a ${this.type}`);
    }
}

const wizard1 = new Wizard("Zeddicus", "First Order Wizard");
const wizard2 = new Wizard("Shota", "Second Order Wizard");


// ES8 additions
let newObj = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr. Grinch"
}

// keys
Object.keys(newObj).forEach((key, index) => {
    console.log(key, newObj[key]);
})

// values

// entries
Object.entries(newObj).map(value => {
    return value[1] + value[0].replace("username", " ");
})
