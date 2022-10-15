class Solution {
	func sortPeople(_ names: [String], _ heights: [Int]) -> [String] {
		var map: [(String, Int)] = []
		for i in 0 ..< names.count {
			map.append((names[i], heights[i]))
		}

		map.sort { pair1, pair2 in pair1.1 > pair2.1 }
		let result = map.map { pair in
			pair.0
		}
//		print(map)
//		print(result)
		return result
	}
}
