module.exports = function stringCalculator (numbers) {
  if (numbers === "") return 0

  let splitRule = /[\n, ]+/g
  let inputs = numbers

  if (numbers.startsWith('//')) {
    splitRule = numbers.substring(2, numbers.indexOf('\n'))
    inputs = numbers.substring(numbers.indexOf('\n') + 1, numbers.length)
  }

  const argArray = inputs.split(splitRule)
  if (argArray.length === 1) return parseInt(argArray[0])

  const { total, nagativeNumbers } = calculateNumbers(splitRule, argArray)

  if (nagativeNumbers.length > 0)
    throw new Error('negatives not allowed: ' + nagativeNumbers.toString())
  if (Number.isNaN(total)) return 'invalid input'
  return total
}

const calculateNumbers = (delimeter, arr) => {
  let total = (delimeter === '*') ? 1 : 0
  let nagativeNumbers = []

  for (let i of arr) {
    if (parseInt(i) < 0) {
      nagativeNumbers.push(i)
    }
    total = (delimeter === '*') ? total * parseInt(i) : total + parseInt(i)
  }
  return {
    total,
    nagativeNumbers
  }
}