class Solution {
	func maximumProduct(_ nums: [Int]) -> Int {
		let nums: [Int] = nums.sorted()
		let case1: Int = nums[nums.count - 1] * nums[nums.count - 2] * nums[nums.count - 3]
		let case2: Int = nums[0] * nums[1] * nums[nums.count - 1]
		return max(case1, case2)
	}
}
