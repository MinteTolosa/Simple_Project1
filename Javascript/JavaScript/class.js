// // Composion Function assing function output to another function input
// // const addFive = x => x + 5;
// // const multiplyByTen = x => x * 10;

// // const addThenMultiply = x => multiplyByTen(addFive(x));

// // addThenMultiply(2);
// // console.log(addThenMultiply(4))

// // const addnum = 0;
// // function(x) {
// //     addFive = x + 5;
// //     return addnum 
// // }
// // console.log(2)

// function makeGreeter(greeting) {
//      return function(name) { 
//     return `${greeting}, ${name}.`; 
//     };
// }
// // Function Expression - we assigns a function to a variable and is not hoisted.
// const peace = makeGreeter("Selam");   
// console.log(peace("Almaz"))

// // console.log(makeGreeter("Selam"))

// const employee = [
//     {name:"Chad", role:"Developer", salary: 800000 },
//     {name:"kepa", role:"Fotballer", salary: 1000000 },
//     {name:"Barg", role:"Developer", salary: 900000 }
// ];

// function employees(name,role,salary){
//     const employee = [
//     {name:"Chad", role:"Developer", salary: 800000 },
//     {name:"kepa", role:"Fotballer", salary: 1000000 },
//     {name:"Barg", role:"Developer", salary: 900000 }
// ];
// }

// function onPayment(amount, callback) {
// const fee = amount * 0.02;
// callback(amount - fee); // run the callback
// }
// onPayment(1000, net => console.log(`Net: $(net)`));


//Composing small functions 


// const addVat = p => p * 1.15;
// const round2 = p => Math.round(p * 100) / 100;
// const toEtb = p => `${p} ETB`;
// toEtb(round2(addVat(250))); // "287.5 ETB"
// console.log(toEtb(round2(addVat(250))))


// Exercises 1 
// function calculatVat(amount, rate = 0.15){
//     return p = amount*0.15    
// }

// const vat = p => p * 1.15;

// Exercises 2 

function makeCounter(){
    let count = 0;
    return () => ++count;
}
const next = makeCounter();
console.log(next())
console.log(next())
console.log(next())

//The count value is stayed inprivet because the clouser function keep the value inside the function as a privet after the the out side fuction run 

// Exercises 3

function discountBy(rate){
    return n => n * rate;
}
const memberPrice = discountBy(1 - 0.10);
const salePrice = discountBy(1 - 0.30);

memberPrice(1000);
salePrice(1000);

console.log(memberPrice(1000))
console.log(salePrice(1000))

// Exercises 4

function applyToAll(list, fn){
    return
}

