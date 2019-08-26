"use strict";

const array = ['first', 'second', 'third'];
let [a, , c] = array;
//console.log(a, c);

const  todo = {
  description: 'Watch new ES6 Section',
  completed: false,
}

let {description: message, completed} = todo;

// console.log(message);
// console.log(completed);


function getTodoStatus ({completed}) {
  if (typeof completed === 'boolean') {
    return [`Todo is ${completed ? '' : 'not'} completed.`];
  }
  else {
    return [undefined, {error: 'INVALID_TODO_ITEM'}];
  }
}

let [response, error] = getTodoStatus(todo);
if (error) {
  console.log(error);
}
else{
  console.log(response);
}
