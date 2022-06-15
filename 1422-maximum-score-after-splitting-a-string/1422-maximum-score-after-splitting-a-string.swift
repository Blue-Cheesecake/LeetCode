class Solution {
	func maxScore(_ s: String) -> Int {
		var result = 0
		var right = 0
		var left = 0
		
		for cha in s {
			if cha == "1" {
				right += 1
			}
		}
		
		for i in 0 ..< s.count - 1 {
			let index: String.Index = s.index(s.startIndex, offsetBy: i)
			let bin = Int(String(s[index]))!
			if bin == 1 {
				right -= 1
			} else {
				left += 1
			}
			let sum: Int = left + right
			result = max(result, sum)
		}
		
		return result
	}
}
