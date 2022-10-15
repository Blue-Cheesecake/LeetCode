class Solution {
	func sortPeople(_ names: [String], _ heights: [Int]) -> [String] {
		var map: [(String, Int)] = []
		for i in 0 ..< names.count {
			map.append((names[i], heights[i]))
		}
		map.sort { $0.1 > $1.1 }
		let result = map.map { $0.0 }
		return result
	}
}
