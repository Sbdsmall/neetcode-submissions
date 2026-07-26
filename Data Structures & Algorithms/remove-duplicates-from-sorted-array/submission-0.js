class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let prevNum = 0;

        const newSet = new Set();

        nums.forEach(num => {
            newSet.add(num)
        })
        
        const uniqueArray = [...newSet];
        for (let i = 0; i < uniqueArray.length; i++) {
            nums[i] = uniqueArray[i];
        }
        console.log(nums)
        return uniqueArray.length;
    }
}
