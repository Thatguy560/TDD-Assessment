describe("FizzBuzz", () => {
  it("Will return 'FizzBuzz' when a number is divisible by 15", () => {
    expect(printFizzBuzz(15)).toEqual("FizzBuzz");
  });

  it("Will return 'Fizz' when a number is divisible by 3", () => {
    expect(printFizzBuzz(3)).toEqual("Fizz");
  });

  it("Will return 'Buzz' when a number is divisible by 5", () => {
    expect(printFizzBuzz(5)).toEqual("Buzz");
  });

  it("Will return a string representation of the input", () => {
    expect(printFizzBuzz(7)).toEqual("7");
  });
});
