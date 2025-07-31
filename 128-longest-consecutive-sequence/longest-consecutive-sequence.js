/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    //create a new set of numbers on 0(n) format
    const numSet = new Set(nums);
    let maxLength = 0;

    //Iterate through the numbers
    for(let num of numSet){

        // IF the number less than current number exists in the set we reset it as the new number
        if(!numSet.has(num - 1)){
            let currentNum = num;
            let currentLength = 1;

            //Iterate through the other numbers preceding the current lower number
            while(numSet.has(currentNum + 1)){
                currentNum++;
                currentLength++;
            }

            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;;
};