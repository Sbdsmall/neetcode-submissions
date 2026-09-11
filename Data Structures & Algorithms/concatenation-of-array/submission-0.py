class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        length = len(nums)
        
        newArr = [0] * length * 2
       
        for idx, num in enumerate(nums):
            newArr[idx] = num
            newArr[idx + length] = num
            
        return newArr