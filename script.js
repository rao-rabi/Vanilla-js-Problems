// We need to calculate how many Km or Miles the user traveled.
// Part # 1:
const trips = [
    { to: 'Brazil', distance: 1000 },
    { to: 'China', distance: 2500 },
    { to: 'India', distance: 3000 }
]

let distance = document.getElementById("distance");
function distanceTravelled() {
    const distanceTravelledKm = trips.reduce((acc, trip) => acc + trip.distance, 0);
    const distanceTravelledMiles = trips.reduce((acc, trip) => acc + (trip.distance * 0.62137), 0);
    distance.innerHTML = `<p style="font-size:20px;">Total Distance Travelled is: ${distanceTravelledKm} in Km and ${Math.floor(distanceTravelledMiles)} in Miles</p>`;
}


// Part # 2:
// We have an object with computers. And what we want to know, HOW many computer we have with MAC and how many with WINDOWS.

const computers = [
    { type: 'Laptop', price: 124, os: 'Windows' },
    { type: 'Desk', price: 124, os: 'Mac' },
    { type: 'Desk', price: 124, os: 'Windows' },
    { type: 'Laptop', price: 124, os: 'Mac' },
    { type: 'Laptop', price: 124, os: 'Windows' },
];

let computer = document.getElementById("compCount");

const countOsComp = computers.reduce((countOs, comp) => {
    countOs[comp.os] = (countOs[comp.os] || 0) + 1;
    return countOs;
}, {})

function countMac() {
    computer.innerHTML = `<p style="font-size:20px;">The Total Number of Computers with Windows OS is: ${countOsComp['Windows']}</p>`;
}
function countWin() {
    computer.innerHTML = `<p style="font-size:20px;">The Total Number of Computers with Mac OS is: ${countOsComp['Mac']}</p> <br> `
}


// Part # 3:

// Which of these variables would you change to let or const ?

// var name = "James";
// var employeeId = 25;
// var eyes = "Blue";
// var age = 25
// var position = "Developer";
// var salary = 2500;
// var knowdlege = ['Javascript','PHP','REACT','Angular 4'];
// var married = false;


const name = "James";
const employeeId = 25;
const eyes = "Blue";
let age = 25;
let position = "Developer";
let salary = 2500;
const knowdlege = ['Javascript', 'PHP', 'REACT', 'Angular 4'];
let married = false;

// Part # 4:
// We have div, and if the user clicks on it, will get a cupcake with an amount to pay and the order number.


let cupcake = document.getElementById('cupcake');
let container = document.getElementById('orders')

var cupcakes = [
    { id: 1, flavor: 'Strawberry', image: '/assets/pink-strawberry-cupcakes-3.jpg' },
    { id: 2, flavor: 'Apple', image: '/assets/96-9919_0-aspect-ratio-782-521.jpg' },
    { id: 3, flavor: 'Banana', image: '/assets/BANANA-CUPCAKES-4.jpg' },
    { id: 4, flavor: 'chocolate', image: '/assets/6083674721bb7e4f7c70a6aa1424b666.jpg' }
]

let randomCupcake;
let orderNumber = 0;
const baseAmount = 5;
var finalAmount;
const dicountID = 2;
const dicountAmount = 3;


cupcake.addEventListener("click", function () {
    // Select a random cupcake
    randomCupcake = Math.floor(Math.random() * cupcakes.length);

    // Increment the order number, we get a different order with each cupcake.
    orderNumber += 1;

    // Depending on the "dicountID" variable, this cupcake is on sale or not.
    finalAmount = dicountID == cupcakes[randomCupcake].id ? (baseAmount - dicountAmount) : baseAmount;

    // Create the message
    container.innerHTML += `<div style="display:flex; align-items:center; justify-content:center; border: 2px solid red; width: 800px; margin-bottom: 2% !important; margin:auto; padding:1%;"><img class="img-cupcake" src="${cupcakes[randomCupcake].image}"> <span style="font-size:30px;">You won a ${cupcakes[randomCupcake].flavor} for ${finalAmount}$ and your order # is ${orderNumber} </span></div>`;

});

