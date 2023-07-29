class Solution:
    
    def plus_range(start, times):
        result = 0
        for i in range(times):
            result += start
            start += 1
        return result
    
    def totalMoney(self, n: int) -> int:
        result = 0
        
        i = 0
        mon = 1
        while (i < n):
            if i + 7 < n:
                result += Solution.plus_range(((i // 7) + 1) * mon, 7)
                i += 7
            else:
                result += Solution.plus_range(((i // 7) + 1) * mon, n - i)
                break
            
        
        return result