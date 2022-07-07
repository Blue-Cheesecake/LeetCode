class Solution {
	func findLonely(_ nums: [Int]) -> [Int] {
		var result: [Int] = []
		var map: [Int: Int] = [:]
		
		for num in nums {
			map[num] = map[num] == nil ? 1 : map[num]! + 1
		}
		
		for (num, freq) in map {
			if freq == 1, map[num - 1] == nil, map[num + 1] == nil {
				result.append(num)
			}
		}
		
		
		return result
	}
}

