// create an arrow function calcAverage that returns the the average of three numbers
const calcAverage = (a, b, c) => (a + b + c) / 3 

// use the function to calculate the average score of both team and save them into two variables

const dophins = [85, 54, 41] // const dophins = [44, 23, 71]
const koalas = [23, 34, 27] // const koalas = [65, 54, 49] 


const avgDophins = calcAverage(...dophins)
const avgKoalas = calcAverage(...koalas)

// create an function that takes in two scores, the first one named Dolphins, the second one Koalas compare them and log out the winner
const checkWinner = (A, B) => {
  if (A >= 2 * B) console.log(`Dophins win (${A} vs ${B})`)
  if (B >= 2 * A) console.log(`Koalas win (${B}) vs ${A}`)
}

// test the two functions with two dataset
checkWinner(avgDophins, avgKoalas)