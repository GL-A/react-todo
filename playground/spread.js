// function add (a, b){
//   return a + b;
// }
// console.log(add(2, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));
// var groupA = ['jen', 'cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA];
// console.log(final);

var person = ['Andrew', 22];
var personTwo = ['Mehgan', 21];

function test (name, age){
  console.log('hello ' + name + ' your age is '  + age);
}
test(...person);
test(...personTwo);
var names = ['Mike', 'Ben'];
var final = ['George', ...names];
final.forEach(function (name) {
  console.log('Hi ' + name);
})
