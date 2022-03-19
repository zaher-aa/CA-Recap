// ARRAY 1
const texasss = [
  {
    name: 'Mike',
    age: 23,
    gender: 'm',
    us: false,
  },
  {
    name: 'Liz',
    age: 20,
    gender: 'f',
    us: true,
  },
  {
    name: 'Chris',
    age: 102,
    gender: 'm',
    us: true,
  },
  {
    name: 'Chuloo',
    age: 27,
    gender: 'm',
    us: false,
  },
  {
    name: 'Annie',
    age: 30,
    gender: 'f',
    us: true,
  },
];

// Part 1 - Find all users older than 24
const olderThan24 = texasss.filter((user) => user.age > 24);
console.log(olderThan24);
// Part 2 - Find the total age of all users
const totalAge = texasss.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge);
// Part 3 - List all female coders
const femaleCoders = texasss.filter((user) => user.gender === 'f');
console.log(femaleCoders);

// ARRAY 2
const newieyork = [
  {
    name: 'Michelle',
    age: 19,
    coder: true,
    gender: 'f',
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder: false,
    gender: 'm',
    us: false,
  },
  {
    name: 'Ivy',
    age: 26,
    coder: true,
    gender: 'f',
    us: false,
  },
  {
    name: 'Nick',
    age: 32,
    coder: true,
    gender: 'm',
    us: true,
  },
  {
    name: 'Jim Beglin',
    age: 65,
    coder: false,
    gender: 'm',
    us: true,
  },
];

// Part 1 - List all users in US in ascending order
const usUsers = newieyork.filter((user) => user.us).sort((a, b) => a.age - b.age);
console.log(usUsers);
// Part 2 - Sort all users by age
const sortedByAge = newieyork.sort((a, b) => a.age - b.age);
console.log(sortedByAge);
// Part 3 -  List all female coders
const fCoders = newieyork.filter((user) => user.gender === 'f' && user.coder);
console.log(newieyork);

// ARRAY 3
const vegzas = [
  {
    name: 'Charly',
    age: 32,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Law',
    age: 21,
    coder: true,
    gender: 'm',
  },
  {
    name: 'Rosey',
    age: 42,
    coder: false,
    gender: 'f',
  },
  {
    name: 'Steph',
    age: 18,
    coder: true,
    gender: 'f',
  },
  {
    name: 'Jon',
    age: 47,
    coder: false,
    gender: 'm',
  },
];

// Part 1 - Find the total age of male coders under 25
const totalAgeOfMaleCodersUnder25 = vegzas.filter((user) => user.gender === 'm' && user.age < 25).reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAgeOfMaleCodersUnder25);
// Part 2 - List all male coders over 30
const maleCodersOver30 = vegzas.filter((user) => user.gender === 'm' && user.age > 30);
console.log(maleCodersOver30);
// Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
const totalAgeOfAll = [...texasss, ...newieyork, ...vegzas].reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAgeOfAll);