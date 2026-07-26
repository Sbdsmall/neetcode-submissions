class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ana_map = dict()
        length = len(strs)

        if length == 1:
            return [strs]
     
        for word in strs:
            alphabet = [0] * 26
            for char in word:
                idx_num = ord(char) - 97
                alphabet[idx_num] += 1
            print(f"The word '{word}' alphabet key: '{alphabet}'")
            if (not ana_map.get(str(alphabet))):
                ana_map[str(alphabet)] = [word]
            else:
                curr_list = ana_map.get(str(alphabet))
                print(curr_list)
                curr_list.append(word)
        answer = []
        for arr in ana_map.values():
            answer.append(arr)
        return answer
                