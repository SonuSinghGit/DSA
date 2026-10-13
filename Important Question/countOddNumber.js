// count odd number in an intervel Range. 

function countOddNumber(low,high){
    let count=0;
    for(let i=low;i<=high;i++){
        if(i%2 !==0){
            count++;
        }
    }
    return count;
}
console.log(countOddNumber(3,20));

