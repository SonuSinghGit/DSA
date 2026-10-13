function sumofMatrix(nums){
    let sum = 0
    for(let i=0; i<nums.length;i++){
        for(let j=0; j<nums.length; j++){
            sum = sum + nums[i][j]
        }
    }
    return sum;
}
console.log(sumofMatrix([[3,5,5], [5,56,6], [45,8,8]]))
