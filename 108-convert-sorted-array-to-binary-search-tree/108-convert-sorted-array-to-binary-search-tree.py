class Solution:
    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
        if len(nums) == 0:
            return None
        mid = len(nums) // 2
        left = self.sortedArrayToBST(nums[0:mid])
        right = self.sortedArrayToBST(nums[mid + 1:])
        return TreeNode(nums[mid], left, right)
