function fizzBuzz (number) {
  var result = ''
  if (number % 3 === 0) { result += 'Fizz' }
  if (number % 5 === 0) { result += 'Buzz' }
  if (number % 7 === 0) { result += 'Fuzz' }
  if (result === '') { result += number }
  return result
}
