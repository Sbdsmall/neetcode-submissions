class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        /* 
            If num.size = 1 and num[0] != 0; return 1

            matrixArr = New Array of num size 
            forLoop adding empty arrays into matrixArr
            let tempArr = []
            let k = 0
            If Value is 1, matrixArr[k].add(Value)
            else if Value is not equal to 1, k++

            Loop through matrixArr printing arrSize returning largest
        */
        if (nums.length < 1) return 0;
        if (nums.length == 1 ) return nums[0];
        let matrixArr = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            matrixArr[i] = []
        }

        let idx = 0;
        let numKey = 0;
        let size = 0
        while(numKey  < nums.length) {
            const numVal = nums[numKey]
            if (numVal == 1) { 
                matrixArr[idx].push(numVal)
                const matrixSize = matrixArr[idx].length
                if (size < matrixSize) {
                    size = matrixSize
                }
            } else {
                idx++;
            }
            numKey++;
        }
        return size


    }
}