class Solution {
	func rangeSumBST(_ root: TreeNode?, _ low: Int, _ high: Int) -> Int {
		if root == nil {
			return 0
		}
		let sum_left_right: Int = self.rangeSumBST(root?.left, low, high) + self.rangeSumBST(root?.right, low, high)
		if root!.val >= low, root!.val <= high {
			return root!.val + sum_left_right
		}
		return sum_left_right
	}
}