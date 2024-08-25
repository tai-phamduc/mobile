// store the temperatures in an array
// const maximum_temperatures = [17, 21, 23]
const maximum_temperatures = [12, 5, -5, 0, 4]

// write the function printForecast
const printForeCast = arr => {
  let returnString = ""
  arr.forEach((item, index) => {
    returnString += `... ${item}oC in ${index + 1} days `
  })
  console.log(returnString)
}

printForeCast(maximum_temperatures)

// run with test datas