let greet = (name = 'John') => {
 console.log(`Hello ${name}`);
}

greet('Cow');
// Challenge Create a person object, takes the person argument.
// Also provided a default for name.  Age is 0.

let person = {
  name: 'John',
  age: 25,
};

let defaultPerson = {
  name: 'Anonymous',
  age:  0
};

let newGreet = (personObject = defaultPerson) => {
  console.log(`Hello ${personObject.name}, you are ${personObject.age} years old.`)
}

newGreet(person);
newGreet();
