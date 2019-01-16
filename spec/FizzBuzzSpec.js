describe('FizzBuzz', function () {
  describe('when given any other number', function() {
    it('should return 1 when given 1', function () {
      expect(fizzBuzz(1)).toEqual('1')
    })
  })

  describe('when given a multiple of 3', function () {
    it('should return Fizz when given 3', function () {
      expect(fizzBuzz(3)).toEqual('Fizz')
    })

    it('should return Fizz when given 6', function () {
      expect(fizzBuzz(6)).toEqual('Fizz')
    })
  })

  describe('when given a multiple of 5', function () {
    it('should return Buzz when given 5', function () {
      expect(fizzBuzz(5)).toEqual('Buzz')
    })

    it('should return Buzz when given 10', function (){
      expect(fizzBuzz(10)).toEqual('Buzz')
    })
  })

  it('should return FizzBuzz when give 15', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  })
})
