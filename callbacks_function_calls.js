// window.setTimeout(function () {
//     alert("HAMMERTIME")
// }, 5000)


// Timeout + Closure


const hammertime = (time) => {
    window.setTimeout(function() {
        alert(`${time} is HAMMERTIME!`)
    }, 5000);
};

// Some Tea. Some Biscuits

const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function teaAndBiscuits () {
    let first, second;
    reader.question("Would you like some tea?", (res) => {
        first = res;
        console.log(`you replied ${res}`);
        reader.question("Would you like some biscuits?", (res2) => {
            second = res2;
            console.log(`you replied ${res2}`);
            const firstRes = ( first === 'yes') ? 'do': 'don\'t';
            const secRes = ( second === 'yes') ? 'do': 'don\'t';
            console.log(`So you ${firstRes} want tea and you ${secRes} want biscuits?`);
            reader.close();
        });
    });
};
teaAndBiscuits();

function Cat () {
    this.name = 'Markov';
    this.age = 3;
}
  
function Dog () {
    this.name = 'Noodles';
    this.age = 4;
}

Dog.prototype.chase = function (cat) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase.call(Markov, Noodles)

Noodles.chase.apply(Markov, [Noodles]);