/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let maxLength = 0;
    let left = 0;
    //Iterate through the new set created
    for(let right = 0; right < s.length; right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left++;
        }
        //update the current character
        charSet.add(s[right]);
        //Update the maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength
};