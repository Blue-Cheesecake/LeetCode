from typing import List


class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned_set = set(banned)
        
        s = 0
        result = 0
        
        for i in range(1, n + 1):
            if i in banned_set:
                continue
            
            if s + i <= maxSum:
                s += i
                result += 1
        
        return result
