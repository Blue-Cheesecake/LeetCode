/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */

class Solution {
	
	private func getChildValues(_ root: TreeNode?) -> Int {
		if (root == nil) || (root?.left == nil && root?.right == nil) {
			return 0
		}
		if root!.val % 2 == 1 {
			return 0
		}
		var result: Int = 0
		if root!.left != nil {
			let parent: TreeNode = root!.left!
			result += parent.left == nil ? 0 : parent.left!.val
			result += parent.right == nil ? 0 : parent.right!.val
		}
		if root!.right != nil {
			let parent: TreeNode = root!.right!
			result += parent.left == nil ? 0 : parent.left!.val
			result += parent.right == nil ? 0 : parent.right!.val
		}
		return result
	}
	
	func sumEvenGrandparent(_ root: TreeNode?) -> Int {
		if root == nil {
			return 0
		}
		return self.getChildValues(root) + self.sumEvenGrandparent(root?.left) + self.sumEvenGrandparent(root?.right)
		
	}
}