class Solution {
	func numberOfPairs(_ nums: [Int]) -> [Int] {
		var set: Set<Int> = []
		var result: [Int] = [0, 0]


		for num in nums {
			if !set.contains(num) {
				set.insert(num)
			} else {
				set.remove(num)
				result[0] += 1
			}
		}

		result[1] = nums.count - (result[0] * 2)
		return result
	}
}
