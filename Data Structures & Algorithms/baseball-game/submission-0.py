class Solution:
    def calPoints(self, operations: List[str]) -> int:
        """
            score = [1, 2]
            score = [1, 2, 3] + 
            score = [1, 2, ] C
            score = [1, 2, 5] 
            score = [1, 2, 5, 10] D
            score = sum([1, 2, 5, 10]) = 18
        """
        scores = []
        scoresLen = 0
        for myOp in operations:
            print("scores: ", scores)
            if myOp == "+":
                x, y = scores[scoresLen - 2], scores[scoresLen - 1]#out of bounds
                scores.append(x + y)
                scoresLen += 1
                print("+", scores)
                continue
            elif myOp == "C":
                scores.pop()
                scoresLen -= 1
                print("Popped: ", scores)
                continue
            elif myOp == "D":
                val = scores[scoresLen - 1] * 2 
                scores.append(val)
                scoresLen += 1

                continue
            else: 
                scores.append(int(myOp))
                scoresLen += 1
        score = 0
        for num in scores:
            score += int(num)
        
        return score
