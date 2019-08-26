"use strict";

class Person {
  constructor (name) {
    this.name = typeof name === 'string' ? name: 'Anonymous';
  }
}

const person1 = new Person('John');
console.log(person1.name);
const person2 = new Person();
console.log(person2.name);
