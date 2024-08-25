// const calculateAverageScore = (team) => team.score.reduce((acc, current) => acc + current, 0) / 3

// let determineWinner = (team1, team2) => {
//   if (calculateAverageScore(team1) > calculateAverageScore(team2)) {
//     return team1.name
//   } else if (calculateAverageScore(team2) > calculateAverageScore(team1)) {
//     return team2.name
//   } else {
//     return "draw"
//   }
// } 

// let dophins = {
//   name: "Dophins",
//   score: [96, 108, 89]
// }

// let koalas = {
//   name: "Koalas",
//   score: [88, 91, 110]
// }

// console.log(determineWinner(dophins, koalas))

// determineWinner = (team1, team2) => {
//   if ((calculateAverageScore(team1) > calculateAverageScore(team2)) && (calculateAverageScore(team1) >= 100)) {
//     return team1.name
//   } else if (calculateAverageScore(team2) > calculateAverageScore(team1) && (calculateAverageScore(team2) >= 100)) {
//     return team2.name
//   } else {
//     return "draw"
//   }
// } 

// dophins = {
//   name: "Dophins",
//   score: [97, 112, 101]
// }

// koalas = {
//   name: "Koalas",
//   score: [109, 95, 123]
// }

// console.log(determineWinner(dophins, koalas))

// determineWinner = (team1, team2) => {
//   if ((calculateAverageScore(team1) > calculateAverageScore(team2)) && (calculateAverageScore(team1) >= 100)) {
//     return team1.name
//   } else if (calculateAverageScore(team2) > calculateAverageScore(team1) && (calculateAverageScore(team2) >= 100)) {
//     return team2.name
//   } else {
//     return "draw"
//   }
// } 

// dophins = {
//   name: "Dophins",
//   score: [97, 112, 101]
// }

// koalas = {
//   name: "Koalas",
//   score: [109, 95, 123]
// }

// console.log(determineWinner(dophins, koalas))

// function sum(a, b, c) {
//   return a + b + c
// }
// function sum(a, b) {
//   return a + b
// }
// function sum(a, b) {
//   return undefined + undefined
// }
// console.log(undefined + undefined) 

const myArray = [3, 4, [1, 2, 5]]

console.log(myArray.reduce((acc, curr) => acc.concat(curr),[]) )