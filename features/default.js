const sayHello = (name = 'world') => {
  console.log(`Hello ${name}!`);
}

const greetUser = (user = {name: 'Anonymous'}) => {
  console.log(`Hello ${user.name}!`);
}

greetUser();
sayHello('Victor');
