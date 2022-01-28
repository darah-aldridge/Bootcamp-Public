
//print odds
var odds=[];

for (var i = 1; i < 21; i++) {

    if (i % 2 == 1) {
        console.log(i);
        odds.push(i);
    }
    else {

    }
}  
console.log(odds);

//decreasing multiples of 3
var multiplesOfThree = [];

for (var i = 100; i > 0; i--) {

    if (i % 3 == 0) {
        console.log(i);
        multiplesOfThree.push(i);
    }
    else {

    }
}  
console.log(multiplesOfThree);

// print sequence
var printSequence=[];
var i = 5.5
while (i>-3.5) {
    i-=1.5;
    printSequence.push(i);

}  
console.log(printSequence);

// sigma
var sumValues = 0;

for(var i=0; i<=100; i++){
    sumValues+=i;
}
console.log(sumValues);

// factorial
var product = 1;

for(var i=1; i<=12; i++){
    product*=i;
}
console.log(product);




