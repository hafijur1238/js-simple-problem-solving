const business = 450;
const minister = 350;
const army = 600;

// if (business > minister) {
//     console.log('Business Person is Bigger');
// }
// else {
//     console.log('Minister Person is Bigger');
// }

// if (business > minister && business > army) {
//     console.log('Business Person is Bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('Minister Person is Bigger');
// }
// else {
//     console.log("Toder Sobar Boro Bhai");
// }

let max = Math.max(business, minister, army);
// console.log(max);

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

let largeNumber = findLargest(234, 123);
console.log('largest Value : ', largeNumber);