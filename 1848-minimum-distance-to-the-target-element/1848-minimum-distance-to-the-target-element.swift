class Solution {
	func getMinDistance(_ nums: [Int], _ target: Int, _ start: Int) -> Int {
		var result: Int = Int.max
		for i in 0..<nums.count {
			if nums[i] == target {
				result = min(result, abs(i - start))
			}
		}
		return result
	}
}
