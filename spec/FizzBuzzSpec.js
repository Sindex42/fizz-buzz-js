describe('FizzBuzz', function () {
  it('should return 1 when given 1', function () {
    expect(fizzBuzz(1)).toEqual(1)
  })

  it('should return fizz when given 3', function () {
    expect(fizzBuzz(3)).toEqual('Fizz')
  })
})
