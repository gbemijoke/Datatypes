module.exports = {
  fizzBuzz: function(num) {
    if(Number.isInteger(num)==false)
    {
      return "Invalid Argument, Enter A Number Next Time"
    }
    if((num%3==0) && (num%5==0))
    {
      return "FizzBuzz";
    }
    if(num%3==0)
    {
      return "Fizz";
    }
    else if(num%5==0)
    {
        return "Buzz";
    }
    else
    {
      return num;
    }
  }
}