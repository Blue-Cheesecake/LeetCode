class Solution {
	func postorder(_ root: Node?) -> [Int] {
		if root == nil {
			return []
		}
		if root!.children.isEmpty {
			return [root!.val]
		}
		var child_arr: [Int] = []
		for node in root!.children {
			child_arr += postorder(node)
		}
		child_arr.append(root!.val)
		return child_arr
	}
}
