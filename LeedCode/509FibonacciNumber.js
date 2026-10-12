// Fibonacci Number
// Explanation: fibonacci series me har next number, previous two number ka sum hota h.
// 0,1,1,2,3,5,8,13,21 ....

function FibonacciSeries(number) {
  if (number < 2) {
    return number;
  }
  let previous = 0;
  let current = 1;
  let next;
  for (let i = 2; i <= number; i++) {
    next = previous + current; //f(0)=0,f(1)=1, (f2)=0+1=1, f(3)=1+1=2, f(4)=1+3=3 f(5)=2+3=5
    previous = current;
    current = next;
  }
  return next;
}
console.log(FibonacciSeries(5));
