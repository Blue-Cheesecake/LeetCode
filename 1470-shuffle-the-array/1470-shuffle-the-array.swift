class Solution {
	func shuffle(_ nums: [Int], _ n: Int) -> [Int] {
		var result: [Int] = []
		var left: Int = 0

		while left < n {
			result.append(nums[left])
			result.append(nums[left + n])
			left += 1
		}
		
		return result
	}
}
