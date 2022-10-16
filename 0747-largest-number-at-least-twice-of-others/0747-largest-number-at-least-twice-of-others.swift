class Solution {
	func dominantIndex(_ nums: [Int]) -> Int {
		let sortedNums = nums.sorted()
		let n = sortedNums.count
		if sortedNums[n - 1] < sortedNums[n - 2] * 2 {
			return -1
		}

		for i in 0 ..< n {
			if nums[i] == sortedNums[n - 1] { return i }
		}

		return 0
	}
}
