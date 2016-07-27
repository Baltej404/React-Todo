// function add (a, b){
//   return a + b;
// }
// console.log(add(9, 6));
//
// var toAdd = [9, 8];
//
// console.log(add(...toAdd));
//
// var groupA = ['ben', 'jermain'];
// var groupB = ['olagibt'];
// var final = [...groupB,3, ...groupA];
//
// console.log(final);

var person =['baltej', 18];
var personTwo = ['alisha', 18];

function greet (name, age){
  console.log('Hi ' + name + 'you are ' + age);
}
greet(...person);
greet(...personTwo);
  // console.log('hi', person[0], 'you are', person[1]);

var names = ['mike', 'ben'];
var final = [...names, 'baltej'];

final.forEach((name)=>{
  console.log('Hi ' + name);
})
