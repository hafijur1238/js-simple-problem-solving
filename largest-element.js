function largestElement(numbers) {
    let largestValue = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        // console.log(element);
        if (element > largestValue) {
            largestValue = element;
        }
    }
    return largestValue;
}

let ages = [23, 45, 32, 46, 55, 44, 85, 34, 77, 90, 99, 12, 32, 11, 22, 33, 21, -12, -23, 15];
let oldest = largestElement(ages);
console.log('Oldest Man : ', oldest);