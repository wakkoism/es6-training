"use strict";

const chatRooms = new Set();

chatRooms.add('Runners');
chatRooms.add('Runners');
chatRooms.add('Bikers');

// Size

// console.log(chatRooms.size);

// console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// chatRooms.delete('Bikers');

// console.log(chatRooms.size);
// chatRooms.clear();

chatRooms.add({name: 'John'});
// To array.
// console.log([...chatRooms]);

chatRooms.forEach((chatRooms) => {
  // console.log(`Found chat room: ${chatRooms}`);
});

// Defined a set.
const movies = new Set();
function addMovie(title) {
  if (movies.has(title)) {
      console.log(`The movie "${title}" has already been added.`);
  }
  else {
    movies.add(title);
    console.log(`The movie "${title}" has been added.`);
  }
}


addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');
