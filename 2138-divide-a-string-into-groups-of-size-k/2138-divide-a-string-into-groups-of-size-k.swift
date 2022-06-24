class Solution {
	func divideString(_ s: String, _ k: Int, _ fill: Character) -> [String] {
		var result: [String] = []
		var i = 0
		
		while i < s.count {
			let start = s.index(s.startIndex, offsetBy: i)
			var end = s.index(s.startIndex, offsetBy: s.count - 1)
			
			// print(i + k - 1)
			// print(s.count - k + 1)
			if i + k - 1 < s.count {
				
				end = s.index(s.startIndex, offsetBy: i + k - 1)
				print("in")
			}
			
			// print(i)
			var subString = String(s[start ... end])
			if subString.count < k {
				subString += repeatElement(fill, count: k - subString.count)
			}
			result.append(subString)
			
			i += k
		}
		
		return result
	}
}
