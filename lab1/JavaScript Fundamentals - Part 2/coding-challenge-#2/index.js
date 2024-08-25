// function calTip
const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill

// return tip array
const bills = [125, 555, 44]
const tips = bills.map(bill => calcTip(bill))

// return total array
let totals = []
for (let i = 0; i < 3; i++) {
  totals.push(bills.at(i) + tips.at(i))
}

console.log(totals)