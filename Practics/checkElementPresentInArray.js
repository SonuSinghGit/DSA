const arr = [23,45,56,"Hello",{name:"sonu"},[45,56,78]];

function checkElement(arr=[],target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true
        }
    }
    return false;
}

// console.log(checkElement(arr,"Hello")); // true
// console.log(checkElement(arr,23)); // false


function checkElementPresentInArray(arr,target){
    for(let i=0; i<arr.length;i++){
        if(arr[i]=== target){
            return i + arr [i]
        }
    }
    return false;
}
console.log(checkElementPresentInArray(arr,"Hello"));
