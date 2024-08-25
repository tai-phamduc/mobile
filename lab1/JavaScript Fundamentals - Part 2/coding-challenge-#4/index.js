// create an array called bills
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// create empty arrays tips and totals
const tips = []
const totals = []

// calculate the tips and totals and push them in the arrays
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

for (let bill of bills) {
  tips.push(calcTip(bill))
  totals.push(bill + calcTip(bill))
}

// write a function that takes in an array and then return the average of that
const calcAverage = arr => {
  let sum = 0
  for (let item of arr) sum += item
  return sum / arr.length
}

console.log(calcAverage(totals))