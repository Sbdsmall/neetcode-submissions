class Solution:
    def parenthesisMatch(self, string: str) -> bool:
        match string:
            case "()":
                return True
            case "{}": 
                return True
            case "[]":
                return True
            case _: 
                return False
    def isValid(self, s: str) -> bool:
        """
            StringLength === EVEN

           
        """
        length = len(s)
        if (length % 2) != 0:
            return False
        
        arr = []
        for char in s:
            if char == "(" or char =="[" or char =="{":
                arr.append(char)
            else:
                if len(arr) == 0:
                    return False
                arrChar = arr[-1]
                if not self.parenthesisMatch(arrChar + char):
                    return False
                arr.pop()
        return len(arr) == 0
