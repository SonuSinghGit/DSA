// given an integer x, return true if x is a palindrome number.
// Explanaton: 121 reads as 121 from left to right and right to left.


function PalindromeNumber(x){
    let original  = x ;
    let reverse =0;

    while(x>0){
        let digit = x%10; // we get one last digit
        reverse = reverse*10 + digit; // 0*10+1 = 1 , 1*10+2= 12, 12*10+1 = 121 = true
        x= Math.floor(x/10); // remove one digit at a time  
    }
    return original === reverse;
    
}
console.log(PalindromeNumber(121)); // true
console.log(PalindromeNumber(1345345)); // false
