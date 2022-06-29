class Solution {
	func findClosestNumber(_ nums: [Int]) -> Int {
		var result: Int = nums[0]
		var min_distance: Int = abs(result)
		
		for num in nums {
			let distance: Int = abs(num)
			
			if distance < min_distance {
				result = num
				min_distance = distance
			}
			if distance == min_distance {
				result = max(result, num)
			}
			
		}
		
		return result
	}
}
