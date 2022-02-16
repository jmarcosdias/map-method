  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results);

// Using map()
function multiplyByTwo(num) { return num * 2; }
const mapResults1 = nums.map(multiplyByTwo);
console.log(mapResults1);

// Simplified w/ map()
const mapResults2 = nums.map(function (num) { return num * 2; });
console.log(mapResults2);

// Simplfied w/ map() + arrow function
const mapResults3 = nums.map(num => num * 2);
console.log(mapResults3);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

let studentsWithIds = students.map(elem => [elem.name, elem.id]);
console.log(studentsWithIds);

let studentsWithIds2 = students.map(elem => ( { id: elem.id, name: elem.name } ));
console.log(studentsWithIds2)

let studentsWithIds3 = students.map(elem => ({...elem, age: elem.id == 1 ? 32 : elem.id == 2 ? 26 : 28 }));
console.log(studentsWithIds3);