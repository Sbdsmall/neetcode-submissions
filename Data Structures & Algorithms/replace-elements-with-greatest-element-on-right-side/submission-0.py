class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        """
            Find the highest number to the right of the current index
            1) Consider the # at current index
            2) Check the # at the next index
            3) Set that number as the Max number
            4) Check the next # after the Max index. Is it higher? Replace
                - Else Continue to the end of the loop
            5) Replace current index with max value
        """
        length = len(arr)
        for idx in range(0, length -1, 1):
            # print(idx)
            arr[idx] = (max(arr[idx + 1:]))

        arr[length  -1 ] = -1
       
        return arr