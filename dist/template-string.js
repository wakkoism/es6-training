'use strict';

var greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'John';

  console.log('Hello ' + name);
};

greet('Cow');
// Challenge Create a person object, takes the person argument.
// Also provided a default for name.  Age is 0.

var person = {
  name: 'John',
  age: 25
};

var defaultPerson = {
  name: 'Anonymous',
  age: 0
};

var newGreet = function newGreet() {
  var personObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPerson;

  console.log('Hello ' + personObject.name + ', you are ' + personObject.age + ' years old.');
};

newGreet(person);
newGreet();