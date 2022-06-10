class Solution:
    def checkTree(self, root: Optional[TreeNode]) -> bool:
        return True if root.left.val + root.right.val == root.val else False
