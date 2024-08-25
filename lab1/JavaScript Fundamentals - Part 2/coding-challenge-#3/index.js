const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    return this.mass / (this.height ** 2)
  },
  bmi: null,
}

const john = {
  fullName: "John Smith",
  mass: 92, 
  height: 1.95,
  calcBMI: function() {
    return this.mass / (this.height ** 2)
  },
  bmi: null
}

mark.bmi = mark.calcBMI()
john.bmi = john.calcBMI()

if (mark.bmi > john.bmi)
  console.log(`Mark's BMI (${mark.bmi.toFixed(2)}) is higher than John's (${john.bmi.toFixed(2)})`)
else if (mark.bmi < john.bmi)
  console.log(`John's BMI (${john.bmi.toFixed(2)}) is higher than Mark's (${mark.bmi.toFixed(2)})`)
else 
  console.log(`Mark's BMI is equal to John's (${mark.bmi.toFixed(2)})`)