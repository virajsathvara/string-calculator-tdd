module.exports = function stringCalculator (numbers) {
  if (numbers === "") return 0
  const argArray = numbers.split(",")
  console.log('array is: ', argArray);
  if (argArray.length === 1) return parseInt(argArray[0])

  let total = 0
  for (let i of argArray) {
    total += parseInt(i)
  }
  return total
}