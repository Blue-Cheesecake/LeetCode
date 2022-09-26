class Solution {
	func construct2DArray(_ original: [Int], _ m: Int, _ n: Int) -> [[Int]] {
		var result: [[Int]] = []
		
		var placeHold: [Int] = []
		for num in original {
			placeHold.append(num)
			if placeHold.count == n {
				result.append(placeHold)
				placeHold.removeAll()
			}
		}
		
		if !placeHold.isEmpty { return [] }
		return result.count == m ? result : []
	}
}
