// create a variable named bill that stores the bill amount
const bill = 275

// calculate the tip based on the amount
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill :  0.2 * bill

// print out the result
const total = bill + tip

console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`)