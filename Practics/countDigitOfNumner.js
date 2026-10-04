// count the digit of a given number
// hint-> [ 54657 =  5]

function countDigitOfNumber(num){
    let count = 0;
    while(num>0){
        num = Math.floor(num/10)
        count++;
    }
    return count;
}
console.log(countDigitOfNumber(2343456))//7

// USING DO WHILE LOOP

function countDigit(num){
    let count = 0;
    do {
        count++;
        num=  Math.floor(num/10)
    } while (num>0);
    return count;
}

console.log(countDigit(3456));