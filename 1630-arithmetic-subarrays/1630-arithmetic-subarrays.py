from typing import List


class Solution:
    
    @staticmethod
    def __isAbleToRearrange(arr: list[int]) -> bool:
        sorted_arr = sorted(arr)
        if len(sorted_arr) <= 2:
            return True
        
        base = abs(sorted_arr[1] - sorted_arr[0])
        
        for i in range(len(sorted_arr) - 1):
            if abs(sorted_arr[i + 1] - sorted_arr[i]) != base:
                return False
        
        return True
        
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        result = []
        
        for i in range(len(l)):
            left_idx = l[i]
            right_idx = r[i]
            
            sub_arr = nums[left_idx: right_idx + 1]
            if Solution.__isAbleToRearrange(sub_arr):
                result.append(True)
                continue

            result.append(False)
        
        return result
                    