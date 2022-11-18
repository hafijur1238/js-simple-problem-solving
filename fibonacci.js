// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// 4th = 3rd + 2nd 
// nth = (n-1)th + (n-2)th

// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//     // nth = (n-1)th + (n-2)th
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


// function fibonacciSeries(numbers) {
//     const fibo = [0, 1];
//     for (let i = 2; i <= numbers; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// const fiboSeries = fibonacciSeries(15);
// console.log(fiboSeries);

function fibonacciSeries(numbers) {
    if (typeof numbers != 'number') {
        return 'Please give a number';
    }
    else if (numbers < 2) {
        return 'Please Enter a Positive Number more than 1';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= numbers; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

const fiboSeries = fibonacciSeries(2);
console.log(fiboSeries);