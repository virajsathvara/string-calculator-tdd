module.exports = function stringCalculator (numbers) {
  if (numbers === "") return 0
  const argArray = numbers.split(",")
  if (argArray.length === 1) return parseInt(argArray[0])
}