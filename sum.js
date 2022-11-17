const myNumber = [12, 34, 45, 56, 67, 32, 321, 213, 543, 55, 665, 777];

// let sum = 0;
// for (let i = 0; i < myNumber.length; i++) {
//     let element = myNumber[i];
//     sum = sum + element;
// }

// console.log(sum);

function arrayTotal(myNumber) {
    let sum = 0;
    for (let i = 0; i < myNumber.length; i++) {
        let element = myNumber[i];
        sum = sum + element;
    }
    return sum;
}

let total = arrayTotal(myNumber);
console.log(total);