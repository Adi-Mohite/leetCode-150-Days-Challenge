/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let Candidate = null;
    let count = 0;
    for(let num of nums){
        if(count === 0){
            Candidate = num;
        }
        count += (num===Candidate)? 1:-1;
    }
    return Candidate;
};