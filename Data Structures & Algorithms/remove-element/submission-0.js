class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        const length = nums.length;
        const temp = [];
        for (let i = 0; i < length; i++) {
            if (nums[i] == val) {
                continue;
            }
            temp.push(nums[i])
        }
        console.log(temp)
         for (let i = 0; i < temp.length; i++) {
            nums[i] = temp[i];
        }
        return temp.length;
    }
}
