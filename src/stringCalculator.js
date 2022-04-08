module.exports = function stringCalculator (numbers) {
  if (numbers === "") return 0

  let splitRule = /[\n, ]+/g
  let inputs = numbers
  if (numbers.startsWith('//')) {
    const delimiter = numbers.substring(2, numbers.indexOf('\n'))
    console.log('new delimiter found: ', delimiter);
    splitRule = delimiter
    inputs = numbers.substring(numbers.indexOf('\n') + 1, numbers.length)
    console.log('inputs are: ', inputs);
  }
  const argArray = inputs.split(splitRule)
  console.log('array is: ', argArray);
  if (argArray.length === 1) return parseInt(argArray[0])

  let total = 0
  for (let i of argArray) {
    total += parseInt(i)
  }
  if (Number.isNaN(total)) return 'invalid input'
  return total
}