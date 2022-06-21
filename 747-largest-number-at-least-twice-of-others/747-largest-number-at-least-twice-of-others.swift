class Solution {
	func dominantIndex(_ nums: [Int]) -> Int {
		// find the largest
		var largest: Int = nums[0]
		var index = 0
		
		for i in 1 ..< nums.count {
			if nums[i] > largest {
				largest = nums[i]
				index = i
			}
		}
		
		let isAllAtleastTwice: Bool = nums.allSatisfy {
			$0 != largest ? largest >= $0 * 2 : true
		}
		
		if isAllAtleastTwice {
			return index
		}
		return -1
	}
}
