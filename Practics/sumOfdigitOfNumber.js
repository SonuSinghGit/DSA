// find the sum of digit of a number
// 1278 = 1+2+7+8= 18

// firstly which loop we choose and why.
// here we do not know how many iteration and upper boound we have .
// we only know untill number become less then zero then we stop. so we choose while loop.

function sumofDigitOfNumber(num){
    let sum = 0;
    while(num>0){
        let digit = num % 10 // hame har bar ek digit mil jayega
        sum = sum + digit;
        num = Math.floor(num/10)// har bar num ko divide kar ke ek ek kam karenge.
    }

    return sum;
}
console.log(sumofDigitOfNumber(1278))//18


