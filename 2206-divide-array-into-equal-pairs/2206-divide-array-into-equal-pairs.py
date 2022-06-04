class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        freq = dict()
        total_pairs = len(nums) // 2
        for num in nums:
            freq[num] = 1 if num not in freq else freq.get(num) + 1

        for v in freq.values():
            if total_pairs <= 0:
                return False
            if (v % 2 == 1):
                return False
            total_pairs -= (v // 2)

        return True if total_pairs == 0 else False
