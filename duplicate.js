
const names = ['saad', 'sabbir', 'sumon', 'sagor', 'rabby', 'sabbir', 'saad', 'rafsun'];

function removeDuplicate(names) {
    let unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     let element = names[i];
    //     // console.log(element);
    // }
    for (let element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}


const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);