from typing import List


class Solution:
    def findValueOfPartition(self, nums: List[int]) -> int:
        nums.sort()
        
        result = None
        
        for i in range(len(nums) - 1):
            x = nums[i]
            y = nums[i + 1]
            
            diff = abs(y - x)
            
            if result == None:
                result = diff
                continue
            
            result = min(diff, result)
        
        return result
