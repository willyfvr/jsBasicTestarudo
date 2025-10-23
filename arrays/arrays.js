// Creating arrays

const enter = "\n";

const countries = [
  "Mexico",
  "Argentina",
  "Ecuador",
  "Colombia",
  "Peru",
  "Venezuela",
];

// Accessing array elements
console.log(countries[0]); // Mexico
console.log(countries[3]); // Colombia


console.log(`*******************************`);
console.log(`**    List of countries:     **`);
console.log(`*******************************`);

for (let i = 0; i < countries.length; i++) {
  console.log(countries[i]);
}


// Now we doing this with forEach
console.log(enter);
console.log(`Using forEach to list countries:`);

countries.forEach((country) => console.log(country));


// original array
console.table(countries);

// push: Adding elements to an array
countries.push('Madagascar');
console.table(countries);

// unshift: Adding elements to the beginning of an array
countries.unshift('Bolivia');
console.table(countries);

// shift: Removing the first element of an array and returning it

// let removedCountry = countries.shift();
// console.log("Country removed was: " + removedCountry);
// console.table(countries);

// // pop: Removing the last element of an array and returning it
// let lastRemovedCountry = countries.pop();
// console.log("Country removed was: " + lastRemovedCountry);
// console.table(countries);

// sort: Sorting the elements of an array
countries.sort();
console.table(countries);