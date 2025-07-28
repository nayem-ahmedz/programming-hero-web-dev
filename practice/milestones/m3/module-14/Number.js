let result;

// result = Number('212')
// result = Number('212s')
// result = Number('15.5')
// result = Number('15.00') // 15
result = Number([1,2,4])

console.log(result)

// console.log(Number.isInteger('5')) // false
// console.log(Number.isInteger(5.5)) // false
// console.log(Number.isInteger(5)) // true

console.log(Number.isFinite('123x'))