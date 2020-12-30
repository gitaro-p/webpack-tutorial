var fruits1: string[] = ['apple', 'banana', 'mango'];

var fruits2: Array<string>;
fruits2 = ['apple', 'banana', 'mango'];

console.log(fruits1);
console.log(fruits2);

var values: (string | number)[] = ['apple', 100, 'orange', 10];
console.log(values);
var values: Array<string | number> = ['banana', 100, 'orange', 200];
console.log(values);

var fruits: string[] = ['Apple', 'Orange', 'Banana'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // undefined
