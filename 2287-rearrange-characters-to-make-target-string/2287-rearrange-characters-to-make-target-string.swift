class Solution {
	func rearrangeCharacters(_ s: String, _ target: String) -> Int {
		var freq_S: [Character: Int] = [:]
		var freq_T: [Character: Int] = [:]
		
		for char in s {
			freq_S[char] = freq_S[char] == nil ? 1 : freq_S[char]! + 1
		}
		for char in target {
			freq_T[char] = freq_T[char] == nil ? 1 : freq_T[char]! + 1
		}
		
		var result: Int = 0
		var isSatisfied: Bool = true
		repeat {
			
			for pair in freq_T {
				if let freq_val_S = freq_S[pair.key] {
					let freq_val_T = pair.value
					
					if freq_val_S < freq_val_T {
						isSatisfied = false
						break
					}
				
					freq_S[pair.key]! -= freq_val_T
				} else {
					isSatisfied = false
					break
				}
				
			}
			
			if isSatisfied {
				result += 1
			}
			
		} while isSatisfied
		
		return result
	}
}
