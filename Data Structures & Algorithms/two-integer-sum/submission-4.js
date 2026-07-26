class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Search the array for two numbers that add up to the Target number
        // Return the Indices of those two numbers as an array of numbers

        // First method of thinking is to use the sliding window method
        /* Using the first indice variable "i" and adding it to every indice variable "j"
            is after incrementing it in a for loop
            then increment variable "i" and "j" up by 1 if none of the 
            numbers equaled the "target" 
        */


        let length = nums.length
        if (length <= 1) {
            return [];
        }

        let result = 0;
        let answer = [];
        for (let x = 0; x < length - 1 ; x++) {
            for(let y = x + 1; y < length; y++) {
                console.log('left index: ', x)
                console.log('right index: ', y)

                result = nums[x] + nums[y];
                console.log("result", result)
                if (result === target) {
                    answer = [x,y]
                    return answer
                }
            }
        }
        return answer;
    }
}
