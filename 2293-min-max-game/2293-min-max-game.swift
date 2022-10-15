class Solution {
	func minMaxGame(_ nums: [Int]) -> Int {
		if (nums.count == 1){ return nums[0] }
		var newArr: [Int] = []

		var minFunc = true
		for i in stride(from: 0, to: nums.count, by: 2) {
			if minFunc {
				newArr.append(min(nums[i], nums[i + 1]))
				minFunc = false
			} else {
				newArr.append(max(nums[i], nums[i + 1]))
				minFunc = true
			}
		}

		return minMaxGame(newArr)
	}
}
