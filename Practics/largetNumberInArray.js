const nums = [23,45,78,90,67];

function findMaximumNumber(nums){ 
    let maximum = nums[0];
    for(let i=0;i<nums.length;i++){
       if(nums[i] > maximum){
        maximum = nums[i];
       }
    }
    return maximum;
}

console.log(findMaximumNumber(nums));
