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

class Employee extends Person {
  constructor (name, job = 'Unemployed') {
    super(name);
    this.job = job;
  }

  printGreeting () {
    console.log(`Hi, I am ${this.name}. I am a ${this.job}`);
  }

}

const person1 = new Employee('john', 'Developer');
person1.printGreeting();
const person2 = new Person();
person2.printGreeting();
