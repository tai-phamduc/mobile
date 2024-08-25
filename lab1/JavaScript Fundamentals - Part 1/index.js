// 1
// for (let i = 0; i < 10; i++) {
//   console.log(i+1)
// }

// 2
// for (let i = 0; i < 100; i += 2) {
//   console.log(i+1)
// }

// 3
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 x ${i} = ${7*i}`)
// }

// 4
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
//   console.log("------------------------")
// }

// 5
// let sum = 0
// for (let i = 1; i <= 10; i++) {
//   sum += i
// }
// console.log(sum)

// 6
// let fact = 1
// for (let i = 1; i <= 10; i++) {
//   fact *= i
// }
// console.log(fact)

// 7
// let sum = 0
// for (let i = 12; i <= 28; i+=2) {
//   sum += i
// }
// console.log(sum)

// 8
// function celsiusToFahrenheit(C) {
//   return (9/5 * C) + 32
// }
// console.log(celsiusToFahrenheit(1))

// 9
// function fahrenheitToCelsius(F) {
//   return (F - 32) * 5/9
// }
// console.log(fahrenheitToCelsius(32));

// 10 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// console.log(sum)
// sum = arr.reduce((acc, cur) => acc += cur, 0)
// console.log(sum)

// 11
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let sum = 0
for (let item of arr) {
  sum += item
}
average = sum / arr.length
console.log(average)

average = arr.reduce((acc, cur) => acc += cur, 0) / arr.length
console.log(average)

