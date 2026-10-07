// Missing Number - Given an array nums containing n distinct numbers in the range [0 , n] ,
//  return the only number in the range that is missing from the array.
// Example: nums= [3,0,1]
// output : 2
// Explanation: n=3 since there are 3 numbers , so all numbers in the range [0,3]. 2 is the missing number in the range.
// since it does not appear in the nums. 

function missingNumber(nums){
    let n  = nums.length; 
    let expectedSum = n * (n + 1)/2

    let actutalSum = 0;
    for(let i=0; i<nums.length;i++){
        actutalSum = actutalSum + nums[i]
    }
    return expectedSum - actutalSum;
    
}
// console.log(missingNumber([3,0,1])) // 2
// console.log(missingNumber([0,1])) // 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8


// APPROACH 2
 function findMissingNumber(num){
    let n = num.length;
    return n*(n+1)/2 - num.reduce((acc,num)=>acc+num)

 }
console.log(findMissingNumber([9,6,4,2,3,5,7,0,1])) // 8

