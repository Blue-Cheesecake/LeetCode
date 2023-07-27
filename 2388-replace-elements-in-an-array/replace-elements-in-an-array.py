from typing import List


class Solution:
    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:
        m: dict[int, list[int]] = dict()
        
        for i in range(len(nums)):
            num = nums[i]
            if num in m:
                m[num].append(i)
            else:
                m[num] = [i]
            
        
        for operation in operations:
            replace = operation[0]
            value = operation[1]
            
            if replace not in m:
                continue
            
            temp_indices = m.get(replace)
            
            m.pop(replace)
            
            m[value] = temp_indices
        
        result = [None for _ in range(len(nums))]
        
        for value, indices in m.items():
            for index in indices:
                result[index] = value
        
        return result
    