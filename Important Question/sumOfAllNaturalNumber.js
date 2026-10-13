// write the sum of all natural number from 1 to n 
// sum of 1 to 5 (1+2+3+4+5+) = 15

function sumOfAllNaturalNumber(num){

    let sum = 0;
    for(let i=1; i<=num;i++ ){
        sum = sum + i;
    }
    return sum;
}

const result = sumOfAllNaturalNumber(5);
const result2 = sumOfAllNaturalNumber(10);
console.log(result);// 15
console.log(result2);//55

// APPROACH-2:
function sumOfAllNatural(num){
    return num*(num+1)/2;
}

console.log(sumOfAllNatural(10))/55