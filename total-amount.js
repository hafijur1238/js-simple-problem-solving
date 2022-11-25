// const products = [

//     { name: 'Phone', price: 55672 },
//     { name: 'Laptop', price: 95672 },
//     { name: 'Ipad', price: 87860 },
//     { name: 'Shirt', price: 3672 },
//     { name: 'Pant', price: 2672 },
//     { name: 'Tv', price: 50672 },
//     { name: 'AC', price: 90672 }

// ];


// let totalPrice = 0;

// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }

// console.log(totalPrice);

const shoppingCart = [

    { name: 'Phone', price: 55672, quantity: 2 },
    { name: 'Laptop', price: 95672, quantity: 3 },
    { name: 'Ipad', price: 87860, quantity: 4 },
    { name: 'Shirt', price: 3672, quantity: 12 },
    { name: 'Pant', price: 2672, quantity: 10 },
    { name: 'Tv', price: 50672, quantity: 3 },
    { name: 'AC', price: 90672, quantity: 4 }

];

let cartTotal = 0;

for (const product of shoppingCart) {
    // console.log(product);
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}

console.log(cartTotal);