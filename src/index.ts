// Fizz Buzz Code
function fizzbuzz(params: void) {
  for (let index = 0; index < 100; index++) {
    let result: any = index;
    if (index % 3 === 0 && index % 5 === 0) {
      result = "FizzBuzz";
    } else if (index % 3 === 0) {
      result = "Fizz";
    } else if (index % 5 === 0) {
      result = "Buzz";
    }
    console.log(result);
  }
}

fizzbuzz();
