"use strict";

const age = 25;

let printHello = () => {
  console.log('Hello');
}

const person = {
  age,
  printHello,
  printAge () {
    console.log(this.age);
  },
  name: 'John',
  ['Hello' + (3 + 2)]: 'I am here',
}

person.printAge();

// Defined method using shorthand.

