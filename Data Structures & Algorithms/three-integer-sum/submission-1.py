class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        """
        Sort the "nums" array
        [-4,-1,-1,0,1,2]
        Loop through the array with a fixed number
        Do a second loop using the Two Pointer strategy
        if i + j + k = 0 add values to a Set
        """
        nums.sort()
        result = []

        
        for i, a in enumerate(nums):
            if(nums[i] > 0): break;
            if(i > 0 and nums[i] == nums[i - 1]): continue;

            left = i + 1
            right = len(nums) - 1

            while(left < right):
                sum = nums[i] + nums[left] + nums[right]

                if (sum > 0):
                    right -= 1
                elif (sum < 0):
                    left += 1
                else:
                    result.append([nums[i], nums[left], nums[right]])
                    left += 1
                    right -= 1
                    while (left < right and nums[left] == nums[left -1]):  
                        left += 1
        return result               

        