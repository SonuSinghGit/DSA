// check if two given array that is equal or not.

function checkArrayAreEqual(arr1=[], arr2=[]){
    if(arr1.length !== arr2.length) return false
    for(let i=0; i<arr1.length;i++){
        
        if(arr1.length===arr2.length){
            return true
        }else return false
    }
}
console.log(checkArrayAreEqual([23,34,4],[44,56,45]));
