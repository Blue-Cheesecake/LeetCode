class Solution {
	func preorder(_ root: Node?) -> [Int] {
		if root == nil {
			return []
		}
		if root!.children.isEmpty {
			return [root!.val]
		}
		var result: [Int] = [root!.val]
		for node in root!.children {
			result += self.preorder(node)
		}
		return result
	}
}