var numString = ['']

for (var i = 1; i < 101; i++) {

    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FizzBuzz");
        numString.push('FizzBuzz');
    }

    else if (i % 3 == 0) {
        console.log("Fizz");
        numString.push('Fizz');
    }

    else if (i % 5 == 0) {
        console.log("Buzz");
        numString.push('Buzz');
    }

    else {
        console.log(i);
        numString.push(i);
    }
}  
console.log(numString)