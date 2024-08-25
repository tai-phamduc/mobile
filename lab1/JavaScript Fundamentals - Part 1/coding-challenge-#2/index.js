let markWeight
let markHeight
let johnWeight
let johnHeight

let markBMI
let johnBMI

const calculateBMI = (mass, height) => mass / (height * height)

let markHigherBMI

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
markWeight = 78
markHeight = 1.69

johnWeight = 92
johnHeight = 1.95

markBMI = calculateBMI(markWeight, markHeight)
johnBMI = calculateBMI(johnWeight, johnHeight)

markHigherBMI = markBMI > johnBMI

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`)
} else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})`)
}

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
markWeight = 95
markHeight = 1.88

johnWeight = 85
johnHeight = 1.76

markBMI = calculateBMI(markWeight, markHeight)
johnBMI = calculateBMI(johnWeight, johnHeight)

markHigherBMI = markBMI > johnBMI

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`)
} else {
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})`)
}




