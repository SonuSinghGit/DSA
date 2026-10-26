// How to Reverse An Array 
// TWO POINTERS APPRAOCH

const arr = [32,45,56,78,34,56];

function ReverseAnArray(arr){
    let left=0;
    let right = arr.length-1;

    while(left < right){
        let temp= arr[left];
        arr[left]=arr[right];
        arr[right]=temp;

        left ++;
        right --;
    }
    return arr
}
console.log(ReverseAnArray(arr));
