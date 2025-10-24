const car = {
  make: 'Ferrari',
  model: '488 Spider',
  year: 2019,
  color: 'red',
  kilometers: 1000,
  isNew: false,
  radio: {
    brand: 'Pioneer',
    hasBluetooth: true,
    volume: 75,
  },
  extras: ["camara trasera", "sensores de estacionamiento", "asientos de cuero"],
}


// steps to copy an object

const carTwo = car; // WARNING !!! this only copies the reference, not the object itself
// then if I modify carTwo, car will also be modified.

const carThree = {...car}; // this creates a shallow copy of car into carThree

carThree.color = 'blue';


const carFour = Object.assign({}, car); // this also creates a shallow copy of car into carFour
// if I modify carThree or carFour, car will NOT be modified.
carFour.year = 2024;



console.log(car);
console.log(carThree);
console.log(carFour);