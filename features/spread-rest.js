"use strict";

/*
let add = (a, b) => {
  return a + b;
}

let numbers = [4, 22];
console.log(add(1, 4));

console.log(add(...numbers));

*/
let groupA = [33, 99];
let groupB = [11];
let unified = [0, ...groupA, ...groupB, 100];

console.log(unified);

let adder = (base, ...numbers) => {
  numbers.forEach((number) => console.log(base + number));
}

//adder (3, 5, 7, 1);

// Challenge
const person = {
  name: 'John',
  likes: ['Food', 'Video Games', 'Programming'],
  printLikes: function () {
    this.likes.forEach((like) => {
      console.log(`${this.name} likes ${like}!`);
    });
  }
}

person.printLikes();
