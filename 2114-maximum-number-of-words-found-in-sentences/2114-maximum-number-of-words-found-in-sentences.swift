class Solution {
	func mostWordsFound(_ sentences: [String]) -> Int {
		var result: Int = 0
		
		for sentence in sentences {
			var countSpace: Int = 1
			
			for cha in sentence {
				if (cha != " ") {
					continue
				}
				countSpace += 1
			}
			
			result = max(result, countSpace)
		}
		
		return result
	}
}
