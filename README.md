## Test tasks

### Task 1
Write simple REST api in nodejs that calculates monthly rate based on given conditions:
* Down Payment
* Number of months
* Interest rate
* Final payment
* Final payment is optional value and is considered as additional final rate after the amount of selected months passed.

#### Before start:
`cd tasks/rest-api && npm i`

#### Start:
`export PORT=3000 && npm start`

#### Testing
Make a POST request:

`curl -d '{"downPayment": 2000, "numberOfMonths": 12, "interestRate": 10}' -H "Content-Type: application/json" -X POST http://localhost:3000/api/payment`

Expected response:

`{"result":{"monthlyRate":16.666666666666668}}`


### Task 2
Create method (in php, js or ts) that acceppts Gross price and calculates Net price out of given tax (VAT) rate as parameter.

#### Before start:
`cd tasks/method`

#### Testing:
`node test.js`

### Task 3
Given following arrays:
```javascript
const arr1 = [[2], 3, {}, [1, 2]] // [2, 3, 1, 2]
const arr2 = [2, 3, [[1, {a: "text"}], [[2]]], 5] // [2, 3, 1, "text", 2, 5]
const arr3 = [5, {a: 1}, [ 1,[ 3, {}, {c: "a", d: [2, 2]} ] ,[[ 6 ]]]] // [5, 1, 1, 3, "a", 2, 2, 6]
// you need to implement a custom flatCustom method that applies to all your arrays in the code
// the primitive element just becomes an element of the array resulting from the call to flatCustom
// array element of the original array must be "expanded" to the full depth of nesting
// if an element of the original array or an element nested into an array is an object, the values of its fields must become elements of the array-result of calling flatCustom
console.log(arr1.flatCustom())
console.log(arr2.flatCustom())
console.log(arr3.flatCustom())
```
#### Before task
`cd tasks/arrays`

#### Testing
`node index.js`

