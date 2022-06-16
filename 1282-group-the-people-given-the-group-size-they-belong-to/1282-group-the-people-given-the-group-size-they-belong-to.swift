class Solution {
	func groupThePeople(_ groupSizes: [Int]) -> [[Int]] {
		var result: [[Int]] = []
		// Size, Array
		var map: [Int: [Int]] = [:]
		
		for i in 0 ..< groupSizes.count {
			let sz: Int = groupSizes[i]
			
			if map[sz] != nil {
				var arr: [Int] = map[sz]!
				arr.append(i)
				map[sz] = arr
				
				if arr.count == sz {
					result.append(arr)
					// clear
					map[sz] = []
				}
			}
			else {
				map[sz] = [i]
				
				if sz == map[sz]?.count {
					result.append(map[sz]!)
					map[sz] = []
				}
			}
		}
		
		print(map)
		return result
	}
}
