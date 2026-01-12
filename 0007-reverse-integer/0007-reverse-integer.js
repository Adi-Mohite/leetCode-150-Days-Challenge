/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
    let rem = 0;
    let sign = x>0?1:-1;
    x=Math.abs(x);
    while(x>0){
        rem = x%10;
        rev = rev*10 + rem;
        x = Math.floor(x/10);
    }
    rev = rev*sign;
    if(rev<-(2**31)|| rev>(2**31-1)){
        return 0;
    }
    return rev;

};