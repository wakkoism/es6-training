"use strict";

let locations = [];

locations.push({
  name: 'California',
  weather: 30,
});

locations.push({
  name: 'Florida',
  weather: 70,
});

for (let location of locations) {
  //console.log(`It is ${location.weather} in ${location.name}.`);
}

// Challenge, fill out a function

function averageGrade (...grades) {
  // Keep track of total to total.
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  return total / grades.length;

}

let total = averageGrade(1, 44, 99);
console.log(total);
