let first = 5;
let second = 7;
console.log(first, second);

// one way
let temp = first;
first = second;
second = temp;
console.log(first, second);
//Another way
[first, second] = [second, first];
console.log(first, second);