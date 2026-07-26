class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k){
        // #   create a map tracking the amount of times a value appears in the nums array
        // #   create an array of size k 
        // #   loop through the map and track the highest/lowest freq value using bucket sort
        // #   loop through the bucket array in reverse pulling values from each individual bucket
        // # up to K times (use a tracker variable to compare with K) 
        const answer = [];
        const freqTracker = new Map();
        const length = nums.length;

        nums.forEach(value => {
            const test = freqTracker.get(value);
            if (!test){
                freqTracker.set(value, 1)
            } else {
                freqTracker.set(value, test + 1)
            }
        })

        const buckets = Array.from({length}, () => []);
        console.log(buckets)
        freqTracker.forEach((freq, key) => {
            console.log(`freq: ${freq}, num: ${key}`)
            buckets[freq -1].push(key);
        })
        console.log(`buckets: ${buckets[2]}`)
        let kTracker = 0;
        for (let x = length - 1; x >= 0; x--) {
            const bucketIdxLen = buckets[x].length;
            for (let y = bucketIdxLen; y > 0; y--){
                answer.push(buckets[x][y - 1]);
                kTracker++;
                if (kTracker == k){
                    return answer
                }
            }
        }
    }
}

// Old Attempt
//     topKFrequent(nums, k) {
//         /* 
//             Find the most frequently found numbers in an array 
//                 that equal or exceed target "k"
//             Return all numbers found answers in array format.
//         */
//         // To find the frequency of every number in the "nums" array

//         /* 
//             I am going to create a Map with the number 
//                 at the index of the array as the "Key" and
//                 the value being the "frequency" number.
//             TC: The array will looped over normaly in O(n) time complexity
//             SC: Space Complexity.... 
//             Failed on test case 5 it is not based on the frequency of "k"
//             "k" means what are the "k" most frequent numbers appearing in the list

//             How many unique numbers are in the list? 
//             We need to track which numbers have the highest repetition in the list.
//             How to also track the lowest repetition in the list?
//         */
//         let lowRep = 0; // when would i update lowRep
//         let highRep = 0;

//         if (nums.length != 0) {
//             lowRep = 1;
//             highRep = 1;
//         }

//         const numMap = new Map()
//         const answer = [];
//         nums.forEach(val => {
//             if(!numMap.has(val)) {
//                 numMap.set(val, 1)
//             }
//             else {
//                 const newFreq = numMap.get(val) + 1;
//                 numMap.set(val, newFreq)

//                 if (newFreq > highRep) {
//                     highRep++;
//                 }
//             }
//         })

//         const

//         return answer
//     }
// }

        /* 
            Failed on test case 5 it is not based on the frequency of "k"
        const numMap = new Map()
        const answer = [];
        nums.forEach(val => {
            if(!numMap.has(val)) {
                numMap.set(val, 1)

                if(k === 1) {
                    answer.push(val);
                }
            }
            else {
                const newFreq = numMap.get(val) + 1;
                numMap.set(val, newFreq)

                if (newFreq === k) {
                    answer.push(val)
                }
            }
        })


        return answer
        */