// Phase 1
const titleize = (arr, cb) => {
    new_arr = arr.map(word => `Mx. ${word} Jingleheimer Schmidt`)
    return cb(new_arr)
}
const cb = (arr) => {
    arr.forEach(element => console.log(element));
}

console.log(titleize(["Mary", "Brian", "Leo"], cb));

// Phase 2
function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    return `${this.name} the elephant goes phrRRRRRRRRRRR!!!!!!!`;
}
Elephant.prototype.grow = function() {
    this.height += 12;
};
Elephant.prototype.addTrick = function(trick) {
    if (!this.tricks.includes(trick)) {
        this.tricks.push(trick);
    }
};
Elephant.prototype.play = function() {
    random_num = Math.floor(Math.random() * (this.tricks.length - 1));
    return `${this.name} is ${this.tricks[random_num]}!`
}

// Phase 3
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`);
}
Elephant.paradeHelper(micah);

herd.forEach(elephant => {
    Elephant.paradeHelper(elephant)
})

// Phase 4

function dinerBreakfast() {
    let order = "cheesy scrambled eggs";
    console.log(`I'd like ${order} please`)

    return (extra_food) => {
        order = `${order} and ${extra_food}`
        console.log(`I'd like ${order} please`)
    }
}

let bfastOrder = dinerBreakfast();

bfastOrder("chocolate chip pancakes");

bfastOrder("grits");