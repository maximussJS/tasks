const method = require('./index');

console.log('Method call with Gross=100, Vat=19, Net must be equal 81');
console.log('Net = 81? ', method(100, 19) === 81);
console.log('Method call with Gross=100, Vat=10, Net must be equal 90');
console.log('Net = 90? ', method(100, 10) === 90);
console.log('Method call with Gross=4200, Vat=5, Net must be equal 3990');
console.log('Net = 3990? ', method(4200, 5) === 3990);