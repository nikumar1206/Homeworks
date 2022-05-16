function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
}
// mysteryScoping1() only outputs "in block" both times

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';  
        console.log(x);
    }
    console.log(x);
}
// mysteryScoping2() outputs in block, then out of block

  function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
      var x = 'in block';  
      console.log(x);
    }
    console.log(x);
}
// mysteryScoping3() identifier x has already been declared

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    console.log(x);
}
// mysteryScoping4() inblock followed by out of block

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
      let x = 'in block';  
      console.log(x);
    }
    let x = 'out of block again';
    console.log(x);
}
// mysteryScoping5 x already been declared

function fizzbuzz(arr) {
    new_arr = []
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0 || arr[i] % 5 == 0 && !(arr[i] % 3 == 0 &&  arr[i] % 5 == 0)) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
console.log(fizzbuzz([1,2,3,4,5,6,7,8,9]))

function isPrime(number) {
    if (number < 2) {
        return false
    }
    for (let s=2; s < number; s++) {
        if (number % s === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(5))
console.log(isPrime(9))

function sumOfNPrimes(number) {
    arrOfPrimes = []
    var i = 2
    var sum = 0
    while (arrOfPrimes.length < number) {
        if (isPrime(i)) {
            arrOfPrimes.push(i)
            sum += i
        }
        i += 1
    }
    return sum
}
console.log(sumOfNPrimes(2))


// revaluated using reduce

function sumOfNPrimes2(number) {
    arrOfPrimes = []
    i = 2
    while (arrOfPrimes.length < number) {
        if (isPrime(i)) {
            arrOfPrimes.push(i)
        }
        i += 1
    }
    return arrOfPrimes.reduce((a,b) => a + b, 0) // before fat arrow is the callback function, after is
    // what that function actually does. could also be arr.reduce(add, 0) with function add being defined later
}
console.log(sumOfNPrimes2(2))
