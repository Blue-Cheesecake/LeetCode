from typing import List
import sys

class Solution:
    
    def firstMissingPositive(self, nums: List[int]) -> int:
        # find positive min max
        
        # check min is 1 or not? if not return 1
        
        # otherwise, check interval for missing values 
        # if none, return max + 1
        
        pos_min = None
        pos_max = None
        s = set()
        
        for num in nums:
            if num >= 1:
                if pos_min is None:
                    pos_min = num
                else:
                    pos_min = min(pos_min, num)
                    
                if pos_max is None:
                    pos_max = num
                else:
                    pos_max = max(pos_max, num)
                
                s.add(num)
        
        if pos_min != 1:
            return 1
        
        for i in range(pos_min, pos_max):
            if i not in s:
                return i
        
        return pos_max + 1
