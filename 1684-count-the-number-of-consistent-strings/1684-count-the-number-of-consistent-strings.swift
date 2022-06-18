class Solution {
	func countConsistentStrings(_ allowed: String, _ words: [String]) -> Int {
		var allowedSet: Set<Character> = []
		for char in allowed {
			allowedSet.insert(char)
		}
		
		var result = 0
		
		for word in words {
	
			var isConsistent = true
			for char in word {
				if !allowedSet.contains(char) {
					isConsistent = false
					break
				}
			}
			
			if isConsistent {
				result += 1
			}
		}
		
		return result
	}
}
