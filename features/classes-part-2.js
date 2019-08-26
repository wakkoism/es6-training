"use strict";

class Person {
  constructor (name) {
    this.name = typeof name === 'string' ? name: 'Anonymous';
  }

  set name (val) {
    this._name = val[0].toUpperCase() + val.slice(1);
  }
  get name () {
    return this._name;
  }
  printGreeting () {
    console.log(`Hi, I am ${this.name}.`);
  }
}

const person1 = new Person('john');
console.log(person1.name);
const person2 = new Person();
console.log(person2.name);
