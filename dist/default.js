'use strict';

var sayHello = function sayHello() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'world';

  console.log('Hello ' + name + '!');
};

var greetUser = function greetUser() {
  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: 'Anonymous' };

  console.log('Hello ' + user.name + '!');
};

greetUser();
sayHello('Victor');