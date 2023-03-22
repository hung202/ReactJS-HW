let str1 = 'My name is:'  
let names = 'Dylan';

let str2 = `${str1} ${names}`
console.log(str2)

let information = { firstName: 'Dylan', lastName: 'Israel'};

let { firstName, lastName } = information;
console.log(firstName); 
console.log(lastName);

let [ firstNames ] = ['Dylan', 'Israel'];
console.log(firstNames)

let firstNamess = 'Dylan';  
let informations = { firstNamess };

let str = 'hello';

for (let char of str) {  console.log(char);}

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

function findLength(...args) {  console.log(args.length);}

findLength();  
findLength(1);
findLength(2, 3, 4); 


const square = num => num * num;
square(2)

let ke = 'Hello World';

console.log(ke.includes('hello'));

class Car {
    constructor(wheels, doors) {
       this.wheels = wheels;
       this.doors = doors;
    }
    describeMe() {
      console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }}


const car1 = new Car(4, 2);  
car1.describeMe(); 

function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
  }
  
  async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
  }
  
  test();
  
