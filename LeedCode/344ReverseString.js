const word = ["H", "E", "L", "L", "O"];

function ReverseString(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let temp = str[left];    // temp = H
    str[left]= str[right];   // left = O
    str[right]=temp;         // right = H 

    left++;
    right--;
  }
  return str;
}

console.log(ReverseString(word));