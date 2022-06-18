class Solution {
	func insertIntoBST(_ root: TreeNode?, _ val: Int) -> TreeNode? {
		if root == nil {
			return TreeNode(val)
		}
		// l: nil r: nil
		if root?.left == nil, root?.right == nil {
			if root!.val < val {
				root!.right = TreeNode(val)
			} else {
				root!.left = TreeNode(val)
			}
			return root
		}
		// l: nil
		if root?.left == nil, root!.val > val {
			root!.left = TreeNode(val)
			return root
		}
		// r: nil
		if root?.right == nil, root!.val < val {
			root!.right = TreeNode(val)
			return root
		}

		// full, go right
		if root!.val < val {
			root!.right = self.insertIntoBST(root?.right, val)
			return root
		}

		// full, go left
		root!.left = self.insertIntoBST(root?.left, val)
		return root
	}
}
