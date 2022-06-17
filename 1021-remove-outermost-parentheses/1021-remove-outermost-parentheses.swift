class Solution {
	func removeOuterParentheses(_ s: String) -> String {
		var result = ""
		var parenthesis = ""
		var left = 0
		var right = 0
		
		for char in s {
			if char == "(" {
				left += 1
			} else {
				right += 1
			}
			parenthesis += String(char)
			
			if left == right {
				if left == 1, right == 1 {
					parenthesis = ""
					left = 0
					right = 0
					continue
				}
				
				// parenthesis to result without leftmost and rightmost
				// reset parenthesis to empty string
				let leftMost: String.Index = parenthesis.index(parenthesis.startIndex, offsetBy: 1)
				let rightMost: String.Index = parenthesis.index(parenthesis.startIndex, offsetBy: parenthesis.count - 2)
				result += parenthesis[leftMost ... rightMost]
				parenthesis = ""
				left = 0
				right = 0
			}
		}
		
		return result
	}
}
