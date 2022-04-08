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

  let total = 0
  for (let i of argArray) {
    if (parseInt(i) < 0) return 'negatives not allowed'
    total += parseInt(i)
  }

  if (Number.isNaN(total)) return 'invalid input'
  return total
}