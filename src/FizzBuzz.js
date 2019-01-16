function fizzBuzz (number) {
  result = ''
  if (number % 3 === 0) { result += 'Fizz' }
  if (number % 5 === 0) { result += 'Buzz' }
  if (result === '') { result += number }
  return result
}
