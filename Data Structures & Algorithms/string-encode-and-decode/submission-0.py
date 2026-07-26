class Solution:
    # take all strings in a list and place them into a single string,
    # separate them by tilde or someother unused combination
    def encode(self, strs: List[str]) -> str:
        single_str = ""
        for strx in strs:
            single_str = single_str + "``" + strx
        print(single_str)
        return single_str


    def decode(self, s: str) -> List[str]:
        new_arr =  s.split("``")
        new_arr.pop(0)
        print(new_arr)
        return new_arr
