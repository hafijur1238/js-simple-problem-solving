let phones = [
    { name: 'Samsung - S22', price: 94562, camera: '12px', storage: 64 },
    { name: 'Samsung - S22-plus', price: 104562, camera: '120px', storage: 512 },
    { name: 'Samsung - S21-Fan', price: 54562, camera: '40px', storage: 128 },
    { name: 'Samsung - S20-Fan', price: 44562, camera: '32px', storage: 256 },
    { name: 'iphone - 13', price: 84562, camera: '12px', storage: 128 },
    { name: 'iphone - 12', price: 34562, camera: '12px', storage: 64 },
    { name: 'iphone - 14 pro max', price: 124562, camera: '48px', storage: 128 }
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);