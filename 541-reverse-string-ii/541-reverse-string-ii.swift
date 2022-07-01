class Solution {
	func reverseStr(_ s: String, _ k: Int) -> String {
		var result: String = ""
		var i: Int = 0
		var rev: Bool = true
		
		while i < s.count {
			let start = s.index(s.startIndex, offsetBy: i)
			let end = s.index(s.startIndex, offsetBy: i + k > s.count ? s.count : i + k)
			
			let subString: String = String(s[start..<end])
			if rev {
				result += subString.reversed()
				rev = false
			} else {
				result += subString
				rev = true
			}
			
			
			i += k
		}
		
		
		return result
	}
}
