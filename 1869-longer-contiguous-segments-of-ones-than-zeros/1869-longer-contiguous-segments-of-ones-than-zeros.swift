class Solution {
	func checkZeroOnes(_ s: String) -> Bool {
		var zeros = ""
		var ones = ""
		var longestZeros = 0
		var longestOnes = 0
		
		for i in 0 ..< s.count {
			let start = s.index(s.startIndex, offsetBy: i)
			let end = s.index(s.startIndex, offsetBy: i + 1)
			let char = s[start..<end]
			if char == "0" {
				zeros += "0"
				longestOnes = max(ones.count, longestOnes)
				ones = ""
			} else {
				ones += "1"
				longestZeros = max(zeros.count, longestZeros)
				zeros = ""
			}
			
			if i == s.count - 1 {
				longestOnes = max(ones.count, longestOnes)
				longestZeros = max(zeros.count, longestZeros)
			}
		}
		// print("Zero: \(longestZeros) Ones: \(longestOnes)")
		return longestOnes > longestZeros
	}
}
