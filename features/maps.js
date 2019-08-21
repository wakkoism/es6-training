"use strict";

const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 11);
console.log(myMap.get('name'));

console.log(myMap.has('name'));

myMap.delete('name');

console.log(myMap.size);
myMap.clear();

var newMap = new Map();

newMap.set(1, 'Andrew');
newMap.set(2, 'John');
newMap.set(3, 'Vivi');
console.log([...newMap]);
console.log(newMap.keys());

// Challenge
let location = {name: 'Florida'};
let secondLocation = {name: 'California'};
let myWeather = new Map();

function setWeather(location, temp) {
  myWeather.set(location, temp);
}

function printWeather (location) {
  // Check weather to print.
  if (myWeather.has(location)) {
    console.log(`The weather is ${myWeather.get(location)} in ${location.name}.`);
  }
  else {
    console.log(`There is no weather set for ${location.name}.`);
  }
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);
